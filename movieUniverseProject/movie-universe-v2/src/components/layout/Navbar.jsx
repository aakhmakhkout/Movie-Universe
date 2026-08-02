import React from "react";
import { Search, User } from "lucide-react";
import Link from "next/link";
import logo from "../../assets/logo3.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-between w-full h-20 sticky top-0 z-20 items-center  bg-[#0a0417] border-b border-white/20 mb-3 rounded-b-lg">
      <div className="w-[6%] h-full flex justify-center items-center">
        <Image src={logo} alt="logo" className="w-full h-full" />
      </div>
      <div className="flex w-[94%] h-full ">
        <div className="w-full h-full flex justify-center items-center">
          <form className="bg-black/10 w-[40%] h-[70%] flex p-[0px_30px] rounded-full border border-white/20 items-center backdrop-blur-md shadow-md has-[input:focus]:border-[#7b5bf5]">
            <input
              type="text"
              id="search"
              placeholder="Search any movie/genre/actor by name or paste the link"
              className="w-full h-full outline-none"
            />
            <button
              type="submit"
              className="text-white/60 hover:text-white cursor-pointer"
            >
              <Search size={25} strokeWidth={1.5} />
            </button>
          </form>
        </div>

        <div className="w-[5%] flex justify-center items-center">
          <Link href="" className="hover:bg-black/10 p-2 rounded-xl">
            <User size={28} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </div>
  );
}
