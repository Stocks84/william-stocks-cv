# William Adam Stocks – Interactive CV

The interactive, responsive CV of William Adam Stocks, Junior Full Stack Developer.

- **Live CV:** https://stocks84.github.io/william-stocks-cv/
- **PDF version:** [william-stocks-cv.pdf](william-stocks-cv.pdf)

## Features

- Responsive layout for desktop and mobile
- Two themes: "Mountain" (dark) and "Classic" (light), remembered between visits
- Animated skill bars and scroll-in sections
- Project details in a pop-up modal
- Print stylesheet that produces a clean A4 PDF, with a QR code linking back to the live CV

## Tech

- HTML5 and vanilla JavaScript
- [Tailwind CSS v3](https://v3.tailwindcss.com/), precompiled and minified with the Tailwind CLI
- Custom CSS for the themes, animations and print styles
- [Font Awesome 6](https://fontawesome.com/) icons and Google Fonts (Inter)
- Hosted on GitHub Pages, with no build step on the server

## Project structure

```
.
├── index.html                   # CV markup
├── css/
│   ├── style.css                # Custom styles: themes, animations, print/PDF
│   └── tailwind.css             # Compiled Tailwind output (generated, committed)
├── js/
│   └── main.js                  # Theme toggles, mobile menu, modal, animations, print
├── src/
│   └── tailwind.css             # Tailwind source (input for the build)
├── favicon.svg                  # "WS" monogram favicon
├── apple-touch-icon.png         # Home-screen icon for iOS
├── william-stocks-headshot.jpg
├── qr-code.png                  # QR code shown on the printed CV
├── william-stocks-cv.pdf        # PDF version of the CV
├── tailwind.config.js
└── package.json
```

## Rebuilding the CSS

The compiled `css/tailwind.css` is committed, so the site works as plain static files. After adding or changing Tailwind classes in `index.html` or `js/`, rebuild it:

```bash
npm install
npm run build:css    # one-off minified build
npm run watch:css    # rebuild on save while editing
```

Then commit the updated `css/tailwind.css`.

## Running locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
