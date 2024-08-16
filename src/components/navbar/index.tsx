"use client";

import {
  ChevronDown,
  Clock,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between  p-5 md:px-10">
      <div className="flex md:hidden">
        <Menu />
      </div>
      <Image
        src="/Logo.png"
        width={92}
        height={20}
        alt=""
        className="size-auto"
      />
      <div className="md:flex gap-x-10 hidden">
        <ul className="flex gap-x-2 items-center">
          Home <ChevronDown size={14} />
        </ul>
        <ul className="flex gap-x-2 items-center">
          Shop <ChevronDown size={14} />
        </ul>
        <ul className="flex gap-x-2 items-center">
          Products <ChevronDown size={14} />
        </ul>
        <ul className="flex gap-x-2 items-center">
          Pages <ChevronDown size={14} />
        </ul>
        <ul className="flex gap-x-2 items-center">
          Blog <ChevronDown size={14} />
        </ul>
        <ul>Sale</ul>
        <ul>Buy Umino!</ul>
      </div>
      <div className="flex gap-x-4 items-center">
        <Search size={17} />
        <UserRound size={17} className="md:flex hidden" />
        <Clock size={17} className="md:flex hidden" />
        <div className="md:flex relative hidden">
          <Heart className="md:size-[17px]" />
          <div className="absolute -top-2 -right-3 text-[10px] bg-red-600 rounded-full text-white size-[18px] flex items-center justify-center">
            2
          </div>
        </div>
        <div className="flex relative">
          <ShoppingCart className="md:size-[17px]" />
          <div className="absolute -top-2 -right-3 text-[10px] bg-red-600 md:bg-orange-500  rounded-full text-white size-[18px] flex items-center justify-center">
            2
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
