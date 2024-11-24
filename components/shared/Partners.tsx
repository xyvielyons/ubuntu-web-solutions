'use client'
import { ny } from '@/lib/utils'
import Marquee from '@/components/ui/marquee'
import Image from 'next/image'

const reviews = [
   {
      img: '/logo1.png',
   },
   
   {
      img: '/logo2.png',
   },
   
   {
      img: '/logo3.png',
   },
   
   {
      img: '/logo4.png',
   },
   
   {
      img: '/logo5.png',
   },
   
   {
      img: '/logo6.png',
   },
   
]

const firstRow = reviews.slice(0, reviews.length / 2)
function ReviewCard({
   img,
}: {
   img: string
}) {
   return (
      <figure
         className={ny(
            'relative w-64 flex items-center justify-center cursor-pointer overflow-hidden rounded-xl border p-8',
            // light styles
            'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
            // dark styles
            'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
         )}
      >
         <div className="flex flex-row items-center gap-2">
            <Image src={img} alt={img} width={100} height={100} className='dark:filter dark:brightness-80 dark:invert'></Image>
        </div>
      </figure>
   )
}

function Partners() {
   return (
      <div className="bg-background relative flex size-full flex-col items-center justify-center overflow-hidden rounded-md h-[100px]">
        
        <h1 className='dark:text-slate-300 text-slate-800'>Our Trusted Partners:</h1>
       
         <Marquee pauseOnHover className="[--duration:30s]">
            {firstRow.map((review,i) => (
               <ReviewCard key={i} {...review} />
            ))}
         </Marquee>
         <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
         <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
      </div>
   )
}

export default Partners
