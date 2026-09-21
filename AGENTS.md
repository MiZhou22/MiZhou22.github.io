# Repository guidance

## Communication and scope

- Answer the owner in Chinese unless explicitly asked to use another language. Keep public website content in English unless requested otherwise.
- Be honest, professional, friendly, and concise; use light humor when appropriate. Distinguish verified results from assumptions and suggestions.
- Preserve the existing project structure and keep changes focused. Explain what changed, why, what was checked, and any remaining limitations.
- Implement requested work autonomously. A request for ideas alone does not authorize a redesign. Do not invent academic claims, publication metadata, awards, or personal details.

## Project map

This is Mi Zhou's academic homepage, adapted from Jekyll Now and Jon Barron's website. It uses Jekyll, Liquid, Markdown with YAML front matter, and SCSS. The intended workflow is local preview followed by Git add, commit, and push for publication. Verify the actual hosting configuration when doing deployment work; it is not recorded in this checkout.

- `_config.yml`: name, biography, profile links, research summary, site URL, Jekyll settings, and build exclusions.
- `_layouts/default.html`: complete homepage, including profile, research listing, analytics, and attribution.
- `index.html`: explicit homepage entry point. `_layouts/post.html`: redirects publication URLs to the project page when present, otherwise the homepage.
- `_layouts/project.html`, `projects/<slug>/index.html`, and `assets/projects/<slug>/`: reusable project layout, project content, and selected public media. `_includes/head.html` is shared metadata and analytics.
- `_includes/publication-group.html` and `publication-row.html`: shared year headings and publication rows for the two author-role sections.
- `_posts/YYYY-MM-DD-Slug.markdown`: publication metadata and optional summary text. The homepage renders posts in the `research` category from `site.posts`.
- `style.scss`: active site styles; preserve its opening YAML front matter so Jekyll compiles it. `_sass/` holds legacy partials whose imports are currently commented out.
- `images/`: original images. `tn/images/`: corresponding publication thumbnails.
- `pdfs/`, `_old_posts/`: include inherited material; inspect ownership and references before reusing or removing files.
- `_make_thumbnails.sh`, `_make_favicon.sh`: Bash/ImageMagick helpers, not PowerShell scripts.
- `LICENSE` and the homepage footer: preserve license notices and design attribution.

## Implementation conventions

- Prefer the existing static stack. Do not introduce a frontend framework, package manager, or backend for routine content or layout changes.
- Keep reusable personal information in `_config.yml`, publications in `_posts/`, presentation in layouts and SCSS. Extract repeated markup into `_includes/` if it materially improves maintainability.
- Follow surrounding formatting: two-space indentation for YAML/HTML/SCSS, readable Liquid, descriptive CSS classes, and UTF-8 text. Avoid unrelated reformatting.
- Use `relative_url` for internal asset/navigation paths and `absolute_url` where an absolute URL is needed. Check path capitalization because deployment may use a case-sensitive filesystem.
- Keep content usable without JavaScript. For visual changes, use semantic HTML, responsive layouts, meaningful image alt text, visible keyboard focus, and restrained motion.
- Preserve author order, emphasis, contribution markers, titles, venues, dates, and existing links unless a requested correction is supported by evidence. Do not infer the meaning of an asterisk from another paper.
- Document non-obvious assumptions and new configuration fields where they are introduced. Document units or tensor shapes only when relevant to actual code or research examples.

## Adding or updating a publication

1. Follow an existing research post. Required project fields are `layout: post`, `title`, `date`, `image`, `categories: research`, `authors`, and `venue`. The legacy singular `author` field does not replace the displayed `authors` field.
2. Quote YAML strings containing colons or HTML. Preserve `<strong>` author highlighting as appropriate. Use the verified publication date; investigate filename/front-matter date differences before changing them.
3. The active template supports optional `arxiv`, `video`, `code`, `poster`, `slides`, `website`, and `youtube` links. A `paper` field is not currently rendered in the research section; use a supported field or deliberately extend the template.
4. Set `image: /images/Filename.png` and supply the original and `tn/images/Filename.png`. The illustrated first/co-first section uses originals for clarity at larger display sizes; the compact co-authored section omits images. Preserve scientific image proportions and legibility, and optimize oversized originals before adding them.
5. The thumbnail script creates only missing thumbnails and does not refresh existing ones. Ensure destination folders exist, and explicitly regenerate the relevant thumbnail after replacing an original. Do not run bulk image conversion unnecessarily.
6. Put optional plain-language summary text after the closing front-matter delimiter; the homepage displays `post.excerpt`. Do not fabricate results or quantitative claims.
7. Set `author_role: first_or_cofirst` for first/co-first author papers, or `author_role: coauthor` for other author positions. Both sections sort by front-matter date descending and show year headings. Do not infer roles from asterisks at render time. The owner confirmed CDFN and ULBN as co-first author papers; there are currently no corresponding-author papers. Check that every research post has one valid role so no papers are omitted.

