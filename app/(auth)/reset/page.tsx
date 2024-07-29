"use client"

import { useState } from 'react'
import ResetForm from '../ResetForm';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const ResetPage = () => {
  const [click, setClick] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setClick(!click);
    
    router.push("/signin")
  }

  return (
    <div className="mt-24 flex flex-col justify-center gap-8 rounded-lg bg-black/80 py-10 px-6 md:mt-0 md:w-[400px] md:px-14 backdrop-blur-sm">
      <ResetForm />
      <Button onClick={handleClick}>
        Back to sign in
      </Button>
    </div>
  )
}

export default ResetPage;