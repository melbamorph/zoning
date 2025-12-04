# Lebanon Zoning Ordinance GitHub Pages Plan

This plan outlines how to publish and maintain the City of Lebanon Zoning Ordinance on GitHub Pages with a minimalist, ADA-accessible experience that tracks changes and highlights pending amendments. The authoritative source is the PDF version of the ordinance.

## Content structure
- **One article per Markdown file** in `_pages/` with stable permalinks (e.g., `/article-1/`).
- **Section-level anchors**: keep explicit `{#section-xxx}` IDs for every section header so links remain stable when text changes.
- **Front matter metadata** per article:
  - `effective_date`: date the article text became effective.
  - `last_amended`: most recent amendment date from the official adoption record.
  - `pending_amendments`: list of pending changes (title, brief summary, status, link to staff memo or meeting record).

## Source-of-truth handling
- Treat the **PDF as the authoritative source**. Store the PDF in `/assets/` (or reference the city URL) and note the publication date in `_config.yml`.
- When a new PDF is released, capture the version in `CHANGELOG.md` and tag the repo (e.g., `v2024-04-02`).

## Changelog and amendments
- Add a repository-level `CHANGELOG.md` with entries formatted as:
  - version/tag (e.g., `v2024-04-02`), effective date, and summary of amendments.
  - links to affected articles and PR numbers.
- Maintain a `_data/amendments.yml` file to drive a “Recent Amendments” page and per-article badges. Suggested fields: `id`, `article`, `section`, `type` (adopted/pending), `status`, `effective_date`, `vote_date`, `summary`, `docs` (URLs), `pr` (GitHub link).
- Pending amendments stay in `_data/amendments.yml` with `status: pending` until enacted; adopted ones move to `status: effective` and update article metadata.

## Publishing workflow
1. **Intake**: Staff log an amendment proposal in `_data/amendments.yml` with `status: pending` and upload/reference supporting docs.
2. **Update text**: For adopted amendments, edit the relevant article Markdown using the PDF language; keep IDs stable and add a short “Amended on” note (or update `last_amended`).
3. **Review**: Open a PR with a checklist (anchors intact, links valid, accessibility pass). Require at least one approver.
4. **Release**: Merge to `main`; tag a release that matches the official PDF date; GitHub Pages auto-deploys.

## Navigation and search
- Keep the article list on the home page; add a sidebar/table of contents per page using Just-the-Docs auto-generated nav.
- Enable Just-the-Docs search (already configured) and ensure heading level is set to include sections.
- Provide a single-page “Print” view by concatenating all articles (optional for phase 2).

## Accessibility and usability
- Ensure all pages meet **WCAG 2.1 AA**: semantic headings, sufficient color contrast, focus-visible styles, alt text for images (city seal), and descriptive link text.
- Keep layout minimalist: no heavy imagery; rely on theme typography.
- Include a persistent banner linking to the official PDF and stating the site’s experimental/official status.

## Pending vs. effective text
- Use badges at the top of an article and next to impacted sections to show pending amendments (sourced from `_data/amendments.yml`).
- Provide a dedicated `/amendments/` page summarizing pending and recently effective changes with links into sections.

## Staff guidance
- Add a short “How to update” page describing PDF-to-Markdown steps, how to keep anchors stable, and how to log amendments.
- Encourage small, single-topic PRs with clear titles (e.g., “Article 3 – amend Section 305.2 setbacks”).

## Future enhancements (optional)
- Auto-generate a diff view between PDF versions (using a script) to pre-fill changelog entries.
- Include RSS/JSON feeds for amendments to notify stakeholders.
