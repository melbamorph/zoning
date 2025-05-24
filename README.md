# City of Lebanon, NH Zoning Ordinance (Beta)

This repository contains an **experimental** build of the City of Lebanon, New Hampshire zoning ordinance. It is intended to explore how GitHub Pages can present zoning content and should not be relied upon as the official ordinance.

For the legally binding ordinance, visit [https://lebanonnh.gov/zoningordinance](https://lebanonnh.gov/zoningordinance).

## Overview

The pages in the `_pages/` directory mirror sections of the ordinance so that they can be viewed using the Just the Docs theme. Content here may be incomplete or outdated as we test formatting and workflow options.

The site also includes an optional **dark mode**. Use the toggle in the page header to switch between light and dark themes.

## Building Locally

1. Install [Jekyll](https://jekyllrb.com) and [Bundler](https://bundler.io).
2. Run `bundle install`.
3. Run `bundle exec jekyll serve` and open `http://localhost:4000` to preview the site.

If you encounter an error stating that the `just-the-docs` theme could not be found, make sure you are running Jekyll via Bundler so the required gems are loaded.

## License

This project is released under the [MIT License](LICENSE).
