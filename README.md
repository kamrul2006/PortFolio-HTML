# Kamrul Islam Apurba | Portfolio

A modern, responsive personal portfolio website with a dark theme and neon green accents. It's a single HTML file with no build step, so it's quick to edit and easy to host anywhere.

## Features

- Dark neon-green design with a glowing, rotating ring in the hero section
- Animated text that cycles through what I build
- Sections: Hero, About, Skills, Projects, Education, Contact
- Project cards with tech tags and hover effects
- Education timeline
- Contact details and a message form that opens the visitor's email app
- Fully responsive on phones, tablets and desktops
- Keyboard-friendly focus styles and `prefers-reduced-motion` support
- Smooth scrolling and a sticky navigation bar


## Built with

- HTML5
- CSS3 (custom properties, Grid, Flexbox, animations)
- Vanilla JavaScript
- Google Fonts: Syne and Manrope

## Project structure

```
.
├── index.html   # the whole portfolio (HTML, CSS and JS in one file)
└── README.md
```

> Rename `apurba-portfolio-v2.html` to `index.html` before uploading so hosting services open it automatically.

## Run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   ```
2. Open the folder and double-click `index.html`, or serve it with any static server:
   ```bash
   npx serve .
   ```

## Deploy

**GitHub Pages**
1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, choose the `main` branch and the `/ (root)` folder, then save.
4. Your site will be live at `https://<your-username>.github.io/<your-repo>/`.

**Vercel or Netlify**
1. Import the GitHub repository.
2. Leave the build command empty and set the output directory to the project root.
3. Deploy.

## Customize

Everything lives in `index.html`:

- **Colors:** change the variables at the top of the `<style>` block (`--bg`, `--neon`, `--teal`, and so on).
- **Text and links:** edit the content inside each `<section>`.
- **Projects:** copy an `<article class="card">` block and update the title, description and tags.
- **Project screenshots:** replace the `<div class="shot ...">` mock panel with an `<img>` tag.
- **Profile photo:** replace the `KA` text inside `<div class="orb">` with an `<img>`.
- **Contact details:** search for the email and phone numbers and update them, including the form's `mailto:` address in the script at the bottom.

## Contact

- Email: kamrulislamapurba@gmail.com
- Location: Kishoreganj, Bangladesh

## License

This project is open source under the [MIT License](LICENSE). Feel free to use it as inspiration, but please give credit and use your own content and photos.
