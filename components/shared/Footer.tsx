'use client'
import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import Link from 'next/link';
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='bg-primarybasecolor py-[48px] flex flex-col gap-4'>
        <div className="flex flex-row w-full justify-center items-center cursor-pointer">
            <Link href="https://www.linkedin.com/in/xyvie-lyons-a8873820a"><FaLinkedin className="w-[24px] h-[24px] text-slate-400 m-2 hover:text-slate-600 dark:hover:text-white active:text-slate-600 dark:active:text-white"></FaLinkedin></Link>
            <Link href="https://www.facebook.com/profile.php?id=61559700346584"><FaSquareFacebook className="w-[24px] h-[24px] text-slate-400 m-2 hover:text-slate-600 dark:hover:text-white active:text-slate-600 dark:active:text-white"></FaSquareFacebook></Link>
            <Link href="https://www.instagram.com/xaviertechnologies/"><FaSquareInstagram className="w-[24px] h-[24px] text-slate-400 m-2 hover:text-slate-600 dark:hover:text-white active:text-slate-600 dark:active:text-white"></FaSquareInstagram></Link>
        </div>
        <div className="flex flex-row w-full justify-center items-center cursor-pointer">
            <h1 className='dark:text-slate-100 text-gray-800 text-md font-regular text-center'>UbuntuWebSolutions©<span>{currentYear}</span>. All rights reserved</h1>
        </div>
    </div>
  )
}

export default Footer