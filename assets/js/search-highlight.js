(function(){
  function escapeRegExp(str){
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function highlightTerms(terms){
    if(!terms.length) return;
    var container = document.getElementById('main-content') || document.body;
    var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
      acceptNode: function(node){
        var parent = node.parentNode;
        while(parent){
          if(parent.nodeType !== 1) break;
          var tag = parent.tagName;
          if(['SCRIPT','STYLE','CODE','PRE','NOSCRIPT'].indexOf(tag) !== -1){
            return NodeFilter.FILTER_REJECT;
          }
          parent = parent.parentNode;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function(node){
      var text = node.nodeValue;
      var replaced = text;
      var matched = false;
      terms.forEach(function(term){
        var regex = new RegExp('(' + escapeRegExp(term) + ')', 'gi');
        if(regex.test(replaced)){
          matched = true;
          replaced = replaced.replace(regex, '<mark>$1</mark>');
        }
      });
      if(matched){
        var span = document.createElement('span');
        span.innerHTML = replaced;
        node.parentNode.replaceChild(span, node);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    var searchInput = document.getElementById('search-input');
    if(searchInput){
      document.addEventListener('click', function(e){
        var link = e.target.closest('.search-result');
        if(link && searchInput.value){
          localStorage.setItem('jtd_search_terms', searchInput.value);
        }
      });
    }
    var saved = localStorage.getItem('jtd_search_terms');
    if(saved){
      localStorage.removeItem('jtd_search_terms');
      var terms = saved.split(/\s+/).filter(Boolean);
      highlightTerms(terms);
    }
  });
})();
