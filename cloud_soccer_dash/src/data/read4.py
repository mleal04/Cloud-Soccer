import pandas as pd
import json

# Load the CSV data into a DataFrame
df = pd.read_csv('../data/2018WC.csv')

# Prepare the data in the desired format: team_name as key and other stats as value
team_data = {}

for index, row in df.iterrows():
    team_info = {
        "group": row["group"],
        "rank": row["rank"],
        "matches_played": row["matches_played"],
        "wins": row["wins"],
        "draws": row["draws"],
        "losses": row["losses"],
        "goals_scored": row["goals_scored"],
        "goals_against": row["goals_against"],
        "goal_difference": row["goal_difference"],
        "points": row["points"],
        "expected_goal_scored": row["expected_goal_scored"],
        "exp_goal_conceded": row["exp_goal_conceded"],
        "exp_goal_difference": row["exp_goal_difference"],
        "exp_goal_difference_per_90": row["exp_goal_difference_per_90"]
    }
    
    # Using the team name as the key
    team_data[row["team"]] = team_info

# Write the dictionary to a JSON file
with open('WC_data.json', 'w') as json_file:
    json.dump(team_data, json_file, indent=4)

print("JSON file has been successfully created!")
