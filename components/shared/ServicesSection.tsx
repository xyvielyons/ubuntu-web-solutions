import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Services } from '@/constants/ServicesConstants'
import Image from 'next/image'
const ServicesSection = () => {
  return (
    <div className='py-[32px] px-[8px] md:px-[16px] lg:px-[24px] space-y-4 border-b-[1px] border-gray-100 dark:border-gray-800' id='Services'>
        <div className="w-full items-center justify-center">
            <div className="flex items-center justify-center gap-2">
                <h1 className='text-[25px] md:text-[35px] lg:text-[40px] font-bold text-center text-gray-800 dark:text-white'>Services We Provide</h1>
                <Image src="/hand.svg" alt="hand" width={35} height={35} className='dark:filter dark:brightness-50 dark:invert'></Image>
            </div>
            
            <p className='text-center text-md text-gray-600 dark:text-slate-100'>“Empowering Your Business with Tailored Web Solutions” </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:grid-cols-3">
            {Services.map((service,i)=>(
            <Card className='' key={i}>
                <CardHeader>
                    <Image src={service.image} alt={service.name} width={600} height={600} className='w-full rounded-md'></Image>
                    
                </CardHeader>
                <CardContent>
                    <h1 className='font-bold text-[26px] text-gray-800 dark:text-white'>{service.name}</h1>
                    <p className=''>{service.desc}</p>
                </CardContent>
            </Card>
            ))}
            
        </div>
    </div>
  )
}

export default ServicesSection