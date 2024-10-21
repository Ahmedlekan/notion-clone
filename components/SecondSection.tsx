import Image from 'next/image';
import React from 'react';
import { PiArrowRight } from 'react-icons/pi';
import { logos } from '@/constants';
import Link from 'next/link';
import { Button } from './ui/button';


const SecondSection = () => {
  return (
    <div className="pt-16 flex justify-center items-center flex-col">
        <div className="text-4xl w-3/4 text-center xl:text-5xl font-bold">
            Millions run on Jotion every day
        </div>

        <div className="py-4 xl:w-1/2 text-center px-8 font-medium">
            Powering the world&apos;s best teams, from next-generation startups <br /> to established enterprises.
        </div>

        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer">
            Read customer stories <span className=' ml-3'><PiArrowRight /></span>
        </div>

        <div className='grid grid-cols-3  xl:grid-cols-4 items-center justify-center  
            px-10 md:px-20 lg:px-0 lg:w-1/2 pt-10 gap-10 text-center mx-auto'
        >
            {logos.map( (logo, index) =>(
                <div key={index}>
                    <Image
                        src={logo.image}
                        alt="logo"
                        width={500}
                        height={500}
                    />
                </div>
            ))}
        </div>


        <div className=' relative my-20'>
            <div className="text-2xl text-center xl:text-3xl font-semibold">
                See what Notion can do for your business
            </div>

            <div className="flex gap-4 pt-6 items-center justify-center">
                <Link href="/">
                    <Button className="py-1 ">
                        <div className="flex items-center justify-center">
                            <div className="text-lg">Get jotion free</div>
                            <div className=' ml-2'>
                                <PiArrowRight />
                            </div>
                        </div>
                    </Button>
                </Link>

                <div className='text-sky-500 flex items-center hover:underline hover:cursor-pointer'>
                    Request a demo <span className=' ml-3'><PiArrowRight/></span>
                </div>
            </div>

            <Image 
                src="/assets/sidePeekD.webp"
                height={300}
                width={300}
                alt='side image'
                className='hidden md:block absolute top-0 left-[-68%] md:w-[100px]'
            />

        </div>


    </div>
  )
}

export default SecondSection
  