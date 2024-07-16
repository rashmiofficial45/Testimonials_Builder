import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";

export default function Home() {
  const words = ["better", "cute", "beautiful", "modern"];
  return (
    <>
    {/* Container Scroll section */}
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Testimonials
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/Testimonials_demo.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>

    {/* Flip words section */}
    <div className="h-[6rem] flex justify-center items-center px-2 mt-[-10rem]">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Aceternity UI
      </div>
      <div></div>
    </div>
    </>
  );
}
