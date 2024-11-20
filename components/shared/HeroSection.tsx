'use client'
import { ny } from '@/lib/utils'
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import ShimmerButton from '@/components/ui/shimmer-button'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { FlipWords } from "../ui/flip-words";
import { MdArrowOutward } from "react-icons/md";
import Image from 'next/image'
import { useAppDispatch } from '@/store/hooks/hooks'
import { activate } from '@/store/slices/chatSlice'
export default function HeroSection() {
   const words = ["Growth", "Engagement", "Conversions", "Innovation","Excellence","Success"];
   const dispatch = useAppDispatch();

   const openChatBox = ()=>{
      dispatch(activate())
  }
   return (
      <div className="bg-background relative flex size-full w-full overflow-hidden justify-center items-center h-[500px] md:h-[600px] p-2 border-b-[1px] border-gray-100 dark:border-gray-800" id="Home">
         <Image src="/1.svg" width={30} height={30} alt='star' className='absolute top-8 left-10 md:top-[40px] md:left-[80px] lg:top-[60px] lg:left-[100px] dark:filter dark:brightness-0 dark:invert'></Image>
         <Image src="/3.svg" width={50} height={50} alt='star' className='absolute top-12 right-10 md:top-[90px] md:right-[80px] lg:top-[120px] lg:right-[100px] dark:filter dark:brightness-0 dark:invert'></Image>
         <Image src="/2.svg" width={35} height={35} alt='smiley' className='absolute top-8 md:top-[60px] lg:top-[80px]  dark:filter dark:brightness-0 dark:invert'></Image>
         <Image src="/4.svg" width={50} height={50} alt='star' className='absolute bottom-0 right-12 md:right-[60px] lg:right-[80px] dark:filter dark:brightness-0 dark:invert'></Image>
        <div className="z-10 space-y-2 w-full" >
            <div className="flex flex-col md:leading-[42px] lg:leading-[80px] w-full justify-center items-center">
               <div className="md:pb-2 lg:pb-[28px]">
                  <p className="text-center text-[35px] md:text-[40px] lg:text-[80px] font-bold text-gray-800 dark:text-white w-full" style={{lineHeight:"35px"}}>
                  Crafting Premium Websites
                  </p>
               </div>
                
                <div className="flex flex-row">
                  <p className="text-center text-[24px] md:text-[40px] lg:text-[80px] font-bold text-gray-800 dark:text-white ">
                  That Drive
                  </p>
                  <div className="">
                     <FlipWords words={words} className='text-[24px] md:text-[40px] lg:text-[80px] font-bold text-gray-800 dark:text-white'/>
                  </div>
                </div>
            </div>
            <div className="xl:px-[300px] md:px-[100px] lg:px-[250px]">
                 <p className='font-medium text-[16px] md:text-[18px] lg:text-[20px] text-center text-gray-600 dark:text-gray-300'>Our expert team combines design, technology, and strategy to build custom websites that elevate your business.</p>
            </div>
            <div className="w-full flex justify-center items-center pt-[8px] absolute">
               <div className="relative bottom-[20px]">
                 <Image className='dark:filter dark:brightness-0 dark:invert' src="/arrow.svg" alt="arroe head" width={90} height={90}></Image>
               </div>
               
               <RainbowButton onClick={openChatBox}>Get In Touch Today <MdArrowOutward className='w-[24px] h-[24px] ml-2' /></RainbowButton>

            </div>
        </div>
        
         <AnimatedGridPattern
            numSquares={60}
            maxOpacity={0.3}
            duration={2}
            repeatDelay={1}
            className={ny(
               '[mask-image:radial-gradient(570px_circle_at_center,white,transparent)]',
               'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12',
            )}
         />
      </div>
   )
}


