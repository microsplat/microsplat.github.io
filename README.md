# MicroSplat — Project Page

Anonymous RA-L submission project page. Built from the [Nerfies](https://nerfies.github.io/) template.

---

## Preview locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

No build step — it's plain HTML/CSS served directly.

---

## Adding images

Drop files into `static/images/`. The expected filenames are:

| File | Where it appears |
|---|---|
| `teaser.png` | Hero teaser figure below the title |
| `method.png` | Method section pipeline figure |
| `results_1.png` | Left results figure |
| `results_2.png` | Right results figure |
| `tile_1.png` … `tile_8.png` | Real-Time Interactive Viewer grid |

Any format a browser can display (PNG, JPG, WebP, GIF) works. Tiles look best at a square aspect ratio (e.g. 512×512) because the CSS forces 1:1 display.

---

## Connecting the viewer tiles to external links

In `index.html`, find the 8 `<a href="#"` tags inside the `viewer-grid` section and replace each `#` with the URL of the live viewer for that scene:

```html
<a href="https://your-viewer.com/scene-1" target="_blank" rel="noopener" class="tile">
```

Each tile opens the link in a new tab when clicked.

---

## Updating text

All placeholder text is in `index.html` — search for `Lorem ipsum`, `Replace this`, or `Placeholder` to find every spot that needs real content.

To rename the project from **MicroSplat**:
- `<title>` in `<head>`
- `<h1 class="title …">MicroSplat</h1>` in the hero
- The BibTeX entry near the bottom

---

## De-anonymizing after acceptance

Everything sensitive is either removed or in a single HTML comment block. Search `index.html` for:

```
POST-ACCEPTANCE: paste author block + buttons here.
```

Uncomment that block and paste in your author list, affiliations, and paper/arXiv/code/data buttons. The CSS classes (`.publication-authors`, `.publication-affiliations`, `.publication-links`) are already defined.

---

## Deploying to GitHub Pages

1. Push `main` to GitHub — Pages serves `index.html` at the repo root automatically.
2. If Pages isn't enabled yet: **Settings → Pages → Source → Deploy from branch → `main` / `root`**.
3. The site will be live at `https://microsplat.github.io/`.

> **Double-blind warning:** This is a public repo by default. Your git commit author name/email will appear in the public commit history and could deanonymize the submission. Keep the repo **private** until acceptance, or set a throwaway identity for this repo:
> ```bash
> git config user.name "Anonymous"
> git config user.email "anonymous@example.com"
> ```
