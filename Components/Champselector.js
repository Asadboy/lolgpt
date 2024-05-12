import React, { useState, useEffect } from "react";
import championsJSON from "./champions.json";

const ChampionSelector = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    setChampions(championsJSON);
  }, []);

  const fetchChampions = async () => {
    try {
      const response = await fetch("champions.json");
      const data = await response.json();
      setChampions(data);
    } catch (error) {
      console.log("Error fetching champions:", error);
    }
  };

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter champions based on search term
  const filteredChampions = champions.filter((champion) =>
    champion.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const SearchBar = ({ searchTerm, onSearch }) => {
    return (
      <div>
        <input
          type="text"
          placeholder="Search champions"
          value={searchTerm}
          onChange={onSearch}
        />
      </div>
    );
  };

  const ChampionDisplay = ({ champions }) => {
    return (
      <div>
        {champions.map((champion) => (
          <div key={champion.id}>{champion.name}</div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="sticky top-0 ">
        <input
          type="text"
          placeholder="Search champions"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div>
        {filteredChampions.map((champion) => (
          <div key={champion.id}>{champion.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ChampionSelector;
