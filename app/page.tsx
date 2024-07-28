"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { InfoIcon, MapPin, ShoppingCartIcon } from "lucide-react";

type ListProps = {
  id: string;
  title: string;
  location: string;
  src: string;
  alt: string;
};

export const musicLists: ListProps[] = [
  {
    id: "1",
    title: "Djakarta Warehouse Project",
    location: "Jakarta, Indonesia",
    src: "/djakarta warehouse project.jpeg",
    alt: "djakarta warehouse project",
  },
  {
    id: "2",
    title: "Nextfest Indonesia",
    location: "Jakarta, Indonesia",
    src: "/nextfest id.jpg",
    alt: "Nextfest indonesia",
  },
  {
    id: "3",
    title: "Rock am Ring",
    location: "Nürburgring, Germany",
    src: "/rock am ring.jpg",
    alt: "Rock am Ring",
  },
  {
    id: "4",
    title: "Syncronize festival",
    location: "Jakarta, Indonesia",
    src: "/syncronize fest.jpg",
    alt: "Syncronize festival",
  },
  {
    id: "5",
    title: "Hammersonic festival",
    location: "Jakarta, Indonesia",
    src: "/Hammersonic.jpeg",
    alt: "Hammersonic festival",
  },
  {
    id: "6",
    title: "2024 aespa Live Tour: SYNK: PARALLEL LINE in JAKARTA",
    location: "Jakarta, Indonesia",
    src: "/2024 aespa Live Tour - SYNK - PARALLEL LINE in JAKARTA.jpg",
    alt: "2024 aespa Live Tour - SYNK: PARALLEL LINE in JAKARTA",
  },
  {
    id: "7",
    title: "Sounds of Downtown Vol.6",
    location: "Surabaya, Indonesia",
    src: "/Sounds of Downtown Vol.6.png",
    alt: "Sounds of Downtown Vol.6",
  },
  {
    id: "8",
    title: "IVE THE 1ST WORLD TOUR <SHOW WHAT i HAVE> IN JAKARTA",
    location: "Jakarta, Indonesia",
    src: "/IVE THE 1ST WORLD TOUR - SHOW WHAT i HAVE IN JAKARTA.png",
    alt: "IVE THE 1ST WORLD TOUR <SHOW WHAT i HAVE> IN JAKARTA",
  },
];

export const sportLists: ListProps[] = [
  {
    id: "1",
    title: "Counter Strike Major 2024",
    location: "Shanghai, China",
    src: "/Cs Major.jpg",
    alt: "Counter Strike Major",
  },
  {
    id: "2",
    title: "Euro 2024",
    location: "Germany",
    src: "/Euro 2024.jpg",
    alt: "Euro 2024",
  },
  {
    id: "3",
    title: "Formula One",
    location: "Singapore",
    src: "/F1.jpg",
    alt: "Formula One",
  },
  {
    id: "4",
    title: "WWE Survivor Series",
    location: "Los Angeles, USA",
    src: "/Wwe.jpg",
    alt: "WWE",
  },
  {
    id: "5",
    title: "Dota 2 The Internatioanl",
    location: " Copenhagen, Denmark",
    src: "/TI.jpeg",
    alt: "Dota 2 The International",
  },
];

export const recentlyAddedLists: ListProps[] = [
  {
    id: "1",
    title: "Counter Strike Major 2024",
    location: "Shanghai, China",
    src: "/Cs Major.jpg",
    alt: "Counter Strike Major",
  },
  {
    id: "2",
    title: "Nextfest Indonesia",
    location: "Jakarta, Indonesia",
    src: "/nextfest id.jpg",
    alt: "Nextfest indonesia",
  },
  {
    id: "3",
    title: "Formula One",
    location: "Singapore",
    src: "/F1.jpg",
    alt: "Formula One",
  },
  {
    id: "4",
    title: "Syncronize Festival",
    location: "Jakarta, Indonesia",
    src: "/syncronize fest.jpg",
    alt: "Syncronize festival",
  },
  {
    id: "5",
    title: "Euro 2024",
    location: "Germany",
    src: "/Euro 2024.jpg",
    alt: "Euro 2024",
  },
];

