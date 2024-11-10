import pandas as pd
import json

# Specify the path to your file
file_path = './stats.csv'  # Replace with the actual file path

# Try reading the CSV with UTF-8 encoding
df = pd.read_csv(file_path, sep=';', encoding='utf-8', engine='python')

# Check the columns and first few rows
leagues = df['Comp'].unique().tolist()
print(leagues)

league_data = {}
for league in leagues:
    players = df[df['Comp'] == league].to_dict(orient='records')
    league_data[league] = players

# Save the structured data to JSON with UTF-8 encoding
output_path = 'leagues_players.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(league_data, f, ensure_ascii=False, indent=4)

print(f"Data saved to {output_path}")