import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Carousel2 } from "./Carousel2";
import { Button } from "@/components/ui/button"


function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black overflow-x-hidden">
      <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0 w-full">
        <div className="absolute left-1/2 h-96 w-96 -translate-x-1/2 rounded-full border border-gray-500 bg-gradient-to-br from-white/40"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-5 text-3xl font-light leading-snug text-white sm:leading-snug lg:text-6xl lg:leading-snug">
          <span className="p-2">
               Cultivating <br className="sm:hidden" />
              Financial Clarity </span>
              <span className="relative inline-flex justify-center whitespace-nowrap font-bold">
                {" "}
                Empowering Business <br className="lg:hidden" /> Success
              </span>
            </h1>
            <p className="mx-auto mt-10 max-w-md text-base leading-7 text-white">
              Unlock the power of unparalleled expertise in finance and
              administration, meticulously customized and meticulously tailored
              to address the unique needs and challenges encountered at every
              stage of your company's evolution and growth trajectory,
              guaranteeing unmatched support, seamless scalability, and enduring
              success.
            </p>
          <Button variant="secondary" className="mr-4 mt-4">Contact Us</Button>
          <Button variant="secondary">Learn More</Button>


          </div>


        </div>

        <div className="mt-16 mb-16 flex flex-col items-center justify-center divide-y divide-gray-500 shadow-lg sm:flex-row sm:divide-x sm:divide-y-0 md:mt-32">
          <span className="text-white p-2">Our Clients</span>
          <Carousel2 />
        </div>
      </section>
    </div>
  );
}

export default Landing;
