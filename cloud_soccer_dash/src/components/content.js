// export default Content;
import React, { useState } from "react";
import "../App.css";
import Leagues from "./leagues";
import Standings from "./standings";
import Players from "./players";
import WorldCup from "./world_cup";

const Content = () => {
  const [activeTab, setActiveTab] = useState("leagues");

  return (
    <div className="content-container">
      <div className="tabs">
        <div className="tab-leagues" onClick={() => setActiveTab("leagues")}>
          <h2 style={{ color: activeTab === "leagues" ? "#a4e6f2" : null }}>
            Leagues 🥅
          </h2>
        </div>
        <div
          className="tab-standings"
          onClick={() => setActiveTab("standings")}
        >
          <h2 style={{ color: activeTab === "standings" ? "#a4e6f2" : null }}>
            Standings 🧮
          </h2>
        </div>
        <div className="tab-players" onClick={() => setActiveTab("players")}>
          <h2 style={{ color: activeTab === "players" ? "#a4e6f2" : null }}>
            Players 🃏
          </h2>
        </div>
        <div
          className="tab-world_cup"
          onClick={() => setActiveTab("world_cup")}
        >
          <h2 style={{ color: activeTab === "world_cup" ? "#a4e6f2" : null }}>
            World Cup 2026 🏟️
          </h2>
        </div>
      </div>

      {/* Render content based on the active tab */}
      {activeTab === "leagues" && <Leagues />}
      {activeTab === "standings" && <Standings />}
      {activeTab === "players" && <Players />}
      {activeTab === "world_cup" && <WorldCup />}
    </div>
  );
};

export default Content;
