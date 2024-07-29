import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

const Profile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-sm">
          <Avatar className="h-10 w-10 2xl:h-12 2xl:w-12 rounded-sm">
            <AvatarImage src="https://lh3.googleusercontent.com/a/ACg8ocIqKeW1jFxDKUpIeJShynLnjvatyjycBpFrFKdyxro6MSpxhBA=s96-c"/>
            <AvatarFallback className="rounded-sm">Yer</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 z-10 mt-2 bg-black/80 backdrop-blur-sm" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium leading-none font-body">Yerikho William</p>
            <p className="text-xs leading-none text-gray-500">yerikho@gmail.com</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuLabel>
          <Link href="/settings" className="text-sm font-medium leading-none font-body">Settings</Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuItem>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Profile