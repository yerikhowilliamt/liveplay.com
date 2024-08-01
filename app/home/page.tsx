/* eslint-disable react/no-unescaped-entities */
"use client";

import Navbar from "../components/Navbar";
import HomeHeader from "../components/HomeHeader";
import Image from "next/image";
import { recentlyAdded } from "@/data/recently-added";
import EventCard from "../components/EventCard";

export default function Home() {
  return (
    <div className="px-5 py-5 md:py-10 md:px-20 2xl:px-40">
      <Navbar />
      <HomeHeader />
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-head font-semibold">Recently Added</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {recentlyAdded.map((item) => (
            <div key={item.id} className="relative h-48 rounded-md">
              <Image
                src={item.src}
                width={item.width}
                height={item.width}
                alt={item.alt}
                className="rounded-md absolute w-full h-full object-full"
              />
              <div className="relative w-full h-60 transform transition-all ease-in-out duration-500 hover:scale-125 opacity-0 hover:opacity-100 z-10">
                <Image
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  className="absolute w-full h-full rounded-lg object-fill -z-10  brightness-50"
                />
                <EventCard title={item.title} location={item.location}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
