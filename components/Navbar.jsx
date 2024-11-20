import React from "react";
import { FaRegQuestionCircle, FaSearch } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { LuContact } from "react-icons/lu";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { Input } from "@nextui-org/input";
import { FaTruck } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-200 text-black text-sm py-2">
        <div className="flex gap-5 justify-end pr-40">
          <h1 className="flex gap-2 items-center">
            FAQ <FaRegQuestionCircle />
          </h1>
          <h1 className="flex gap-2 items-center">
            Send Inquiry <MdEmail />
          </h1>
          <h1 className="flex gap-2 items-center">
            Live Support <BiSolidMessageRoundedDetail />
          </h1>
          <h1 className="flex gap-2 items-center">
            Contact <LuContact />
          </h1>
        </div>
      </nav>
      <nav className="my-2">
        <div className="flex justify-center">
          <div>
            <h1 className="text-3xl text-black font-bold">Drukland.de</h1>
          </div>
          <div className="flex gap-3 items-center text-sm ml-20 text-black">
            <Link className="flex items-center gap-1" href={"/"}>
              Business
              <IoIosArrowDown />
            </Link>
            <Link className="flex items-center gap-1" href={"/"}>
              Products
              <IoIosArrowDown />
            </Link>
            <Link className="flex items-center gap-1" href={"/"}>
              About Us <IoIosArrowDown />
            </Link>
          </div>
          <form className="bg-white ml-3">
            <Input
              placeholder="Type to search..."
              size="sm"
              type="search"
              className=" w-[400px]"
              variant="bordered"
            />
          </form>
          <div className="flex gap-3 items-center text-black ml-4 text-xl">
            <h1><FaTruck /></h1>
            <h1><IoIosContact /></h1>
            <h1><FaBasketShopping /></h1>
          </div>
        </div>
      </nav>
      <nav></nav>
    </div>
  );
};

export default Navbar;
