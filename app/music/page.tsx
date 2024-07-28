"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { musicLists } from "../page";
import Card from "../components/Card";

const MusicListPage = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="md:px-20 px-12 w-full">
      <Navbar />
      <div className="flex md:flex-row flex-wrap flex-col md:gap-20 gap-6 h-full">
        {musicLists.map((item) => (
          <Card key={item.id} src={item.src} alt={item.alt} title={item.title} location={item.location} onClick={handleClick} className={click
            ? "ml-auto cursor-pointer text-red-600 w-5 h-5"
            : "ml-auto cursor-pointer w-5 h-5"} />
        ))}
      </div>
    </div>
  );
};

export default MusicListPage;
