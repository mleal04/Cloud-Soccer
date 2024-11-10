import csv
import json

# File path for the CSV
csv_file = "./team_stats.csv"  # Replace with your actual file path

teams_dict = {}

# Open the CSV file with 'ISO-8859-1' encoding
with open(csv_file, mode='r', encoding='ISO-8859-1') as file:
    reader = csv.reader(file, delimiter=';')
    
    # Skip the header if there's one
    next(reader)

    # Process each row in the CSV
    for row in reader:
        team_name = row[1]  # Use the team name as the key
        team_info = {
            "Rank": int(row[0]),
            "Country": row[2],
            "League Rank": int(row[3]),
            "Matches Played": int(row[4]),
            "Wins": int(row[5]),
            "Draws": int(row[6]),
            "Losses": int(row[7]),
            "Goals For": int(row[8]),
            "Goals Against": int(row[9]),
            "Goal Difference": int(row[10]),
            "Points": int(row[11]),
            "Points per Game": float(row[12]),
            "Expected Goals": float(row[13]),
            "Expected Goals Allowed": float(row[14]),
            "Expected Goal Difference": float(row[15]),
            "Expected Goal Difference per 90": float(row[16]),
            "Attendance": int(row[17]),
            "Top Team Scorer": row[18],
            "Goalkeeper": row[19]
        }
        teams_dict[team_name] = team_info  # Add to the dictionary with team name as the key

# Convert the dictionary of teams to JSON
teams_json = json.dumps(teams_dict, indent=4)

# Output the JSON to a file
with open("teams_data.json", "w") as json_file:
    json_file.write(teams_json)

# Optionally, print the JSON to console for verification
print(teams_json)
