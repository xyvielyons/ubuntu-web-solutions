import React from 'react'
import Image from 'next/image'
function About() {
  return (
    <div className='py-[32px] px-[8px] flex flex-col md:flex-row-reverse md:px-[16px] lg:px-[24px] gap-2 md:gap-4' id="Story">
        <div className="w-full md:w-1/2 flex items-center justify-center">
            <Image src="/about.png" alt="aboutImage" width={1024} height={1024} className='md:max-w-[500px] w-full rounded-md'></Image>
        </div>
        <div className="p-4 w-full md:w-1/2 md:flex md:items-start md:justify-center md:flex-col">
            <div className="flex items-center justify-start">
                <h1 className='text-[40px] font-bold text-gray-800 dark:text-white'>Our Story</h1>
                <Image src="/crown.svg" alt="crown" width={60} height={60} className='ml-2 dark:filter dark:brightness-50 dark:invert'></Image>
            </div>
            <p className='text-[24px] mysubheading text-gray-800 dark:text-white'>“Passion-Driven Websites, Built to Perform.” </p>
            <p className='pt-[16px] text-md text-gray-700 dark:text-slate-50'>At Ubuntu Web we don’t just build websites—we bring your ideas to life. What started as a vision to create unique, high-performing websites has turned into a passion for helping businesses like yours stand out online. 
            From day one, our team has been dedicated to crafting websites that work as hard as you do. Let’s build something unforgettable together. </p>
        </div>
        
    </div>
  )
}

export default About