/* eslint-disable react/no-unescaped-entities */
"use client";

import Navbar from "./components/Navbar";
import HomeHeader from "./components/HomeHeader";
import Image from "next/image";
import { recentlyAdded } from "@/data/recently-added";
import EventCard from "./components/EventCard";
import WorkSlider from "./components/WorkSlider";
import MusicSlider from "./components/MusicSlider";
import SportsSlider from "./components/SportsSlider";

export default function Home() {
  return (
    <div className="px-5 py-5 md:py-10 md:px-20 2xl:px-40">
      <Navbar />
      <HomeHeader />
      <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-head font-semibold">Recently Added</h3>
        <div className="h-48">
          <WorkSlider/>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-head font-semibold">Music</h3>
        <div className="h-48">
        <MusicSlider/>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-head font-semibold">Sports</h3>
        <div className="h-48">
          <SportsSlider/>
        </div>
      </div>
      </div>
    </div>
  );
}
