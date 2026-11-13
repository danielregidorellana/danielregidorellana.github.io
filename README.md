# Daniel Regidor portfolio

Static, bilingual portfolio prepared for GitHub Pages. The site uses plain HTML, CSS and JavaScript, with no build step or paid service.

## Preview locally

Open `index.html` in a browser. The landing page redirects to English; use the language switch to open Spanish.

## Publish with GitHub Pages

1. Upload the contents of this folder to the root of a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Once GitHub provides the published URL, set the canonical URLs and Open Graph image URL in `en/index.html` and `es/index.html` to that address.

All internal links use relative paths, so the site works from a project repository path as well as a user site.

## Content and assets

- Spanish page: `es/index.html`
- English page: `en/index.html`
- CV downloads: `assets/cv/`
- Styles and CV section navigation: `assets/css/` and `assets/js/`
- Social share image and favicon: `assets/images/`

The hero uses Daniel's supplied portrait with the red tie, optimized as a 4:5 WebP image. The downloadable CV PDFs omit the phone number for public exposure.

## Add projects when ready

Insert a `section` with `id="projects"` between Journey and Contact in both language pages and add the matching header link. Give each project a cover image, its objective, the approach, the findings and the recommendations. The first release has no projects to display.

## Update the CV PDFs

In the working folder, edit `build_cvs.py` and run `python build_cvs.py` to regenerate both one-page PDFs. To change the portrait, replace `NuevaFotoLinkedin.PNG` there and run `python build_social_image.py`.
