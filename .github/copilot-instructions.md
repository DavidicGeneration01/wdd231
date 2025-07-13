# Copilot Instructions for Timbuktu Chamber of Commerce Project

## Project Overview
- This is a static website for the Timbuktu Chamber of Commerce, focused on business directories, local events, and community resources.
- The project is organized into a main root and a `chamber/` subdirectory, each with their own HTML, CSS, JS, and asset folders.
- Data for directories and members is stored in JSON files under `data/`.

## Key Structure
- `index.html`, `prophets.html`: Main site entry points.
- `chamber/`: Main business directory and chamber site.
  - `index.html`, `directory.html`: Chamber landing and directory pages.
  - `scripts/`: JavaScript for navigation, directory, and UI logic.
  - `styles/`: CSS for layout and responsive design.
  - `data/member.json`: Business/member data for directory rendering.
  - `img/`: Chamber-specific images and icons.
- Root-level `data/`, `images/`, `scripts/`, `styles/`: Used for site-wide or non-chamber-specific content.

## Patterns & Conventions
- Responsive design is a priority; CSS uses multiple `@media` queries for breakpoints (notably 900px, 768px, and down to 340px).
- Navigation is handled by `nav.js` and styled for both desktop and mobile (hamburger menu).
- Business directory cards are generated from JSON data and styled as grid items.
- Dark mode is supported via a `.dark-mode` class on `<body>` and toggled with a button in the nav.
- Font and color variables are defined in `:root` for easy theming.

## Developer Workflows
- No build step: edit HTML/CSS/JS directly and refresh in browser.
- No automated tests or CI/CD pipeline present.
- For local development, open HTML files directly in a browser (no server required for basic use).
- To update business/member data, edit the relevant JSON files and ensure JS fetches from the correct path.

## Integration Points
- Uses Font Awesome via CDN for icons.
- Google Fonts loaded via CDN in `<head>`.
- No backend or API integration; all data is static and loaded client-side.

## Examples
- To add a new business: update `chamber/data/member.json` and ensure the directory JS renders it.
- To add a new page: create an HTML file and link it in the nav in all relevant HTML files.
- To adjust mobile layout: edit or add `@media` queries in `chamber/styles/index.css`.

## Key Files
- `chamber/index.html`, `chamber/directory.html`, `chamber/scripts/`, `chamber/styles/`, `chamber/data/member.json`
- Root: `index.html`, `prophets.html`, `data/`, `images/`, `scripts/`, `styles/`

---
For any unclear patterns or missing documentation, please ask for clarification or provide feedback to improve these instructions.
