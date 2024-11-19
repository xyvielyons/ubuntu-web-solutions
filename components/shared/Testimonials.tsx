import React from 'react'
import MarqueeDemoVertical from './Marquee'
import Image from 'next/image'
import { BorderBeam } from '@/components/ui/border-beam'
const Testimonials = () => {
  return (
    <div className='px-[8px] space-y-4 md:px-[16px] py-[32px] flex flex-col gap-2 md:flex-row justify-center items-center border-b-[1px] border-gray-100 dark:border-gray-800'>
        <div className="space-y-2 p-4 md:w-1/2 relative">
            <Image src="/excited.svg" alt="smiley" className="absolute top-[-20px] left-[50px] dark:filter dark:brightness-50 dark:invert" width={30} height={30}></Image>
            <Image src="/star2.svg" alt="smiley" className="absolute dark:filter dark:brightness-50 dark:invert right-[30px] top-[-60px]" width={30} height={30}></Image>
            <h1 className='mytestimonialsheading font-bold text-[32px] dark:text-gray-100 text-gray-800'>Hear from Our Happy Clients</h1>
            <p className='text-md text-gray-600 dark:text-gray-100'>Nothing speaks louder than the voices of satisfied clients. Here’s what our partners have to say about their experiences with ubuntu web. From seamless website launches to unmatched support, discover why businesses trust us to bring their vision to life. </p>
        </div>
        <div className="relative md:w-1/2 rounded-xl p-2">
            <BorderBeam size={600} duration={12} delay={9} />
            <MarqueeDemoVertical/>
            
        </div>
    </div>
  )
}

export default Testimonials