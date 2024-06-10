import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Carousel2 } from "./Carousel2"


function Landing() {
  return (
    <div>
        <div className="overflow-x-hidden bg-black">
 

  <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
    <div className="shrink-0 from-white/40 absolute left-1/2 h-96 w-96 -translate-x-1/2 rounded-full border border-gray-500 bg-gradient-to-br"></div>
 
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mt-5 text-3xl font-light leading-snug text-white  sm:leading-snug lg:text-6xl lg:leading-snug">
          Cultivating <br className="sm:hidden" />
          Financial Clarity
          <span className="relative inline-flex justify-center whitespace-nowrap font-bold "> Empowering Business <br className="lg:hidden" /> Success</span>
        </h1>
        <p className="mx-auto mt-10 max-w-md text-base leading-7 text-white">
        Unlock the power of unparalleled expertise in finance and administration, meticulously customized and meticulously tailored to address the unique 
        needs and challenges encountered at every stage of your companys evolution and growth trajectory, guaranteeing unmatched support,
         seamless scalability, and enduring success.</p>

        
      </div>
    </div>

    <div className="mt-16 mb-16 flex flex-col items-center justify-center divide-y divide-gray-500 border border-gray-600 bg-gray-700 shadow-lg 
    sm:flex-row sm:divide-x sm:divide-y-0 md:mt-32">
    <Carousel2 />

    </div>
  </section>
</div>

    </div>
  )
}

export default Landing