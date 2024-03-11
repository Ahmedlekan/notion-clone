import React from 'react'
import Link from "next/link";
import { IoMdPulse } from "react-icons/io";

const Logo = () => {
  return (
    <Link href="/">
      <div
      >
        <div className="flex gap-1 items-center ml-4">
          <h1 className="font-bold text-xl">
            Diplo
          </h1>
          <IoMdPulse
            className="text-2xl"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  )
}

export default Logo