## Local validation

- Inspect `git status --short` before editing and preserve unrelated work.
- No Gemfile, lockfile, CI workflow, or automated test suite is tracked at the time of writing. `.gitignore` excludes Gemfile and Gemfile.lock. Do not assume `bundle exec` is configured, or that a plain HTTP server can render Liquid/SCSS.
- Check available tools with `ruby --version`, `bundle --version`, and `jekyll --version`. In the environment used to write this file, these executables were not discoverable on PATH; recheck in future sessions.
- If a working global Jekyll environment exists, run `jekyll build` and `jekyll serve --host 127.0.0.1`. If a local Gemfile/environment exists, use `bundle exec jekyll build` and `bundle exec jekyll serve --host 127.0.0.1` instead. Use the configured plugin `jekyll-sitemap` and a runtime compatible with the actual hosting environment.
- If dependencies are missing, report that build/preview validation was not performed. When setup is in scope, document exact dependencies and commands in README rather than silently relying on an untracked machine-specific setup.
- For rendered changes, inspect the local homepage at phone and desktop widths (approximately 375 and 1280 CSS pixels). Check overflow, long titles/authors, image proportions, keyboard focus, internal assets, and changed links. Verify the generated root page and stylesheet, not just a successful process exit.
- For documentation-only changes, review accuracy and the diff; a full site build is unnecessary unless build configuration also changes. Do not add tests that merely repeat static markup.
- Run `git diff --check` and review `git diff` before delivery. Keep `_site/`, caches, temporary previews, and local dependencies out of commits. Report only checks actually performed.

## Known inherited issues

Recheck these observations before fixing them; this section is not authorization for unrelated cleanup.

- Routing was corrected when project pages were added: root `index.html` owns `/`; posts use `/publications/:title/` redirects with `sitemap: false`. Do not restore the shared `permalink: /` for posts. Verify the homepage, project page, redirects, and sitemap after routing changes.
- `CNAME` contains `leonidk.com`, whereas `url` names `https://MiZhou22.github.io`; `CNAME` is also in Jekyll's exclusions. Do not assume that inherited domain belongs to the owner or that excluding it establishes the host's domain settings. Verify the intended domain and hosting settings during deployment work.
- `_make_favicon.sh` references `images/circle_bw_crop.jpg`, which is absent. `favicon.ico` is ignored. Verify the source image and tracked output before changing favicon generation.
- `_includes/head.html` includes a hard-coded Google Analytics ID. Verify ownership before modifying analytics. The inherited commented biography/project sections have been removed.
- Some publication filenames and front-matter dates differ. Determine the correct date from evidence, not filename alone.

## Git and publishing

- The observed branch is `master`, and `origin` is `git@github.com:MiZhou22/MiZhou22.github.io.git`. Recheck the branch, remote, and working tree before Git operations.
- When commit/push is requested, review and stage specific relevant files, inspect the staged diff, commit with a concise descriptive message, and push to the verified intended branch. Existing authorization remains valid; do not repeatedly ask for confirmation.
- The owner has explicitly authorized committing and pushing completed homepage adjustments after checks. Apply this standing authorization to future requested homepage changes without asking again, unless the owner changes this preference. Do not force-push, rewrite shared history, or discard unrelated changes without explicit authorization.
- When publication is requested, check available deployment status and the live result after pushing. A successful push alone does not prove that deployment succeeded; report any verification limits.
- Keep `AGENTS.md` excluded from Jekyll output so maintenance instructions do not become a public site asset.

## Design direction for future requested work

Keep the site recognizably academic, lightweight, and easy to update. Proposed improvements, not an approved implementation backlog:

The current design uses a warm off-white background, muted blue accents, serif name/section headings, a sticky anchor navigation, a desktop profile/portrait grid, and year-grouped publications. First/co-first entries use images; other contributions use compact text entries. Preserve these distinctions when extending the design. Profile position, affiliation caption, and tagline live under `homepage` in `_config.yml`. Existing `website` links point to publisher landing pages and are labeled `Link` as requested by the owner, not `Paper` or `PDF`; use labels that accurately describe link destinations.

- A concise research introduction and two or three featured works with readable figures and verified one-sentence summaries.
- A full publication list grouped by year, with optional topic filtering if useful.
- Short news updates and a CV link only when the owner supplies current content.
- More deliberate typography, spacing, consistent link styling, and a stacked mobile layout.
- Research demonstrations using real project media where available; preserve scientific fidelity and avoid decorative effects that obstruct reading.

Project pages: match the post `project` field to the project page `permalink`; this enables the homepage button and supplies the project header metadata. Reuse the project layout, preserve PDF bytes, label reference/simulation/experiment media explicitly, and retain source provenance in README. Never publish raw research folders wholesale.

The owner currently prefers not to host the Natural Defocus PDF. Keep publisher/full-text links; do not restore the PDF download or upload the file unless requested. The local PDF may be consulted as a source.
