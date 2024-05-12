import React, { useState } from "react";

const ChampionSelector = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [champions, setChampions] = useState([
    // Array of all champions
    { id: 1, name: "Aatrox", role: "Fighter" },
    { id: 2, name: "Ahri", role: "Mage" },
    { id: 3, name: "Akali", role: "Assassin" },
    { id: 4, name: "Alistar", role: "Tank" },
    { id: 5, name: "Amumu", role: "Tank" },
    { id: 6, name: "Anivia", role: "Mage" },
    { id: 7, name: "Annie", role: "Mage" },
    { id: 8, name: "Aphelios", role: "Marksman" },
    { id: 9, name: "Ashe", role: "Marksman" },
    { id: 10, name: "Aurelion Sol", role: "Mage" },
    { id: 11, name: "Azir", role: "Mage" },
    { id: 12, name: "Bard", role: "Support" },
    { id: 13, name: "Blitzcrank", role: "Tank" },
    { id: 14, name: "Brand", role: "Mage" },
    { id: 15, name: "Braum", role: "Tank" },
    { id: 16, name: "Caitlyn", role: "Marksman" },
    { id: 17, name: "Camille", role: "Fighter" },
    { id: 18, name: "Cassiopeia", role: "Mage" },
    { id: 19, name: "Cho'Gath", role: "Tank" },
    { id: 20, name: "Corki", role: "Marksman" },
    { id: 21, name: "Darius", role: "Fighter" },
    { id: 22, name: "Diana", role: "Fighter" },
    { id: 23, name: "Dr. Mundo", role: "Tank" },
    { id: 24, name: "Draven", role: "Marksman" },
    { id: 25, name: "Ekko", role: "Assassin" },
    { id: 26, name: "Elise", role: "Mage" },
    { id: 27, name: "Evelynn", role: "Assassin" },
    { id: 28, name: "Ezreal", role: "Marksman" },
    { id: 29, name: "Fiddlesticks", role: "Mage" },
    { id: 30, name: "Fiora", role: "Fighter" },
    { id: 31, name: "Fizz", role: "Assassin" },
    { id: 32, name: "Galio", role: "Tank" },
    { id: 33, name: "Gangplank", role: "Fighter" },
    { id: 34, name: "Garen", role: "Fighter" },
    { id: 35, name: "Gnar", role: "Fighter" },
    { id: 36, name: "Gragas", role: "Tank" },
    { id: 37, name: "Graves", role: "Marksman" },
    { id: 38, name: "Hecarim", role: "Fighter" },
    { id: 39, name: "Heimerdinger", role: "Mage" },
    { id: 40, name: "Illaoi", role: "Fighter" },
    { id: 41, name: "Irelia", role: "Fighter" },
    { id: 42, name: "Ivern", role: "Support" },
    { id: 43, name: "Janna", role: "Support" },
    { id: 44, name: "Jarvan IV", role: "Tank" },
    { id: 45, name: "Jax", role: "Fighter" },
    { id: 46, name: "Jayce", role: "Fighter" },
    { id: 47, name: "Jhin", role: "Marksman" },
    { id: 48, name: "Jinx", role: "Marksman" },
  ]);

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
