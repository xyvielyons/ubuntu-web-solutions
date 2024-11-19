'use client'
import Image from 'next/image'
import React from 'react'
import { PortfolioLinks } from '@/constants/PorfolioLinks'
import PortfolioCards from '../cards/PortfolioCards'
const Portfolio = () => {
  return (
    <div className='py-[32px] px-[16px] md:px-[24px] border-b-[1px] border-gray-100 dark:border-gray-800' id='Portfolio' >
        <div className="">
            <div className="space-y-2">
                <div className="flex items-center justify-start">
                    <h1 className='text-[35px] md:text-[40px] font-bold text-gray-800 dark:text-white'>OUR PORTFOLIO</h1>
                    <Image src="/person.svg" alt='person' width={30} height={30} className='ml-2 dark:filter dark:brightness-50 dark:invert'></Image>
                </div>
                <p className='mysubheading text-[16px] text-gray-800 dark:text-gray-100'>“See How We Bring Visions to Life.” </p>
                <p className='text-[17px] text-gray-600 dark:text-gray-200'>Check out our work and see how we've helped businesses like yours achieve stunning, high-impact websites. </p>
                <div className="pt-2">
                    <Image src="/arrowportfolio.svg" alt="portfolio" width={100} height={100} className='dark:filter dark:brightness-50 dark:invert'></Image>
                </div>
            </div>
        </div>
        <div className="py-4">
            <PortfolioCards LinkedInIframes={PortfolioLinks}></PortfolioCards>
        </div>
    </div>
  )
}

export default Portfolio