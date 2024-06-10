import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Carousel2() {
  // Example usage of Carousel2 with dynamic data
  const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm "
    >
      <CarouselContent>
      {data.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 bg-black ">
            <div className="p-1 bg-black">
              <Card className="bg-black">
                <CardContent className="flex aspect-square items-center justify-center p-6 bg-black">
                  {/* <span className="text-3xl font-semibold text-white">{item}</span> */}
                  <img src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/601074ed0f05cd25097215a4_6002086f72b7277e1f01d682_ryan-morrison-illustration-1.png" 
    alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
