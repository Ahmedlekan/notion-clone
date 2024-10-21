"use client"

import React, {useState} from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useRef } from "react";
import { PiArrowRight, PiBookOpenTextLight, PiFileThin, PiSparkleLight, PiTargetLight,
} from "react-icons/pi";


const tabs = [
  {
    icon: (
      <span className="mr-2 bg-purple-100 p-1 rounded-md">
        <PiSparkleLight size={30} color="rgb(147 51 234)" />
      </span>
    ),
    name: "AI",
    feature: "Now with Q&A",
    description: "Ask literally anything. Bird Will answer.",
    more: (
      <div className="text-purple-600 flex items-center ml-1">
        Learn more <PiArrowRight size={14} />
      </div>
    ),
    image: "/assets/GroovyDoodle.svg",
  },

  {
    icon: (
      <span className="mr-2 bg-yellow-100 p-1 rounded-md">
        <PiFileThin size={30} color="rgb(234 179 8)" />
      </span>
    ),
    name: "Docs",
    description: "Simple, powerful, beautiful. Next-gen notes & docs.",
    more: (
      <div className="text-yellow-600 flex items-center ml-1">
        Learn more <PiArrowRight size={14} />
      </div>
    ),
    image: "/assets/RunningDoodle.svg",
  },

  {
    icon: (
      <span className="mr-2 bg-red-100 p-1 rounded-md">
        <PiBookOpenTextLight size={30} color="rgb(239 68 68)" />
      </span>
    ),
    name: "Wikis",
    description: "Centralize your knowledge. Make it accessible.",
    more: (
      <div className="text-red-600 flex items-center ml-1">
        Learn more <PiArrowRight size={14} />
      </div>
    ),
    image: "/assets/PlantDoodle.svg",
  },

  {
    icon: (
      <span className="mr-2 bg-blue-100 p-1 rounded-md">
        <PiTargetLight size={30} color="rgb(37 99 235)" />
      </span>
    ),
    name: "Projects",
    description: "Manage complex projects without the chaos.",
    more: (
      <div className="text-blue-600 flex items-center ml-1">
        Learn more <PiArrowRight size={14} />
      </div>
    ),
    image: "/assets/CoffeeDoddle.svg",
  },

  {
    icon: (
      <span className="mr-2 bg-yellow-100 p-1 rounded-md">
        <PiFileThin size={30} color="rgb(234 179 8)" />
      </span>
    ),
    name: "Calendar",
    description: "Stay organized with next-gen calendar solutions.",
    more: (
      <div className="text-yellow-600 flex items-center ml-1">
        Learn more <PiArrowRight size={14} />
      </div>
    ),
    image: "/assets/RunningDoodle.svg",
  },
];

  
function HeroSection() {
    const ref = useRef()
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="md:items-center flex flex-col">

        <div className=" font-medium 2xl:w-1/3 md:w-2/3 xl:w-1/2 lg:px-0 px-8 text-5xl 
            xl:text-6xl flex justify-center xl:font-bold xl:pt-14 text-center  pt-6"
        >
            Write, plan, share. <br /> With AI at your side.
        </div>

        <p className="text-2xl xl:font-bold pt-4 text-center w-2/3 mx-auto"
        >
             Jotion is the connected workspace where better, faster work happens.
        </p>

        <div className="flex gap-4 pt-6 items-center justify-center">
          <Link href="/">
            <Button className="py-1 ">
              <div className="flex items-center justify-center">
                <div className="text-lg">Get jotion free</div>
                <div className='ml-2'>
                  <PiArrowRight/>
                </div>
              </div>
            </Button>
          </Link>

          <div className='text-sky-500 flex items-center hover:underline hover:cursor-pointer'>
            Request a demo <span className='ml-3'><PiArrowRight/></span>
          </div>
        </div>

        <div className="pt-10 xl:pt-10 items-center justify-center">
          <Image
            src="/assets/home-hero.webp"
            alt="hero image"
            width={600}
            height={600}
            className="flex items-center justify-center mx-auto "
          />
        </div>

        { isSmallScreen ? (
            <div className="px-8">

                <div className="grid grid-cols-4 md:row-span-1 gap-4 xl:gap-6 
                  xl:px-0"
                >
                    {tabs.map( (tab)=> (
                        <motion.div key={tab.name}
                            className={`
                                flex p-1 md:p-8 cursor-pointer ${activeTab.name === tab.name ?
                                    "rounded-md md:rounded-xl bg-[#f6f5f4]  md:bg-white border-gray-200 md:border items-center justify-center flex p-1 "
                                    : "md:bg-[#f6f5f4] rounded-md xl:rounded-xl p-1 items-center justify-center hover:bg-[#eae7e7] "
                                }
                                `
                            }
                            onClick={() => setActiveTab(tab)}
                        >
                            <div className="flex flex-col items-center md:justify-center mx-auto">
                                <div className="hidden md:flex text-4xl">{tab.icon}</div>
                                <div className="font-medium text-sm  xl:text-lg mt-1">
                                    {tab.name}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Display content based on the active tab */}
                <div className="pt-6 md:py-5 lg:px-16 xl:px-0 md:px-16 w-full">
                    {activeTab && (
                    <div className="flex justify-center items-center flex-col">
                        <Image src={activeTab.image} width={1025} height={500} alt="logo"
                            className=" w-full border p-20 xl:p-40 rounded-xl"
                        />
                    </div>
                    )}
                </div>

            </div>
       
       ) : (

            <div className="flex xl:space-x-4 items-center justify-between 
                hover:cursor-pointer gap-4 w-4/5 xl:w-3/4 2xl:w-[55%]"
            >
                {tabs.map((tab)=> (
                    <motion.div key={tab.name}
                        className={`xl:flex justify-center space-x-4 sm:my-10 xl:h-40
                        ${activeTab === tab ? "border rounded-xl pt-2 bg-white " : "shadow-md rounded-xl pt-2  bg-[#f6f5f4]"}
                        `}
                        onMouseEnter={() => setActiveTab(tab)}
                    >
                        <div className='px-4'>

                          <div className="flex items-center">
                              <div>{tab.icon}</div>
                              <div className="text-2xl font-medium">{tab.name}</div>
                          </div>

                          <div  className="flex flex-col text-sm">
                              <div>
                                  {/* Only animate the description */}
                                  <div
                                  >
                                        {tab.description}
                                  </div>
                              </div>

                              {/* Conditional rendering for "Learn more" link */}
                              {activeTab === tab && (
                              <div className="text-sm mt-2">{tab.more}</div>
                              )}
                          </div>

                        </div>
                    </motion.div>
                ))}
            </div>
        )}

        {/* Display content based on the active tab */}
        <div className="hidden md:flex py-5 px-8 md:px-0 lg:w-3/4 2xl:w-[55%]">
        {activeTab && (
            <div className=" md:flex  items-center justify-center space-x-6 hover:cursor-pointer w-full">
              <Image src={activeTab.image} width={500} height={500} alt="logo"
                className="w-full p-20 xl:p-40 shadow-md rounded-xl bg-[#f6f5f4]"
              />
            </div>
        )}
        </div>

    </div>
  )
}

export default HeroSection