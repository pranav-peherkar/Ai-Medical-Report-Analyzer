import re

def analyze_report(text):
    abnormalities = []

    glucose_match = re.search(r'Glucose\s*:?\s*(\d+)', text)

    if glucose_match:
        glucose = int(glucose_match.group(1))

        if glucose > 140:
            abnormalities.append('High Glucose')

    summary = 'Patient report analyzed successfully.'

    if abnormalities:
        summary = 'Patient may have abnormal health parameters.'

    return {
        'summary': summary,
        'abnormalities': abnormalities,
    }