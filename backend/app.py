from flask import Flask, request
from flask_cors import CORS

# open the text file firsttime for lifetime
text_data = open('texts.txt', 'r').read().split("\n\n")

app = Flask(__name__)

# Allow CORS to accept requests from other server
# which is in our case "react app, different port"
CORS(app)

@app.route("/")
def index():
    """API root route"""

    return "<h1>Welcome to backend API</h1>"

@app.route("/api")
def get_text():
    """
    Get dummy text from url query params
    
    params:
        para: integer, default: 4 # number of para to return
        html: integer or boolean, default: false # show html tags or not
    """

    try:
        para = int(request.args.get('para', 4)) # get para from url query parameter, default 4

        if request.args.get('html') == "true":
            html = True
        elif request.args.get('html') == 'false':
            html = False
        else:
            html = bool(int(request.args.get('html', 0))) # convert to boolean
    
    except ValueError:
        data = {
            "status": "Wrong parameters provided"
        }
        return data, 400 # second return is the http status code

    text = ""
    for i in range(para):
        if html:
            text += f"<p>{text_data[i]}</p>\n\n"
        else:
            text += f"{text_data[i]}\n\n"
    
    output = {}

    output['text'] = text

    return output, 200 # second return is the http status code

if __name__ == "__main__":
    app.run(debug=True, host="localhost", port="5000")