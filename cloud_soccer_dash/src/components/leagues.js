import React from "react";
import premierLeagueImg from "../pictures/premier-league-logo.png";
import laLigaImg from "../pictures/laliga-logo.png";
import ChampionsLeagueImg from "../pictures/ucl-logo.png";
import BundesLigaImg from "../pictures/bundesliga-logo.png";
import SerieAImg from "../pictures/serie-a-logo.png";
import ligue1 from "../pictures/French-Ligue-1-Logo-2020-1.png";

import classicoNews from "../pictures/classico_picture.png";
import championsLeagueNews from "../pictures/champions_league_news.webp";
import premier_league_news from "../pictures/premier_league_news.webp";

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
  {
    name: "Ligue 1",
    imageUrl: ligue1,
    url: "https://ligue1.com/",
  },
];

const leaguesNews = [
  {
    title: "El Classico",
    image: classicoNews,
    url: "https://economictimes.indiatimes.com/definition/el-classico",
    text: "El Classico is a fierce rivalry between two of the world's most iconic clubs, FC Barcelona and Real Madrid. Learning about El Clásico is diving into a world where passion, pride, and intense competition collide, shaping football legends and unforgettable moments!",
  },
  {
    title: "Rising Stars",
    image: championsLeagueNews,
    url: "https://www.uefa.com/uefachampionsleague/news/0293-1c489df86934-1f503013f48d-1000--priceless-moments-of-the-week-gyokeres-luis-diaz-and-van/",
    text: "This week’s priceless moments featured standout performances from Gyökeres, Luis Díaz, and Vanaken. Gyökeres dazzled with a brilliant goal, while Luis Díaz's skill and determination led to a stunning assist. Vanaken impressed with a flawless display of technique and vision.",
  },
  {
    title: "Liverpools rise",
    image: premier_league_news,
    url: "https://www.foxsports.com/stories/soccer/liverpool-goes-top-premier-league-man-citys-32-game-unbeaten-streak-ends-bournemouth",
    text: "Liverpool surged to the top of the Premier League after Manchester City's 32-game unbeaten streak was shattered by Bournemouth. This stunning result marked a pivotal moment in the title race, as Liverpool capitalized on City's first loss in over a year.",
  },
];

const Leagues = () => {
  return (
    <div>
      {/* Leagues Cards */}
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

      {/* News Cards */}
      <div className="leagues-news">
        {leaguesNews.map((news, index) => (
          <div key={index} className="news-card">
            <h2>{news.title}</h2>
            <img src={news.image} alt="News" className="news-image" />
            <p>{news.text}</p>
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="news-link"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leagues;
