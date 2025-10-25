# CodeAlpha Portfolio — Flask wrapper

This repository contains a simple static portfolio converted to a minimal Flask app so it can be run and deployed more portably.

What I added
- `app.py` — minimal Flask app serving the portfolio
- `templates/index.html` — the original `index.html` moved into Flask templates and updated to use `url_for('\u0027static\u0027, ...)` for assets
- `static/style.css` and `static/script.js` — copied from the original files
- `requirements.txt` — lists Flask as a dependency

Quickstart (macOS / zsh)

1. Create a virtual environment and install dependencies:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

2. Move any images, PDFs and other asset files into the `static/` folder (see note).

3. Run the app:

```bash
python app.py
```

Open http://127.0.0.1:5000 in your browser.

Notes
- The HTML references image files (e.g. `Soham.jpg`, `Soham_Aich_CV.pdf`, `hbg.jpg`, etc.). Please move those files into the `static/` folder so they are served by Flask.
- For production deployment, use a production WSGI server (Gunicorn, uWSGI) and dont run Flasks debug server.
# SohamAich_Portfolio

