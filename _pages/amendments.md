---
title: Amendments
permalink: /amendments/
nav_order: 2
---

# Amendments

Below are pending and recently adopted amendments to the City of Lebanon Zoning Ordinance. Each entry links to supporting
documents and the pull request where the text change was made. When an amendment becomes effective, the associated article and
sections are updated on this site.

{% assign pending = site.data.amendments | where: "status", "pending" %}
{% assign effective = site.data.amendments | where: "status", "effective" %}

## Pending amendments

{% if pending.size > 0 %}
<ul>
  {% for item in pending %}
  <li>
    <strong>{{ item.article }}</strong> — {{ item.summary }}<br />
    <span class="label">Status:</span> Pending (vote date: {{ item.vote_date | default: "TBD" }}, effective: {{ item.effective_date | default: "TBD" }})<br />
    <span class="label">Sections:</span> {{ item.sections | array_to_sentence_string }}<br />
    {% if item.docs %}<span class="label">Docs:</span> {% for doc in item.docs %}<a href="{{ doc.url }}">{{ doc.title }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}<br />{% endif %}
    {% if item.pr %}<span class="label">Tracking:</span> <a href="{{ item.pr }}">GitHub PR</a>{% endif %}
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No pending amendments are logged at this time.</p>
{% endif %}

## Recently adopted

{% if effective.size > 0 %}
<ul>
  {% for item in effective %}
  <li>
    <strong>{{ item.article }}</strong> — {{ item.summary }}<br />
    <span class="label">Status:</span> Effective (vote date: {{ item.vote_date | default: "TBD" }}, effective: {{ item.effective_date | default: "TBD" }})<br />
    <span class="label">Sections:</span> {{ item.sections | array_to_sentence_string }}<br />
    {% if item.docs %}<span class="label">Docs:</span> {% for doc in item.docs %}<a href="{{ doc.url }}">{{ doc.title }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}<br />{% endif %}
    {% if item.pr %}<span class="label">Tracking:</span> <a href="{{ item.pr }}">GitHub PR</a>{% endif %}
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No adopted amendments are recorded yet.</p>
{% endif %}

---

### How to use this list
- Log proposed or pending amendments with `status: pending` to track upcoming changes.
- Update entries to `status: effective` with the effective date once adopted, and ensure the relevant article text is updated.
- Link to meeting packets, public hearing notices, and PRs for transparency.
