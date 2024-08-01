import Image from "next/image"
import { ReactNode } from "react"

const AuthLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className="relative flex flex-col w-screen h-screen bg-black/80 md:items-center md:justify-center md:bg-transparent">
      <h1 className="text-5xl text-[#db0000] font-head font-semibold absolute top-4 left-4 md:top-10 md:left-10">Liveplay</h1>
      <Image src="/background image.jpg" alt="background image" fill priority className="hidden sm:flex sm:object-cover -z-10 brightness-50"/>
      {children}
    </div>
  )
}

export default AuthLayout