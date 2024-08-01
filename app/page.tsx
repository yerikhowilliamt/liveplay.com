/* eslint-disable react/no-unescaped-entities */
"use client";

import Navbar from "./components/Navbar";
import HomeHeader from "./components/HomeHeader";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-5 py-5 md:py-10 md:px-20 2xl:px-40">
      <Navbar />
      <HomeHeader />
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-head font-semibold">Recently Added</h3>
        <div className="flex flex-col md:flex-row justify-between w-full h-full gap-6">
          <div className="relative w-80 h-48 border rounded-md md:rounded-lg">
            <Image
              src="/2024 aespa Live Tour - SYNK - PARALLEL LINE in JAKARTA.jpg"
              width={500}
              height={400}
              alt="Background image"
              className="rounded-md md:rounded-lg absolute w-full h-full object-full"
            />
          </div>
          <div className="relative w-80 h-48 border rounded-md md:rounded-lg">
            <Image
              src="/2024 aespa Live Tour - SYNK - PARALLEL LINE in JAKARTA.jpg"
              width={500}
              height={400}
              alt="Background image"
              className="rounded-md md:rounded-lg absolute w-full h-full object-full"
            />
          </div>
          <div className="relative w-80 h-48 border rounded-md md:rounded-lg">
            <Image
              src="/2024 aespa Live Tour - SYNK - PARALLEL LINE in JAKARTA.jpg"
              width={500}
              height={400}
              alt="Background image"
              className="rounded-md md:rounded-lg absolute w-full h-full object-full"
            />
          </div>
          <div className="relative w-80 h-48 border rounded-md md:rounded-lg">
            <Image
              src="/2024 aespa Live Tour - SYNK - PARALLEL LINE in JAKARTA.jpg"
              width={500}
              height={400}
              alt="Background image"
              className="rounded-md md:rounded-lg absolute w-full h-full object-full"
            />
          </div>
          <div className="relative w-80 h-48 border rounded-md md:rounded-lg">
            <Image
              src="/2024 aespa Live Tour - SYNK - PARALLEL LINE in JAKARTA.jpg"
              width={500}
              height={400}
              alt="Background image"
              className="rounded-md md:rounded-lg absolute w-full h-full object-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
