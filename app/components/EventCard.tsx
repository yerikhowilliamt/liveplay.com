import { Button } from '@/components/ui/button'
import { GrCircleInformation } from 'react-icons/gr';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoLocationOutline } from "react-icons/io5";

type EventCardProps = {
  title: string;
  location: string;
}

const EventCard = ({title, location}: EventCardProps) => {
  return (
        <div className='w-full h-full flex flex-col gap-8 justify-center items-center p-10 md:p-5'>
          <div className='w-full flex flex-col gap-4'>
            <h3 className='text-center text-lg md:text-xl font-head font-semibold'>{title}</h3>
            <h5 className='w-full flex gap-2 justify-center items-center text-center font-body font-medium'><IoLocationOutline />{location}</h5>
          </div>
          <div className='flex justify-center items-center gap-10'>
            <Button className="flex gap-2 bg-white/40 hover:bg-white/30 text-white"><GrCircleInformation />Details</Button>
            <Button className="flex gap-2"><MdOutlineShoppingCart />Add to cart</Button>
          </div>
        </div>
  )
}

export default EventCard