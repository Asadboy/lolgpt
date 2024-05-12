import React, { useState, useEffect } from "react";
import championsJSON from "./champions.json";
import Champpopbutton from "./championpopup.js";

const ChampionSelector = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [champions, setChampions] = useState([]);
  const [selectedChampion, setSelectedChampion] = useState(null);

  useEffect(() => {
    setChampions(championsJSON);
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter champions based on search term
  const filteredChampions = champions.filter((champion) =>
    champion.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleButtonClick = (championName) => {
    console.log("Clicked Champion:", championName);
    setSelectedChampion(championName);
    // Handle the button click event
  };

  const handleClose = () => {
    setSelectedChampion(null);
  };

  return (
    <div>
      <div className="sticky top-0 mt-2">
        <input
          type="text"
          placeholder="Search champions"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="mt-2">
        {filteredChampions.map((champion) => (
          <button
            key={champion.id}
            onClick={() => handleButtonClick(champion.name)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 mb-4 rounded "
          >
            {champion.name}
          </button>
        ))}
      </div>

      <Champpopbutton
        champion={selectedChampion}
        showModal={selectedChampion}
        closeModal={handleClose}
      />
    </div>
  );
};

export default ChampionSelector;
