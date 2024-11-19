import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const PortfolioCards = ({LinkedInIframes}:{LinkedInIframes:any}) => {
  return (
<div className="grid gap-2 grid-cols-1 md:grid-cols-2 md:gap-4">
{LinkedInIframes.map((iframe:any)=>(
   <Card key={iframe.key}>
   <CardHeader>
     <CardTitle>{iframe.name}</CardTitle>
   </CardHeader>
   <CardContent>
    <div className="h-[500px]">
      <iframe src={iframe.src}  className="iframe-fill" title="Embedded post" ></iframe>
    </div>
   </CardContent>
 </Card>
))}
</div>
)
}

export default PortfolioCards