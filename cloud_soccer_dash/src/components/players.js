import React, { useState } from "react";
import playersData from "../data/leagues_players.json"; // Assuming the JSON is correctly structured

const Players = () => {
  const [selectedLeague, setSelectedLeague] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // Handle league selection
  const handleLeagueSelect = (league) => {
    setSelectedLeague(league);
    setSelectedPlayer(null); // Reset the selected player when a new league is chosen
  };

  // Handle player card view
  const handlePlayerClick = (player) => {
    setSelectedPlayer(player); // Show selected player card
  };

  // Handle going back to the player list
  const handleBackToList = () => {
    setSelectedPlayer(null);
  };

  const handleBackToLeagues = () => {
    setSelectedLeague(null); // Reset to show the league selection
  };

  return (
    <div className="players-container">
      {/* League Selection Buttons */}
      {!selectedPlayer && !selectedLeague && (
        <div className="league-buttons">
          {Object.keys(playersData).map((league) => (
            <button
              key={league}
              onClick={() => handleLeagueSelect(league)}
              className={selectedLeague === league ? "active-league" : ""}
            >
              {league}
            </button>
          ))}
        </div>
      )}

      {/* Show "Back to Leagues" button when viewing player list */}
      {selectedLeague && !selectedPlayer && (
        <div className="back-to-leagues">
          <button onClick={handleBackToLeagues}>Back to Leagues</button>
        </div>
      )}

      {/* Player List for Selected League */}
      {selectedLeague && !selectedPlayer && (
        <div className="players-list">
          {playersData[selectedLeague].map((player) => (
            <div
              key={player.Rk}
              className="player-item"
              onClick={() => handlePlayerClick(player)}
            >
              <p>{player.Player}</p>
            </div>
          ))}
        </div>
      )}

      {/* Display Player Details */}
      {selectedPlayer && (
        <div className="player-card">
          <img src={selectedPlayer.imageUrl} alt={selectedPlayer.Player} />
          <h3>{selectedPlayer.Player}</h3>
          <p>Position: {selectedPlayer.Pos}</p>
          <p>Nation: {selectedPlayer.Nation}</p>
          <p>Squad: {selectedPlayer.Squad}</p>
          <button onClick={handleBackToList}>Back to All Players</button>
        </div>
      )}
    </div>
  );
};

export default Players;
