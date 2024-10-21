"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import { PiArrowRight, PiBookOpenTextLight, PiCompassLight, PiHeadset, 
  PiMegaphoneLight, PiRocketLaunchFill, PiSparkleLight
} from "react-icons/pi";
import Link from 'next/link';
import { Button } from './ui/button';

const tabs = [
    {
      icon: <PiSparkleLight />,
      name: "Engineering",
      image: "/assets/DancingDoodle.svg",
    },
    {
      icon: <PiBookOpenTextLight />,
      name: "Design",
      image: "/assets/DogJumpDoodle.svg",
    },
    {
      icon: <PiRocketLaunchFill />,
      name: "Product",
      image: "/assets/MeditatingDoodle.svg",
    },
    {
      icon: <PiMegaphoneLight />,
      name: "Marketing",
      image: "/assets/ReadingDoodle.svg",
    },
    {
      icon: <PiCompassLight />,
      name: "Operations",
      image: "/assets/SittingDoodle.svg",
    },
    {
      icon: <PiHeadset />,
      name: "HR",
      image: "/assets/SleekDoodle.svg",
    },
  ];

  
const FifthSection = () => {
    const ref = useRef(null);
    const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="relative flex justify-center items-center 
      flex-col px-8 md:px-0 xl:w-3/4 mx-auto 2xl:w-[55%]"
    >
      <div className="pt-20 lg:pt-0 text-3xl xl:text-5xl 
          font-bold text-center pb-8"
      >
          Every team, side-by-side
      </div>

      <div className="grid grid-cols-4 md:grid-cols-6 
          md:row-span-1 gap-4 xl:gap-6 mt-8 xl:px-0"
      >
        {tabs.map( (tab, index)=> (
            <motion.div key={index}
                className={`flex p-1 md:p-8 cursor-pointer
                ${
                    activeTab.name === tab.name
                    ?"rounded-md md:rounded-xl bg-[#f6f5f4]  md:bg-white border-gray-200 md:border items-center justify-center flex p-1 "
                    :"md:bg-[#f6f5f4] rounded-md xl:rounded-xl p-1 items-center justify-center hover:bg-[#eae7e7] "
                }`}
                onClick={() => setActiveTab(tab)}
            >
                <div className="flex flex-col items-center md:justify-center mx-auto">
                    <div className="hidden md:flex text-4xl">{tab.icon}</div>
                    <div className="font-medium text-sm  xl:text-lg mt-1">
                        {tab.name}
                    </div>
                </div>
            </motion.div>
        ) )}
      </div>

      {/* Display content based on the active tab */}
      <div className="py-10 lg:px-16 xl:px-0 md:px-16 w-full ">
          {activeTab && (
          <div className="flex justify-center items-center flex-col">
              <Image
                  src={activeTab.image}
                  width={1025}
                  height={500}
                  alt="logo"
                  className="w-full border p-20 xl:p-40 rounded-xl"
              />
          </div>
          )}
      </div>


              <div className=' relative mt-10 mb-20'>
                <div className="text-2xl text-center xl:text-3xl font-semibold">
                  Bring all your teams together with Notion
                </div>

                <div className="flex gap-4 pt-6 items-center justify-center">
                    <Link href="/">
                        <Button className="py-1 ">
                          <div className="flex items-center justify-center">
                              <div className="text-lg">Get jotion free</div>
                              <div className="ml-2 ">
                                <PiArrowRight/>
                              </div>
                          </div>
                        </Button>
                    </Link>

                    <div className='text-sky-500 flex items-center hover:underline hover:cursor-pointer'>
                        Request a demo <span className="ml-2 "><PiArrowRight/></span>
                    </div>
                </div>

                <Image 
                    src="/assets/sidePeekG.webp"
                    height={300}
                    width={300}
                    alt='side image'
                    className='hidden md:block absolute top-0 left-[-63%] md:w-[100px] scale-x-[-1]'
                />
              </div>

    </div>
  )
}

export default FifthSection