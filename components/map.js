import React from "react";
import Image from "next/image";
import mapImage from "@/public/LolChampIcon/Summonermap.png";

const MapComponent = () => {
  return (
    <div className="flex justify-center items-center">
      <Image src={mapImage} alt="Map" />
    </div>
  );
};

export default MapComponent;
