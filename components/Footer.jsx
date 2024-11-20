import React from "react";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-gray-200">
     <h1 className="border-b-2 border-black mx-32 mb-2"></h1>
      <div className="flex justify-between mx-32">
        <div>
          <h1>All rights reserved © 2024 |  Drukland.de</h1>
        </div>
        <div className="text-black flex gap-5 mb-10">
          <Link href={"/"}>Terms of Use</Link>
          <Link href={"/"}>Sitemap</Link>
          <Link href={"/"}>Company information</Link>
          <Link href={"/"}>Cookie settings</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
