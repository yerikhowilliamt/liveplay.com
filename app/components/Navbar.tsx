"use client";

import { Bell, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Profile from "./Profile";

type LinkProps = {
  id: string;
  name: string;
  href: string;
};

const links: LinkProps[] = [
  { id: "1", name: "Home", href: "/" },
  { id: "2", name: "Music", href: "/music" },
  { id: "3", name: "Sports", href: "/sports" },
  { id: "4", name: "Recently Added", href: "/recently-added" },
  { id: "5", name: "My List", href: "/my-list" },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="w-full items-center justify-between flex relative z-10">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="2xl:text-5xl text-2xl text-[#db0000] font-head font-semibold">
            Event.com
          </h1>
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link) => (
            <div key={link.id}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-white ml-10 underline hover:no-underline text-lg font-bold relative tracking-[1px] hover:text-[#db0000] after:content-[''] after:bg-[#db0000] after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[6px] after:rounded-xl after:absolute after:duration-500 after:hover:w-[100%]"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href={link.href}
                    className="relative text-gray-300 ml-10 font-bold tracking-[1px] hover:text-[#db0000] after:content-[''] after:bg-[#db0000] after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[6px] after:rounded-xl after:absolute after:duration-500 after:hover:w-[100%]"
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="flex items-center md:gap-8 gap-4">
        <Search className="text-gray-300 h-5 2xl:w-7 w-5 2xl:h-7 cursor-pointer" />
        <Bell className="text-gray-300 h-5 2xl:w-7 w-5 2xl:h-7 cursor-pointer" />
        <Profile/>
      </div>
    </div>
  );
};

export default Navbar;
