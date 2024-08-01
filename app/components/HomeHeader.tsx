/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { GrCircleInformation } from 'react-icons/gr'
import { MdOutlineShoppingCart } from 'react-icons/md'

const HomeHeader = () => {
  return (
    <div className="w-full h-[55vh] md:h-[60vh] flex justify-start items-center gap-8">
        <div className="absolute w-full h-[55vh] md:h-[60vh] left-0 top-0">
        <Image src="/UMF 2019.jpg" fill alt="background image" className="object-cover md:object-fill h-[60vh] brightness-50 -z-10"/>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 w-full md:w-[40%]">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl md:text-4xl font-head font-semibold">Ultra Music Festival</h3>
          <p className="font-body line-clamp-3"> <span className="hidden md:block">Ultra Music Festival is an annual outdoor electronic music festival that takes place in March in Miami, Florida. The festival was founded in 1999 by Russell Faibisch and Alex Omes.</span> The world's premier electronic music festival, boasting elite DJs and unparalleled production located in the beautiful city of Miami.</p>
        </div>
        <div className="w-full md:w-1/3 flex justify-between gap-6 z-10 font-head">
          <Button className="w-full bg-white/40 hover:bg-white/30 text-white cursor-pointer text-base md:text-lg flex gap-1"><GrCircleInformation /> Details</Button>
          <Button className="w-full flex gap-1 text-base md:text-lg"><MdOutlineShoppingCart /> Buy Now</Button>
        </div>
        </div>
      </div>
  )
}

export default HomeHeader