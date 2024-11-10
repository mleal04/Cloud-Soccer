import React, { useState } from "react";
import teamData from "../data/teams_data.json";
import manchester from "../pictures/manchester_city.png";
import liverpool from "../pictures/liverpool.jpg";
import bayern from "../pictures/bayern_logo.png";
import psg from "../pictures/PSG-Logo.png";
import realmadrid from "../pictures/Real-Madrid-logo.png";

const leagueLogos = {
  "Manchester City": manchester,
  Liverpool: liverpool,
  "Bayern Munich": bayern,
  "Paris S-G": psg,
  "Real Madrid": realmadrid,
};

const Standings = () => {
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const teamsPerPage = 3;

  // Calculate total pages based on total teams
  const totalTeams = Object.entries(teamData).length;
  const totalPages = Math.ceil(totalTeams / teamsPerPage);

  // Get the current set of teams based on currentPage
  const currentTeams = Object.entries(teamData).slice(
    (currentPage - 1) * teamsPerPage,
    currentPage * teamsPerPage
  );

  // Handle pagination click (next/prev)
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="standings-container">
      {/* Top Five Teams Container */}
      <div className="top-five-teams-container">
        {Object.entries(teamData)
          .slice(0, 5) // Top 5 teams
          .map(([teamName, teamInfo]) => (
            <div key={teamName} className="team-card">
              {/* Team logo */}
              <img
                src={leagueLogos[teamName]}
                alt={`${teamName} logo`}
                className="team-logo"
              />
              <h3>{teamName}</h3>
              <p>Rank: {teamInfo.Rank}</p>
              <p>Country: {teamInfo.Country}</p>
              <p>League Rank: {teamInfo["League Rank"]}</p>
              <p>Matches Played: {teamInfo["Matches Played"]}</p>
              <p>Wins: {teamInfo.Wins}</p>
              <p>Draws: {teamInfo.Draws}</p>
              <p>Losses: {teamInfo.Losses}</p>
            </div>
          ))}
      </div>

      {/* Placeholder for all team stats (right div) */}
      <div className="all-team-stats">
        <div className="team-cards-container">
          {currentTeams.map(([teamName, teamInfo]) => (
            <div key={teamName} className="team-card">
              {/* Team logo */}
              <h3>{teamName}</h3>
              <p>Rank: {teamInfo.Rank}</p>
              <p>Country: {teamInfo.Country}</p>
              <p>League Rank: {teamInfo["League Rank"]}</p>
              <p>Matches Played: {teamInfo["Matches Played"]}</p>
              <p>Wins: {teamInfo.Wins}</p>
              <p>Draws: {teamInfo.Draws}</p>
              <p>Losses: {teamInfo.Losses}</p>
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="pagination-buttons">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
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
      </div>
    </div>
  );
};

export default Standings;
