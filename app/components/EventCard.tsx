"use client";

import { Button } from "@/components/ui/button";
import { GrCircleInformation } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MapPinIcon } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

type EventCardProps = {
  title: string;
  location: string;
};

const EventCard = ({ title, location }: EventCardProps) => {
  const [click, setClick] = useState(false);

  const handelClick = () => {
    setClick(!click);
  };
  return (
    <div className="w-full h-full flex flex-col gap-2 items-center justify-between p-2 absolute">
      <div className="w-full flex justify-end">
        <FaHeart
          onClick={handelClick}
          className={`${click ? "text-[#db0000]" : "text-current"} cursor-pointer`}
        />
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-base text-center font-head font-semibold">
          {title}
        </h3>
        <div className="flex text-sm md:text-base justify-center items-center gap-1">
          <MapPinIcon />
          <span className="text-center">{location}</span>
        </div>
      </div>
      <div className="w-full flex flex-row font-body justify-center items-center gap-5">
        <Button className="flex gap-1 p-2 w-full bg-white/40 hover:bg-white/30 text-white">
          <GrCircleInformation />
          Details
        </Button>
        <Button className="flex gap-1 p-2 w-full">
          <MdOutlineShoppingCart />
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
