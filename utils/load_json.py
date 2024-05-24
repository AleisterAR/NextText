import json
from pathlib import Path

json_file_path = Path(__file__).resolve().parent.parent / 'static/mix-manifest.json'

with open(json_file_path, 'r') as file:
    json_data = json.load(file)