---
title: How to update the ordinance
permalink: /how-to-update/
nav_order: 20
---

# How to update the ordinance site

Follow these steps whenever the official PDF changes or an amendment is approved. The PDF at
[lebanonnh.gov/zoningordinance](https://lebanonnh.gov/zoningordinance) remains the legal source of truth.

## 1) Log the amendment
- Add an entry to `_data/amendments.yml` with a unique `id`, `status: pending`, and links to meeting packets or memos.
- Include the `article`, impacted `sections`, and a concise `summary`.

## 2) Update the article text
- Edit the relevant Markdown file in `_pages/` using the exact PDF language.
- Keep existing section anchors `{#section-xxx}` intact so URLs remain stable; add anchors to new sections.
- Update front matter fields if present (e.g., `last_amended`), and include a short “Amended on <date>” note if helpful.

## 3) Prepare the pull request
- Run a Markdown preview locally or in GitHub to confirm formatting and links.
- Double-check accessibility: semantic headings, alt text for images, descriptive link text, and sufficient contrast.
- Open a PR summarizing the amendment (e.g., "Article 6 – update temporary event permits") and link it in `_data/amendments.yml`.

## 4) Mark the amendment effective
- Once adopted, change the entry in `_data/amendments.yml` to `status: effective` and add the `effective_date`.
- Update the affected article text and, if applicable, note the adoption date.

## 5) Release and archive
- Merge the PR into `main`; GitHub Pages will redeploy automatically.
- Add a new entry to `CHANGELOG.md` describing the amendment and tag the repository with the official PDF date (e.g., `v2024-04-01`).
- Keep the prior PDF available in `/assets/` or linked in `CHANGELOG.md` for reference.
