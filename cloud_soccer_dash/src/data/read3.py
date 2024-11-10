import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
import json

# Load the dataset (replace the file path with your actual CSV file path)
df = pd.read_csv('../data/2018WC.csv')

# Create a binary target variable for predicting "Win" (1) or "Loss" (0)
df['match_result'] = np.where(df['wins'] > df['losses'], 1, 0)

# Select features for prediction (e.g., wins, goals_scored, goals_against)
X = df[['wins', 'goals_scored', 'goals_against', 'matches_played']]

# Target variable: 'match_result' (binary classification)
y = df['match_result']

# Split the data into train and test sets (80% training, 20% testing)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the Logistic Regression model
model = LogisticRegression()

# Fit the model on the training data
model.fit(X_train, y_train)

# Predict on the test set
y_pred = model.predict(X_test)

# Now we need to see the predicted performance for all teams
# Use the model to predict the performance of the entire dataset
df['predicted_result'] = model.predict(X)

# Now, display the predicted performance for each team
# Group by team and show their predicted performance
team_predictions = df[['team', 'predicted_result']].groupby('team').agg({'predicted_result': 'mean'}).reset_index()

# Convert predicted result from 0/1 to 'Loss'/'Win'
team_predictions['predicted_result'] = team_predictions['predicted_result'].apply(lambda x: 'Win' if x >= 0.5 else 'Loss')

# Convert to dictionary format for JSON
team_predictions_dict = team_predictions.set_index('team').to_dict()['predicted_result']

# Convert the dictionary to a JSON string
team_predictions_json = json.dumps(team_predictions_dict, indent=4)

# Write the JSON to a file
with open('team_predictions.json', 'w') as f:
    f.write(team_predictions_json)

# Optional: Print the JSON output (to confirm it worked)
print("Predictions have been written to 'team_predictions.json'.")


