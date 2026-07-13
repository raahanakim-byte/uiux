# Your Portfolio Site

This is a plain HTML/CSS website — no build tools, no installs required.

## What's in this folder
- `index.html` — Home page (hero intro + About me + Contacts, all on one scrolling page)
- `case-study.html` — Case study page
- `resume.html` — Resume page (with a "Download PDF" button)
- `styles.css` — controls colors, fonts, and layout for ALL pages at once
- `script.js` — powers the mobile menu button, you shouldn't need to touch it

## How to view it right now
Just double-click `index.html`. It opens in your browser. Click around —
"Case study" and "Resume" in the nav bar go to the other pages.

## How to edit text
1. Open any `.html` file in a plain text editor (Notepad, TextEdit, or free
   apps like **VS Code** or **Notepad++**).
2. Search for the word `EDIT` — every spot you're likely to want to change
   has a comment right above it like `<!-- EDIT: your name -->`.
3. Change the text between the tags, save the file, refresh your browser.

Example — to change your name on the homepage, find this in `index.html`:
```html
<!-- EDIT: your name -->
Your Name
```
and replace `Your Name` with your actual name.

## How to change colors
Open `styles.css` and look at the very top — there's a list like:
```css
--blue-accent: #3b6fe0;
```
Change the color code (hex value) and every button, link, and highlight
across all three pages updates at once. A tool like https://coolors.co
can help you pick hex codes.

## How to add your own photo / screenshots
Real images look better than the placeholder blocks used right now.
1. Put your image file (e.g. `photo.jpg`) in this same folder.
2. In `index.html`, find the placeholder `<div>` in the hero section (the
   grey box with the person icon) and replace it with:
   ```html
   <img src="photo.jpg" style="border-radius: 20px;">
   ```
Do the same in `case-study.html` for your real screenshots — replace a
`.browser-frame` block with an `<img src="your-screenshot.png">`.

## How to add your real resume PDF
Save your resume as `resume.pdf` in this same folder. The "Download PDF"
button on the Resume page will then work automatically — no code changes
needed.

## How to publish it online (free options)
- **Netlify Drop**: go to https://app.netlify.com/drop and drag this whole
  folder in. You'll get a live link in seconds.
- **GitHub Pages**: upload the folder to a GitHub repository, then turn on
  "Pages" in the repository settings.
- **Vercel**: similar drag-and-drop flow at https://vercel.com/new.

## Adding more case studies
Duplicate `case-study.html`, rename the copy (e.g. `case-study-2.html`),
edit its content, then add a link to it somewhere — e.g. in the nav bar of
every page, or as a project list on the homepage.
