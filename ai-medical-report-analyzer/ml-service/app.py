from flask import Flask, request, jsonify
from ocr import extract_text
from analyzer import analyze_report

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    path = data['path']

    text = extract_text(path)

    result = analyze_report(text)

    return jsonify({
        'text': text,
        'summary': result['summary'],
        'abnormalities': result['abnormalities']
    })

if __name__ == '__main__':
    app.run(port=8000)