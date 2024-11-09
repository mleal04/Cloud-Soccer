import React from "react";
import premierLeagueImg from "../pictures/premier-league-logo.png";
import laLigaImg from "../pictures/laliga-logo.png";
import ChampionsLeagueImg from "../pictures/ucl-logo.png";
import BundesLigaImg from "../pictures/bundesliga-logo.png";
import SerieAImg from "../pictures/serie-a-logo.png";

const leaguesData = [
  {
    name: "Premier League",
    imageUrl: premierLeagueImg,
    url: "https://www.premierleague.com",
  },
  { name: "La Liga", imageUrl: laLigaImg, url: "https://www.laliga.com" },
  {
    name: "Champions League",
    imageUrl: ChampionsLeagueImg,
    url: "https://www.laliga.com",
  },
  {
    name: "Bundes Liga",
    imageUrl: BundesLigaImg,
    url: "https://www.bundesliga.com/en/bundesliga",
  },
  {
    name: "Serie A",
    imageUrl: SerieAImg,
    url: "https://www.legaseriea.it/en",
  },
];

const Leagues = () => {
  return (
    <div className="leagues-container">
      {leaguesData.map((league, index) => (
        <div key={index} className="league-card">
          <img
            src={league.imageUrl}
            alt={league.name}
            className="league-image"
          />
          <p className="league-name">{league.name}</p>
          <a
            href={league.url}
            target="_blank"
            rel="noopener noreferrer"
            className="league-link"
          >
            Visit Website
          </a>
        </div>
      ))}
    </div>
  );
};

export default Leagues;
