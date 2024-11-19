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
    console.log(latest)
  });

  useEffect(() => {
    if(scroll>10){
      setNav("Home")
      if(scroll>1200){
        setNav("Menu")
        if(scroll>3000){
          setNav("Facilities")
          if(scroll>3900){
            setNav("Reviews")
          }
        }
      }
    }
  }, [scroll])
  



  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className="shadow-4dp border-b-[1.2px] dark:border-gray-800 dark:bg-black border-gray-300">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden dark:text-white"
        />
        <NavbarBrand>
          <div className="w-[150px] h-full">
           <Image src="/ubuntu-web-high-resolution-logo-transparent.png" width={150} height={100} alt="image logo" className="dark:filter dark:brightness-0 dark:invert"></Image>
          </div>
          
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 dark:text-white" justify="center">
        <NavbarItem>
          <div className="flex flex-col items-center">
              <Link to="Home" spy={true} smooth={true} offset={-60} duration={500} className={`text-[16px] ${nav==="Home"?"text-primarycolor font-medium":"text-gray-600"}`} onClick={()=>setNav("home")}>
                Home
              </Link>
              {nav==="Home" && <div className="w-6 h-1 bg-primarycolor rounded-sm"></div>}
              
              
          </div>
        </NavbarItem>

        <NavbarItem>
        <div className="flex flex-col items-center">
          <Link to="Menu" spy={true} smooth={true} offset={-60} duration={500} aria-current="page" className={`text-[16px] ${nav==="Menu"?"text-primarycolor font-medium":"text-gray-600"}`} onClick={()=>setNav("Menu")}>
            Story
          </Link>
          {nav==="Menu" && <div className="w-6 h-1 bg-primarycolor rounded-sm"></div>}
        </div>
        </NavbarItem>

        <NavbarItem>
        <div className="flex flex-col items-center">
          <Link to="Facilities" spy={true} smooth={true} offset={-60} duration={500} className={`text-[16px]  ${nav==="Facilities"?"text-primarycolor font-medium":"text-gray-600"}`} onClick={()=>setNav("Facilities")}>
            Services
          </Link>
          {nav==="Facilities" && <div className="w-6 h-1 bg-primarycolor rounded-sm"></div>}

          </div>
        </NavbarItem>
        <NavbarItem>
        <div className="flex flex-col items-center">
          <Link to="Reviews" spy={true} smooth={true} offset={-60} duration={500} className={`text-[16px]  ${nav==="Reviews"?"text-primarycolor font-medium":"text-gray-600"}`} onClick={()=>setNav("Reviews")}>
            Portfolio
          </Link>
          {nav==="Reviews" && <div className="w-6 h-1 bg-primarycolor rounded-sm"></div>}
        </div>
        </NavbarItem>
        <NavbarItem>
        <div className="flex flex-col items-center">
          <Link to="Reviews" spy={true} smooth={true} offset={-60} duration={500} className={`text-[16px]  ${nav==="Reviews"?"text-primarycolor font-medium":"text-gray-600"}`} onClick={()=>setNav("Reviews")}>
            Pricing
          </Link>
          {nav==="Reviews" && <div className="w-6 h-1 bg-primarycolor rounded-sm"></div>}
        </div>
        </NavbarItem>
        <NavbarItem>
        <div className="flex flex-col items-center">
          <Link to="Reviews" spy={true} smooth={true} offset={-60} duration={500} className={`text-[16px]  ${nav==="Reviews"?"text-primarycolor font-medium":"text-gray-600"}`} onClick={()=>setNav("Reviews")}>
            Testimonials
          </Link>
          {nav==="Reviews" && <div className="w-6 h-1 bg-primarycolor rounded-sm"></div>}
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
              <div className="flex items-center border-b-1 border-gray-300 ">
              <Link
                to="Home" 
                spy={true} 
                smooth={true} 
                offset={-60} 
                duration={500}
                className={`w-full p-[16px] hover:bg-orange-200 ${nav==="Home"?"text-primarybasecolor text-2xl font-medium":"text-gray-600 text-xl"}`}
                href={`#Home`}
                onClick={()=>{
                  setNav("Home")
                  setIsMenuOpen(false)
                }}
              >
                Home
              </Link>
              {nav==="Home" && <div className="w-10 h-2 bg-primarybasecolor rounded-sm"></div>}
              </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
              <div className="flex items-center border-b-1 border-gray-300 ">
              <Link
                to="Menu" 
                spy={true} 
                smooth={true} 
                offset={-60} 
                duration={500}
                className={`w-full p-[16px] hover:bg-orange-200 ${nav==="Menu"?"text-primarybasecolor text-2xl font-medium":"text-gray-600 text-xl"}`}
                href={`#Menu`}
                onClick={()=>{
                  setNav("Menu")
                  setIsMenuOpen(false)
                }}
              >
                Menu
              </Link>
              {nav==="Menu" && <div className="w-10 h-2 bg-primarybasecolor rounded-sm"></div>}
              </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
              <div className="flex items-center border-b-1 border-gray-300 ">
              <Link
                to="Facilities" 
                spy={true} 
                smooth={true} 
                offset={-60} 
                duration={500}
                className={`w-full p-[16px] hover:bg-orange-200 ${nav==="Facilities"?"text-primarybasecolor text-2xl font-medium":"text-gray-600 text-xl"}`}
                href={`#Facilities`}
                onClick={()=>{
                  setNav("Facilities")
                  setIsMenuOpen(false)

                }}
              >
                Facilities
              </Link>
              {nav==="Facilities" && <div className="w-10 h-2 bg-primarybasecolor rounded-sm"></div>}
              </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
              <div className="flex items-center border-b-1 border-gray-300 ">
              <Link
                to="Reviews" 
                spy={true} 
                smooth={true} 
                offset={-60} 
                duration={500}
                className={`w-full p-[16px] hover:bg-orange-200 ${nav==="Reviews"?"text-primarybasecolor text-2xl font-medium":"text-gray-600 text-xl"}`}
                href={`#Reviews`}
                onClick={()=>{
                  setNav("Reviews")
                  setIsMenuOpen(false)

                }}
              >
                Reviews
              </Link>
              {nav==="Reviews" && <div className="w-10 h-2 bg-primarybasecolor rounded-sm"></div>}
              </div>
          </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
   
  );
}

