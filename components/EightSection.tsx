import React from 'react'
import { PiArrowRight } from "react-icons/pi";
import Image from "next/image";
import Link from 'next/link';
import { Button } from './ui/button';


function EightSection() {
  return (
    <section>
        <div className="py-20 xl:py-24 flex justify-center 
            items-center flex-col border-b"
        >
            <div className="text-4xl xl:text-5xl font-bold  text-center">
                Get started for free
            </div>
            <div className="py-4 xl:w-1/3  text-center px-10">
                Play around with it first. Pay and add your team later.
            </div>

            <div className="flex gap-4 pt-6 items-center justify-center">
                <Link href="/">
                    <Button className="py-1 ">
                        <div className="flex items-center justify-center">
                            <div className="text-lg">Get jotion free</div>
                            <div>
                            <PiArrowRight className="ml-2 " />
                            </div>
                        </div>
                    </Button>
                </Link>

                <div className='text-sky-500 flex items-center hover:underline hover:cursor-pointer'>
                    Request a demo <PiArrowRight className="ml-3 text-sm "/>
                </div>
            </div>

            <Image
                src="/assets/notion-parade.webp"
                alt="hero image"
                width={1000}
                height={1000}
                className="w-80 md:w-[50%] pt-10"
            />

        </div>
    </section>
  )
}

export default EightSection