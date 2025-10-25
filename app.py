from flask import Flask, render_template

# Serve static files from the project root so existing images/PDFs at repo root
# (e.g. Soham.jpg, hbg.jpg, Soham_Aich_CV.pdf) are available at /static/<filename>
app = Flask(__name__, static_folder='static', template_folder='templates')


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    # For local development only. Use a production server for deploys.
    app.run(debug=True, host='0.0.0.0', port=8001)
