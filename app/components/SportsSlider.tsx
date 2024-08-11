import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import EventCard from "./EventCard";
import { music } from "@/data/music";
import { sports } from "@/data/sports";

const SportsSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation, Pagination]}
      className="h-full"
    >
      {sports.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {slide.images.map((image, index) => (
            <div key={index} className="relative w-full h-full rounded-md">
              <Image
                src={image.src}
                width={image.width}
                height={image.width}
                alt={image.alt}
                className="rounded-md absolute w-full h-full object-full"
              />
              <div className="relative w-full h-full transform transition-all ease-in-out duration-500 opacity-0 hover:opacity-100 z-10">
                <Image
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  className="absolute top-0 w-full h-full rounded-lg object-fill -z-10  brightness-50"
                />
                <EventCard title={image.title} location={image.location} />
              </div>
            </div>
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SportsSlider;
