'use client'
import React,{useState,useEffect} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import {Link} from 'react-scroll';
import Image from "next/image.js";
import { useScroll,useMotionValueEvent } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState<any>()
  const [nav,setNav]= useState<string>("Home")
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScroll(latest)
  });

  useEffect(() => {
    if(scroll>10){
      setNav("Home")
      if(scroll>600){
        setNav("Story")
        if(scroll>1300){
          setNav("Services")
          if(scroll>2700){
            setNav("Portfolio")
            if(scroll>6000){
              setNav("Pricing")
              if(scroll>7400){
                setNav("Testimonials")
              }
            }
          }
        }
      }
    }
  }, [scroll])
  



  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className="shadow-4dp border-b-[1.2px] dark:border-gray-800 dark:bg-black border-gray-300 dark:opacity-85">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden dark:text-white"
        />
        <NavbarBrand>
          <div className="md:w-[150px] h-full w-[100px]">
           <Image src="/ubuntu-web-high-resolution-logo-transparent.png" width={150} height={100} alt="image logo" className="dark:filter dark:brightness-0 dark:invert"></Image>
          </div>
          
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 dark:text-white" justify="center">
        <NavbarItem>
          <div className="flex flex-col items-center">
              <Link to="Home" spy={true} smooth={true} offset={-60} duration={500} className={`text-[16px] ${nav==="Home"?"text-primarycolor font-medium":"text-gray-600"}`} onClick={()=>setNav("Home")}>
                Home
              </Link>
              {nav==="Home" && <div className="w-6 h-1 bg-primarycolor rounded-sm"></div>}
              
              
          </div>
        </NavbarItem>

        <NavbarItem>
        <div className="flex flex-col items-center">
          <Link to="Story" spy={true} smooth={true} offset={-60} duration={500} aria-current="page" className={`text-[16px] ${nav==="Story"?"text-primarycolor font-medium":"text-gray-600"}`} onClick={()=>setNav("Story")}>
            Story
          </Link>
          {nav==="Story" && <div className="w-6 h-1 bg-primarycolor rounded-sm"></div>}
        </div>
        </NavbarItem>

        <NavbarItem>
        <div className="flex flex-col items-center">
          <Link to="Services" spy={true} smooth={true} offset={-60} duration={500} className={`text-[16px]  ${nav==="Services"?"text-primarycolor font-medium":"text-gray-600"}`} onClick={()=>setNav("Services")}>
            Services
          </Link>
          {nav==="Services" && <div className="w-6 h-1 bg-primarycolor rounded-sm"></div>}

          </div>
        </NavbarItem>
        <NavbarItem>
        <div className="flex flex-col items-center">
          <Link to="Portfolio" spy={true} smooth={true} offset={-60} duration={500} className={`text-[16px]  ${nav==="Portfolio"?"text-primarycolor font-medium":"text-gray-600"}`} onClick={()=>setNav("Portfolio")}>
            Portfolio
          </Link>
          {nav==="Portfolio" && <div className="w-6 h-1 bg-primarycolor rounded-sm"></div>}
        </div>
        </NavbarItem>
        <NavbarItem>
        <div className="flex flex-col items-center">
          <Link to="Pricing" spy={true} smooth={true} offset={-60} duration={500} className={`text-[16px]  ${nav==="Pricing"?"text-primarycolor font-medium":"text-gray-600"}`} onClick={()=>setNav("Pricing")}>
            Pricing
          </Link>
          {nav==="Pricing" && <div className="w-6 h-1 bg-primarycolor rounded-sm"></div>}
        </div>
        </NavbarItem>
        <NavbarItem>
        <div className="flex flex-col items-center">
          <Link to="Testimonials" spy={true} smooth={true} offset={-60} duration={500} className={`text-[16px]  ${nav==="Testimonials"?"text-primarycolor font-medium":"text-gray-600"}`} onClick={()=>setNav("Testimonials")}>
            Testimonials
          </Link>
          {nav==="Testimonials" && <div className="w-6 h-1 bg-primarycolor rounded-sm"></div>}
        </div>
        </NavbarItem>
        
      </NavbarContent>
      <NavbarContent justify="end" >
        <NavbarItem>
          <div className="flex space-x-[4px]">
              <a href="https://x.com/xyvielyons" target='_blank'><button className="h-[40px] w-[32px]  flex items-center justify-center ">
                <FaSquareXTwitter className="w-[24px] h-[24px] text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"/>
              </button></a>
              <a href="https://www.instagram.com/xaviertechnologies/" target='_blank'><button className="h-[40px] w-[32px]  flex items-center justify-center ">
                <FaInstagram className="w-[24px] h-[24px] text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"/>
              </button></a>
              <a href="https://www.linkedin.com/in/xyvie-lyons-a8873820a" target='_blank'><button className="h-[40px] w-[32px]  flex items-center justify-center">
                <FaLinkedin className="w-[24px] h-[24px] text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"/>
              </button></a>
              <DarkModeToggle></DarkModeToggle>
          </div>
          
          
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        
          <NavbarMenuItem>
              <div className="flex items-center border-b-1 border-gray-300 dark:border-gray-800">
              <Link
                to="Home" 
                spy={true} 
                smooth={true} 
                offset={-60} 
                duration={500}
                className={`w-full p-[16px] dark:text-white hover:bg-gray-100 active:bg-gray-100 dark:hover:text-black ${nav==="Home"?"text-gray-800 text-2xl font-medium":"text-gray-600 text-xl"}`}
                href={`#Home`}
                onClick={()=>{
                  setNav("Home")
                  setIsMenuOpen(false)
                }}
              >
                Home
              </Link>
              {nav==="Home" && <div className="w-8 h-2 bg-black dark:bg-white rounded-sm"></div>}
              </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
              <div className="flex items-center border-b-1 border-gray-300 dark:border-gray-800">
              <Link
                to="Story" 
                spy={true} 
                smooth={true} 
                offset={-60} 
                duration={500}
                className={`w-full p-[16px] dark:text-white hover:bg-gray-100 active:bg-gray-100 dark:hover:text-black ${nav==="Story"?"text-gray-800 text-2xl font-medium":"text-gray-600 text-xl"}`}
                href={`#Story`}
                onClick={()=>{
                  setNav("Story")
                  setIsMenuOpen(false)
                }}
              >
                Story
              </Link>
              {nav==="Story" && <div className="w-8 h-2 bg-black dark:bg-white rounded-sm"></div>}
              </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
              <div className="flex items-center border-b-1 border-gray-300 dark:border-gray-800">
              <Link
                to="Services" 
                spy={true} 
                smooth={true} 
                offset={-60} 
                duration={500}
                className={`w-full p-[16px] dark:text-white hover:bg-gray-100 active:bg-gray-100 dark:hover:text-black ${nav==="Services"?"text-gray-800 text-2xl font-medium":"text-gray-600 text-xl"}`}
                href={`#Services`}
                onClick={()=>{
                  setNav("Services")
                  setIsMenuOpen(false)
                }}
              >
                Services
              </Link>
              {nav==="Services" && <div className="w-8 h-2 bg-black dark:bg-white rounded-sm"></div>}
              </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
              <div className="flex items-center border-b-1 border-gray-300 dark:border-gray-800">
              <Link
                to="Portfolio" 
                spy={true} 
                smooth={true} 
                offset={-60} 
                duration={500}
                className={`w-full p-[16px] dark:text-white hover:bg-gray-100 active:bg-gray-100 dark:hover:text-black ${nav==="Portfolio"?"text-gray-800 text-2xl font-medium":"text-gray-600 text-xl"}`}
                href={`#Portfolio`}
                onClick={()=>{
                  setNav("Portfolio")
                  setIsMenuOpen(false)
                }}
              >
                Portfolio
              </Link>
              {nav==="Portfolio" && <div className="w-8 h-2 bg-black dark:bg-white rounded-sm"></div>}
              </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
              <div className="flex items-center border-b-1 border-gray-300 dark:border-gray-800">
              <Link
                to="Pricing" 
                spy={true} 
                smooth={true} 
                offset={-60} 
                duration={500}
                className={`w-full p-[16px] dark:text-white hover:bg-gray-100 active:bg-gray-100 dark:hover:text-black ${nav==="Pricing"?"text-gray-800 text-2xl font-medium":"text-gray-600 text-xl"}`}
                href={`#Pricing`}
                onClick={()=>{
                  setNav("Pricing")
                  setIsMenuOpen(false)
                }}
              >
                Pricing
              </Link>
              {nav==="Pricing" && <div className="w-8 h-2 bg-black dark:bg-white rounded-sm"></div>}
              </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
              <div className="flex items-center border-b-1 border-gray-300 dark:border-gray-800">
              <Link
                to="Testimonials" 
                spy={true} 
                smooth={true} 
                offset={-60} 
                duration={500}
                className={`w-full p-[16px] dark:text-white hover:bg-gray-100 active:bg-gray-100 dark:hover:text-black ${nav==="Testimonials"?"text-gray-800 text-2xl font-medium":"text-gray-600 text-xl"}`}
                href={`#Testimonials`}
                onClick={()=>{
                  setNav("Testimonials")
                  setIsMenuOpen(false)
                }}
              >
                Testimonials
              </Link>
              {nav==="Testimonials" && <div className="w-8 h-2 bg-black dark:bg-white rounded-sm"></div>}
              </div>
          </NavbarMenuItem>
          
          
      </NavbarMenu>
    </Navbar>
   
  );
}

