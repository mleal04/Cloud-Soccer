import React, { useState } from "react";
import wcData from "../data/WC_data.json"; // Team performance data
import predictions from "../data/team_predictions.json"; // Predictions data
import wc1 from "../pictures/2018_FIFA_World_Cup.svg.png";
import wc2 from "../pictures/2022_FIFA_World_Cup.svg.webp";
import mbappe from "../pictures/mbappe.avif";
import messi from "../pictures/messi.webp";

const WorldCup = () => {
  const teams = Object.keys(wcData); // Get list of team names
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [currentPage, setCurrentPage] = useState(0); // Track the current page

  const teamsPerPage = 6; // Number of teams to show per page

  // Function to handle team button click
  const handleTeamClick = (teamName) => {
    setSelectedTeam(teamName);
    setShowCard(true); // Show the team card when a button is clicked
  };

  // Function to go back to the team list
  const handleBackClick = () => {
    setShowCard(false);
    setSelectedTeam(null); // Clear the selected team
  };

  // Function to navigate to the next page
  const handleNextPage = () => {
    if ((currentPage + 1) * teamsPerPage < teams.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to navigate to the previous page
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Get the current page's teams
  const currentTeams = teams.slice(
    currentPage * teamsPerPage,
    (currentPage + 1) * teamsPerPage
  );

  return (
    <div className="worldcup-container">
      <h1>World Cup Teams Info / Predictions</h1>

      {/* If showCard is false, display team buttons */}
      {!showCard && (
        <div className="top-five-teams-container2">
          {currentTeams.map((teamName) => (
            <button
              className="team-button2"
              key={teamName}
              onClick={() => handleTeamClick(teamName)}
            >
              {teamName}
            </button>
          ))}
        </div>
      )}

      {/* If showCard is true, display the selected team card */}
      {showCard && selectedTeam && (
        <div className="team-card2">
          <h3>{selectedTeam}</h3>
          <p>
            <strong>Group:</strong> {wcData[selectedTeam].group}
          </p>
          <p>
            <strong>Rank:</strong> {wcData[selectedTeam].rank}
          </p>
          <p>
            <strong>Matches Played:</strong>{" "}
            {wcData[selectedTeam].matches_played}
          </p>
          <p>
            <strong>Wins:</strong> {wcData[selectedTeam].wins}
          </p>
          <p>
            <strong>Draws:</strong> {wcData[selectedTeam].draws}
          </p>
          <p>
            <strong>Losses:</strong> {wcData[selectedTeam].losses}
          </p>
          <p>
            <strong>Goals Scored:</strong> {wcData[selectedTeam].goals_scored}
          </p>
          <p>
            <strong>Goals Against:</strong> {wcData[selectedTeam].goals_against}
          </p>
          <p>
            <strong>Goal Difference:</strong>{" "}
            {wcData[selectedTeam].goal_difference}
          </p>
          <p>
            <strong>Points:</strong> {wcData[selectedTeam].points}
          </p>
          <p>
            <strong>Expected Goals Scored:</strong>{" "}
            {wcData[selectedTeam].expected_goal_scored}
          </p>
          <p>
            <strong>Expected Goals Conceded:</strong>{" "}
            {wcData[selectedTeam].exp_goal_conceded}
          </p>
          <p>
            <strong>Expected Goal Difference:</strong>{" "}
            {wcData[selectedTeam].exp_goal_difference}
          </p>
          <p>
            <strong>Expected Goal Difference Per 90:</strong>{" "}
            {wcData[selectedTeam].exp_goal_difference_per_90}
          </p>

          {/* Display the predicted result */}
          <h4>Prediction: {predictions[selectedTeam]}</h4>

          {/* Back Button to go back to the list */}
          <button className="back-button2" onClick={handleBackClick}>
            Back to Teams List
          </button>
        </div>
      )}

      {/* Pagination controls */}
      {!showCard && (
        <div className="pagination2">
          <button
            className="pagination-button2"
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <button
            className="pagination-button2"
            onClick={handleNextPage}
            disabled={(currentPage + 1) * teamsPerPage >= teams.length}
          >
            Next
          </button>
        </div>
      )}

      {/* Bottom images section */}
      <div className="bottom-images">
        <img src={wc1} alt="2018 FIFA World Cup" className="bottom-image" />
        <img src={wc2} alt="2022 FIFA World Cup" className="bottom-image" />
        <img src={mbappe} alt="Mbappé" className="bottom-image" />
        <img src={messi} alt="Messi" className="bottom-image" />
      </div>
    </div>
  );
};

export default WorldCup;
