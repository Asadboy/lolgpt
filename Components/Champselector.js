import React, { useState } from "react";

const ChampionSelector = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [champions, setChampions] = useState([
    // Array of all champions
    { id: 1, name: "Ashe" },
    { id: 2, name: "Garen" },
    { id: 3, name: "Lux" },
    { id: 4, name: "Lee Sin" },
  ]);

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter champions based on search term
  const filteredChampions = champions.filter((champion) =>
    champion.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
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
