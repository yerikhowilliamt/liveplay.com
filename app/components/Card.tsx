import { Button } from "@/components/ui/button";
import { MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

type CardProps = {
  src: string;
  alt: string;
  title: string;
  location: string;
  onClick: () => void;
  className: string;
}

const Card = ({ src, alt, title, location, onClick, className }: CardProps) => {
  return (
    <div className="relative w-72 2xl:h-44 md:h-36 h-44">
      <Image
        src={src}
        alt={alt}
        fill
        className="absolute w-full h-full rounded-sm object-fill"
      />
      <div className="2xl:h-52 md:h-40 h-52 relative z-10 w-full rounded-lg transform transition-all ease-in-out duration-500 hover:scale-110 opacity-0 hover:opacity-100">
        <div className="bg-gradient-to-b from-black/50 to-black z-10 w-full h-full rounded-lg flex flex-col justify-between">
          <Image
            src={src}
            alt={alt}
            fill
            className="absolute w-full h-full -z-10 rounded-lg object-fill"
          />
          <div className="m-2">
            <FaHeart onClick={onClick} className={className} />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <h3 className="md:text-base text-sm text-center font-head font-semibold">
              {title}
            </h3>
            <div className="flex justify-center items-center gap-2">
              <MapPinIcon />
              <span>{location}</span>
            </div>
          </div>
          <div className="w-full flex justify-between 2xl:p-4 md:p-2 p-4">
            <Button className="2xl:min-w-28 md:max-w-20 min-w-24 font-body">
              <Link href="/detail">Details</Link>
            </Button>
            <Button className="2xl:min-w-28 md:max-w-20 min-w-24 font-body">
              <Link href="/cart">Add to cart</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