export default function Home() {
  const [click, setClick] = useState(false);
  const data = musicLists;
  const limitedData = data.slice(0, 5);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="lg:px-20 px-6">
      <Navbar />
      <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
        <Image
          src="/UMF 2019.jpg"
          alt="Ultra Music Festival 2019"
          width={1440}
          height={500}
          priority
          className="flex w-full absolute top-0 left-0 h-[60vh] lg:object-fill object-cover -z-10 brightness-[50%]"
        />
        <div className="absolute lg:w-[40%] w-[85%] lg:ml-7 mx-auto md:space-y-8 space-y-4">
          <h3 className="md:text-3xl text-2xl font-head font-bold">
            Ultra Music Festival
          </h3>
          <p className="line-clamp-3 w-full">
            Ultra Music Festival is an annual outdoor electronic music festival
            that takes place in March in Miami, Florida. The festival was
            founded in 1999 by Russell Faibisch and Alex Omes. The world's
            premier electronic music festival, boasting elite DJs and
            unparalleled production located in the beautiful city of Miami.
          </p>
          <div className="flex md:flex-row flex-col gap-4 justify-start w-full">
            <Button className="flex justify-center items-center gap-2 text-sm md:text-base">
              <ShoppingCartIcon />
              Buy ticket
            </Button>
            <Button className="flex justify-center items-center gap-2 text-sm md:text-base bg-white/40 hover:bg-white/30 text-white">
              <InfoIcon />
              Details
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full 2xl:px-8 md:px-2 flex flex-col md:gap-20 gap-10">
        <div className="w-full flex flex-col gap-6">
          <div className="flex justify-between items-end">
            <h3 className="md:text-3xl text-xl font-head font-bold">
              Recently added
            </h3>
            <Link
              href="/recently-added"
              className="text-sm font-body hover:underline md:block hidden"
            >
              See more...
            </Link>
          </div>
          <div className="flex md:flex-row flex-col 2xl:gap-20 md:gap-14 gap-6 h-full">
            {recentlyAddedLists.map((item) => (
              <div
                key={item.id}
                className="relative w-full 2xl:h-44 md:h-36 h-44"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="absolute w-full h-full rounded-sm object-fill"
                />
                <div className="2xl:h-52 md:h-40 h-52 relative z-10 w-full rounded-lg transform transition-all ease-in-out duration-500 hover:scale-110 opacity-0 hover:opacity-100">
                  <div className="bg-gradient-to-b from-black/50 to-black z-10 w-full h-full rounded-lg flex flex-col justify-between">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="absolute w-full h-full -z-10 rounded-lg object-fill"
                    />
                    <div className="m-2">
                      <FaHeart
                        onClick={handleClick}
                        className={
                          click
                            ? "ml-auto cursor-pointer text-red-600 2xl:w-5 md:w-3 2xl:h-5 md:h-3"
                            : "ml-auto cursor-pointer w-5 h-5"
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-4 justify-center items-center">
                      <h3 className="md:text-xl text-center text-lg font-head font-semibold">
                        {item.title}
                      </h3>
                      <div className="flex justify-center items-center gap-2">
                        <MapPin />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <div className="w-full flex md:justify-between justify-center gap-6 md:gap-0 2xl:p-4 md:p-2 p-4">
                      <Button className="2xl:min-w-28 font-body bg-white/40 hover:bg-white/30 text-white">
                        <Link
                          href="/detail"
                          className="flex justify-center items-center"
                        >
                          Details
                        </Link>
                      </Button>
                      <Button className="2xl:min-w-28 font-body">
                        <Link
                          href="/cart"
                          className="flex justify-center items-center"
                        >
                          Add to cart
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex">
            <Link
              href="/recently-added"
              className="ml-auto text-sm font-body hover:underline md:hidden block"
            >
              See more...
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <div className="flex justify-between items-end">
            <h3 className="md:text-3xl text-xl font-head font-bold">
              Music
            </h3>
            <Link
              href="/music"
              className="text-sm font-body hover:underline md:block hidden"
            >
              See more...
            </Link>
          </div>
          <div className="flex md:flex-row flex-col 2xl:gap-20 md:gap-14 gap-6 h-full">
            {limitedData.map((item) => (
              <div
                key={item.id}
                className="relative w-full 2xl:h-44 md:h-36 h-44"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="absolute w-full h-full rounded-sm object-fill"
                />
                <div className="2xl:h-52 md:h-40 h-52 relative z-10 w-full rounded-lg transform transition-all ease-in-out duration-500 hover:scale-110 opacity-0 hover:opacity-100">
                  <div className="bg-gradient-to-b from-black/50 to-black z-10 w-full h-full rounded-lg flex flex-col justify-between">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="absolute w-full h-full -z-10 rounded-lg object-fill"
                    />
                    <div className="m-2">
                      <FaHeart
                        onClick={handleClick}
                        className={
                          click
                            ? "ml-auto cursor-pointer text-red-600 2xl:w-5 md:w-3 2xl:h-5 md:h-3"
                            : "ml-auto cursor-pointer w-5 h-5"
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-4 justify-center items-center">
                      <h3 className="md:text-xl text-center text-lg font-head font-semibold">
                        {item.title}
                      </h3>
                      <div className="flex justify-center items-center gap-2">
                        <MapPin />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <div className="w-full flex md:justify-between justify-center gap-6 md:gap-0 2xl:p-4 md:p-2 p-4">
                      <Button className="2xl:min-w-28 font-body bg-white/40 hover:bg-white/30 text-white">
                        <Link
                          href="/detail"
                          className="flex justify-center items-center"
                        >
                          Details
                        </Link>
                      </Button>
                      <Button className="2xl:min-w-28 font-body">
                        <Link
                          href="/cart"
                          className="flex justify-center items-center"
                        >
                          Add to cart
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex">
            <Link
              href="/music"
              className="ml-auto text-sm font-body hover:underline md:hidden block"
            >
              See more...
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <div className="flex justify-between items-end">
            <h3 className="md:text-3xl text-xl font-head font-bold">
              Sports
            </h3>
            <Link
              href="/sports"
              className="text-sm font-body hover:underline md:block hidden"
            >
              See more...
            </Link>
          </div>
          <div className="flex md:flex-row flex-col 2xl:gap-20 md:gap-14 gap-6 h-full">
            {sportLists.map((item) => (
              <div
                key={item.id}
                className="relative w-full 2xl:h-44 md:h-36 h-44"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="absolute w-full h-full rounded-sm object-fill"
                />
                <div className="2xl:h-52 md:h-40 h-52 relative z-10 w-full rounded-lg transform transition-all ease-in-out duration-500 hover:scale-110 opacity-0 hover:opacity-100">
                  <div className="bg-gradient-to-b from-black/50 to-black z-10 w-full h-full rounded-lg flex flex-col justify-between">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="absolute w-full h-full -z-10 rounded-lg object-fill"
                    />
                    <div className="m-2">
                      <FaHeart
                        onClick={handleClick}
                        className={
                          click
                            ? "ml-auto cursor-pointer text-red-600 2xl:w-5 md:w-3 2xl:h-5 md:h-3"
                            : "ml-auto cursor-pointer w-5 h-5"
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-4 justify-center items-center">
                      <h3 className="md:text-xl text-center text-lg font-head font-semibold">
                        {item.title}
                      </h3>
                      <div className="flex justify-center items-center gap-2">
                        <MapPin />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <div className="w-full flex md:justify-between justify-center gap-6 md:gap-0 2xl:p-4 md:p-2 p-4">
                      <Button className="2xl:min-w-28 font-body bg-white/40 hover:bg-white/30 text-white">
                        <Link
                          href="/detail"
                          className="flex justify-center items-center"
                        >
                          Details
                        </Link>
                      </Button>
                      <Button className="2xl:min-w-28 font-body">
                        <Link
                          href="/cart"
                          className="flex justify-center items-center"
                        >
                          Add to cart
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex">
            <Link
              href="/sports"
              className="ml-auto text-sm font-body hover:underline md:hidden block"
            >
              See more...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
