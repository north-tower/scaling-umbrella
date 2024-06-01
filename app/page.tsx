import About from "@/components/About";
import Details from "@/components/Details";
import Futuro from "@/components/Futuro";
import Grow from "@/components/Grow";
import Hero from "@/components/Hero";
import Tail from "@/components/Tail";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
    
 <section className='snap-center'>
 <Hero />

 </section>
 <section className='snap-center'>
        <Details />
        </section>
 <section className='snap-center'>
<Tail />
</section>
<section className='snap-center'>
<About />
</section>
<section className='snap-center'>
      <Grow />
      </section>
<section className='snap-center'>
<Futuro />
</section>
    </main>
  );
}
