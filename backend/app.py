from flask import Flask, request
from flask_cors import CORS

text_data = open('texts.txt', 'r').read().split("\n\n")

app = Flask(__name__)

CORS(app)

@app.route("/")
def index():
    return "<h1>Welcome to backend API</h1>"

@app.route("/api")
def get_text():
    try:
        para = int(request.args.get('para', 4))

        if request.args.get('html') == "true":
            html = True
        elif request.args.get('html') == 'false':
            html = False
        else:
            html = bool(int(request.args.get('html', 1))) # convert to boolean
    
    except ValueError:
        data = {
            "status": "Wrong parameters provided"
        }
        return data, 400

    text = ""
    for i in range(para):
        if html:
            text += f"<p>{text_data[i]}</p>\n\n"
        else:
            text += f"{text_data[i]}\n\n"
    
    output = {}

    output['text'] = text

    return output, 200

if __name__ == "__main__":
    app.run(debug=True)