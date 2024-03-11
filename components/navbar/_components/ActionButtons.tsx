"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import DropDownMenu from "./DropDownMenu";

const ActionButtons = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible( (prev)=> !prev );
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="pr-2">
      <div className="flex justify-center items-center">
        
        <div className="flex xl:space-x-4">
          <Link href={"/contact-sales"} className="hidden lg:flex items-center">
            <div className="">Request a demo</div>
          </Link>

          <div className="hidden font-thin lg:flex items-center">|</div>
        </div>

        <div className="flex lg:space-x-4 items-center pr-4">
          <Link href={"/free"}>
            <Button variant={"outline"} className="hidden lg:flex items-center 
               border-none text-md"
            >
              Log in
            </Button>
          </Link>

          <Link href={"/contact"}>
            <Button className="hidden lg:block">
              Get jotion free
            </Button>
          </Link>
        </div>
      </div>

      {isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className=" rounded-full xl:hidden">
          <X className="h-5 w-5  items-center justify-center rounded-full" />
        </div>
      )}

      {!isDropdownVisible && (
        <div onClick={toggleDropdown} className="flex lg:hidden">
          <AlignJustify className="h-6 w-6 items-center justify-center mr-2" />
        </div>
      )}

      {isDropdownVisible && <DropDownMenu onClose={closeDropdown} />}




    </div>
  )
}

export default ActionButtons