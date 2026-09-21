# updated website

This repo is built on a fork of **Jekyll Now** from [this repository](https://github.com/barryclark/jekyll-now). **Jekyll** is a static site generator that's perfect for GitHub hosted blogs ([Jekyll Repository](https://github.com/jekyll/jekyll))

The website design is just a modification of [Jon Barron's website](https://jonbarron.info/) and is converted for my own use, re-purposing my old markdown posts. **Feel free to use template for your own purposes**, but please respect copyright for all the images/content in my `images`, `pdfs`, `_posts` folders.



## issues
* The homepage now has an explicit `index.html`. Publication records use unique `/publications/:title/` redirects and are excluded from the sitemap; project pages use explicit `/projects/<slug>/` URLs.
* If you want multiple paragraphs, consider using `excerpt_separator: <!--more-->` in `_config.yml`, for my own use I didn't need this.
* My own posts have lots of extra stuff left over from my old jekyll design ("author", long descriptions, etc.), feel free to ignore them
* I use thumbnails, so I can upload arbitrary sized images but then only display small ones. The `_make_thumbnails.sh` script generates them and the html template looks in `tn/` for all images.
* I have three categories of post with slightly differerent formatting, so changing sizing requires edits in multiple paces.

## Research project pages

- `projects/natural-defocus/index.html` is the first project page; `_layouts/project.html` supplies reusable publication metadata, navigation, and resource links.
- Set the corresponding post's `project` field to the page's `permalink`. The homepage then adds a **Project Page** button. Keep the existing `website` field for the publisher link.
- Publication metadata is read from the matching post, not duplicated in the project layout. Page-specific description, optional PDF path, and full-text link live in project front matter.
- Store public, selected media under `assets/projects/<slug>/`. Keep raw datasets, checkpoints, editorial project files, and temporary exports outside the published site.
- Keep simulations, references, and optical captures explicitly labeled. Videos use native controls and no autoplay; citation text remains available without JavaScript.
- Check `/`, `/projects/natural-defocus/`, a publication redirect, and `sitemap.xml` after routing changes. The sitemap should contain the homepage and project page, not the publication redirects.

### Natural Defocus media provenance

The owner supplied the final paper PDF and `materials_for_demo` assets. `paper.pdf` is an unchanged copy of the supplied Nature Communications paper (DOI: 10.1038/s41467-026-72736-7). `demo.mp4` comes from `Demo_final.mp4`, resized proportionally to 1600 pixels wide and encoded as H.264/yuv420p with fast-start metadata (CRF 22). Its duration is preserved. `setup.jpg` is a 1400-pixel-wide export of `Experimental_setup_final.png`. The three `couch_*.mp4` clips are encoded as H.264/yuv420p (CRF 18, original resolution and duration) for browser compatibility; their preview images are extracted frames. Originals remain untouched. The overview figure is the existing `images/NaturalDefocusEffect.png`.
