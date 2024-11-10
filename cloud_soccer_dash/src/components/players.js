import React, { useState } from "react";
import playersData from "../data/leagues_players.json";
import premierLeagueImg from "../pictures/premier-league-logo.png";
import laLigaImg from "../pictures/laliga-logo.png";
import championsLeagueImg from "../pictures/ucl-logo.png";
import bundesLigaImg from "../pictures/bundesliga-logo.png";
import serieAImg from "../pictures/serie-a-logo.png";
import ligue1 from "../pictures/French-Ligue-1-Logo-2020-1.png";

import premierLeagueBracket from "../pictures/premier_league_bracket.jpg";
import ligue1Bracket from "../pictures/ligue1_bracket.webp";
import BundesligaBracket from "../pictures/bundes_liga_bracket.jpg";
import SerieABracket from "../pictures/serie_a_bracket.avif";
import laligaBracket from "../pictures/la_liga_bracket.png";

const Players = () => {
  const [selectedLeague, setSelectedLeague] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 5;

  const leagueLogos = {
    "Premier League": premierLeagueImg,
    "La Liga": laLigaImg,
    "Champions League": championsLeagueImg,
    Bundesliga: bundesLigaImg,
    "Serie A": serieAImg,
    "Ligue 1": ligue1,
  };

  const leagueBrackets = {
    "Premier League": [
      premierLeagueBracket,
      "https://www.premierleague.com/tables",
    ],
    "La Liga": [
      laligaBracket,
      "https://www.espn.com/soccer/standings/_/league/esp.1",
    ],
    Bundesliga: [
      BundesligaBracket,
      "https://www.bundesliga.com/en/bundesliga/table",
    ],
    "Serie A": [
      SerieABracket,
      "https://www.espn.com/soccer/standings/_/league/ita.1",
    ],
    "Ligue 1": [
      ligue1Bracket,
      "https://www.transfermarkt.com/ligue-1/startseite/wettbewerb/FR1",
    ],
  };

  const handleLeagueSelect = (league) => {
    setSelectedLeague(league);
    setSelectedPlayer(null);
    setCurrentPage(1);
  };

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  const handleBackToList = () => {
    setSelectedPlayer(null);
  };

  const handleBackToLeagues = () => {
    setSelectedLeague(null);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const currentPlayers = selectedLeague
    ? playersData[selectedLeague].slice(
        (currentPage - 1) * playersPerPage,
        currentPage * playersPerPage
      )
    : [];

  const totalPages = selectedLeague
    ? Math.ceil(playersData[selectedLeague].length / playersPerPage)
    : 0;

  return (
    <div className="players-container">
      {/* League selection */}
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

      {/* Bracket images and links for all leagues */}
      {!selectedPlayer && !selectedLeague && (
        <div className="intro_text">
          Check out all Club Members and Current Brackets
        </div>
      )}

      {/* Bracket images and links for all leagues */}
      {!selectedPlayer && !selectedLeague && (
        <div className="league-brackets">
          {Object.keys(leagueBrackets).map((league) => (
            <div key={league} className="league-bracket">
              <img
                src={leagueBrackets[league][0]}
                alt={`${league} Bracket`}
                className="bracket-image"
              />
              <a
                href={leagueBrackets[league][1]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bracket-link-button">
                  View Full Bracket
                </button>
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Back button to go to leagues */}
      {selectedLeague && !selectedPlayer && (
        <div className="back-to-leagues">
          <button onClick={handleBackToLeagues}>Back to Leagues</button>
        </div>
      )}

      {/* Display players with pagination */}
      {selectedLeague && !selectedPlayer && (
        <>
          <div className="players-list">
            {currentPlayers.map((player) => (
              <div
                key={player.Rk}
                className="player-item"
                onClick={() => handlePlayerClick(player)}
              >
                <p>{player.Player}</p>
              </div>
            ))}
          </div>

          <div className="pagination-buttons">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Player card view with league logo */}
      {selectedPlayer && (
        <div className="player-card">
          <img
            src={leagueLogos[selectedLeague]}
            alt={`${selectedLeague} logo`}
            className="league-logo"
          />
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
