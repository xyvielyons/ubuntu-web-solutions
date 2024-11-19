'use client'
import Image from 'next/image'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TiTick } from "react-icons/ti";
import { Button } from '@nextui-org/react';
import ShineBorder from '@/components/ui/shine-border'
const Portfolio = () => {
  return (
    <div className='py-[32px] px-[16px] md:px-[24px] border-b-[1px] border-gray-100 dark:border-gray-800' id='Pricing'>
        <div className="">
            <div className="space-y-2">
                <div className="flex items-center justify-start">
                    <h1 className='text-[35px] md:text-[40px] font-bold text-gray-800 dark:text-white'>Pricing</h1>
                    <Image src="/pricing.svg" alt='person' width={30} height={30} className='ml-2 dark:filter dark:brightness-50 dark:invert'></Image>
                </div>
                <p className='mysubheading text-[16px] text-gray-800 dark:text-gray-100'>“We’ve got a plan that is right for you ”</p>
                <p className='text-[17px] text-gray-600 dark:text-gray-200 md:pr-[100px] lg:pr-[200px]'>We believe that every website should be unique. Our team will work with you to build a solution that’s as individual as your business. Explore our packages to find the perfect fit for your needs, and let’s start collaborating today. </p>
            </div>
        </div>
        <div className="py-4 gap-2 md:gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="">
            <Card className=''>
              <CardHeader>
                <CardTitle>
                  <div className="w-full">
                    <h1 className='font-medium text-[28px] text-center'>Starter Package</h1>
                  </div>
                </CardTitle>
                <CardDescription>
                  <div className="w-full space-y-2 border-b-[1px] border-gray-100 pb-4 dark:border-gray-800">
                    <p className='font-regular text-center text-sm'>Perfect for Small Businesses</p>
                    <p className='font-regular text-center text-sm'>starting at /</p>
                    <h1 className='font-bold text-center text-[32px] text-gray-800 dark:text-gray-50'>Ksh 15000</h1>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="">
                  <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Custom 3-5 page responsive website</p>
                  <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Basic SEO setup</p>
                  <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Mobile optimization</p>
                  <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Fast turnaround time</p>
                  <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>One month of complimentary support</p>
                </div>
              </CardContent>
              <CardFooter className=''>
                <div className="w-full h-full mt-[25px] lg:mt-[45px]">
                  <Button className='w-full' radius='sm'>Make an order</Button>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="">
            <ShineBorder
              className="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl"
              color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
              borderWidth={2}
            >
              <Card>
                <CardHeader>
                  <CardTitle>
                    <div className="w-full">
                      <h1 className='font-medium text-[28px] text-center'>Growth Package</h1>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    <div className="w-full space-y-2 border-b-[1px] border-gray-100 pb-4 dark:border-gray-800">
                      <p className='font-regular text-center text-sm'>Ideal for Growing Brands</p>
                      <p className='font-regular text-center text-sm'>starting at /</p>
                      <h1 className='font-bold text-center text-[32px] text-gray-800 dark:text-gray-50'>Ksh 25500</h1>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="">
                    <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Custom 6-10 page responsive website </p>
                    <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Advanced SEO integration </p>
                    <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Mobile and tablet optimization </p>
                    <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Blog setup or portfolio section </p>
                    <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Performance and security optimization </p>
                    <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Three months of complimentary support  </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full">
                    <Button className='w-full' radius='sm'>Make an order</Button>
                  </div>
                </CardFooter>
              </Card>
            </ShineBorder>
            
          </div>    
          <div className="">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="w-full">
                    <h1 className='font-medium text-[28px] text-center'>Premium Package</h1>
                  </div>
                </CardTitle>
                <CardDescription>
                  <div className="w-full space-y-2 border-b-[1px] border-gray-100 pb-4 dark:border-gray-800">
                    <p className='font-regular text-center text-sm'>Comprehensive Solutions</p>
                    <p className='font-regular text-center text-sm'>starting at /</p>
                    <h1 className='font-bold text-center text-[32px] text-gray-800 dark:text-gray-50'>Ksh 49999</h1>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="">
                  <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Custom 10+ page responsive website  </p>
                  <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Full e-commerce functionality or complex site features </p>
                  <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Advanced SEO & analytics setup </p>
                  <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>UX/UI design customization </p>
                  <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Social media integration </p>
                  <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Six months of ongoing support and maintenance </p>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full">
                  <Button className='w-full' radius='sm'>Make an order</Button>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="w-full">
                    <h1 className='font-medium text-[28px] text-center'>Enterprise Package</h1>
                  </div>
                </CardTitle>
                <CardDescription>
                  <div className="w-full space-y-2 border-b-[1px] border-gray-100 pb-4 dark:border-gray-800">
                    <p className='font-regular text-center text-sm'>Tailored for Large-Scale Projects</p>
                    <h1 className='font-bold text-center text-[32px] text-gray-800 dark:text-gray-50'>Custom Pricing</h1>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="">
                  <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Fully customized website and web app solutions </p>
                  <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Priority support and dedicated account management </p>
                  <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Complex integrations (APIs, third-party tools)</p>
                  <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Ongoing SEO, analytics, and marketing support </p>
                  <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>Regular updates and performance monitoring </p>
                  <p><TiTick className='inline-block w-[24px] h-[24px] text-gray-600 dark:text-gray-200'/>support and maintenance </p>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full mt-[5px] md:mt-[20px] lg:mt-[25px]">
                  <Button className='w-full' radius='sm'>Make an order</Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
    </div>
  )
}

export default Portfolio