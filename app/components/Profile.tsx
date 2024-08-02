"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useCUrrentUser } from "@/hooks/use-current-user";
import { signout } from "@/actions/signout";
import { RxExit } from "react-icons/rx";
import { useRouter } from "next/navigation";

const Profile = () => {
const user = useCUrrentUser();
const router = useRouter();

const handleSignUp = () => {
  router.push("/signup")
}

const handleSignIn = () => {
  router.push("/signin")
}

  const handleSignOut = () => {
    signout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-sm">
          <Avatar className="h-10 w-10 2xl:h-12 2xl:w-12 rounded-sm">
            <AvatarImage src={user?.image || "/avatar.png"} />
            <AvatarFallback className="rounded-sm">{user?.name?.slice(0, 3)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 z-10 mt-2 bg-black/80 backdrop-blur-sm"
        align="end"
        forceMount
      >
        <DropdownMenuLabel>
          {user?.role === "USER" ? (
            <div className="flex flex-col gap-2">
            <p className="text-sm font-medium leading-none font-body">
              {user?.name}
            </p>
            <p className="text-xs leading-none text-gray-500">
              {user?.email}
            </p>
          </div>
          ) : (
            <div>
          <DropdownMenuItem onClick={handleSignIn} className="cursor-pointer flex gap-2">Sign In</DropdownMenuItem>
          <DropdownMenuItem onClick={handleSignUp} className="cursor-pointer flex gap-2">Sign Up</DropdownMenuItem>
          </div>
          ) }
          
        </DropdownMenuLabel>
        <DropdownMenuLabel>
          <Link
            href="/settings"
            className="text-sm font-medium leading-none font-body"
          >
            Settings
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer flex gap-2">
          Sign Out <RxExit/>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
