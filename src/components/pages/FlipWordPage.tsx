import React from 'react'
import { FlipWords } from '../ui/flip-words'
import Link from 'next/link';

const words = ["Better", "Organised", "Beautiful", "Modern"];
type Props = {}

export const FlipWordPage = (props: Props) => {
  return (
    <div className="h-[30rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

    <div className="relative mt-[100px] bg-blend-color-burn flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <div className="h-[6rem] flex flex-col justify-center items-center px-2 mt-[-10rem]">
        <div className="text-center mx-auto md:pt-24 font-normal text-neutral-600 dark:text-neutral-400">
          <div className="text-2xl mt-6 hidden md:block md:text-4xl mx-auto">
            Get
            <FlipWords words={words} /> <br />
            Testimonials from your customers with ease
          </div>
          <div className="text-base md:text-xl h-auto md:h-24 mt-24 sm:mt-6 w-full max-w-4xl px-4 md:px-0 mx-auto font-normal text-neutral-400 dark:text-neutral-400">
            Collecting testimonials is hard, we get it! So we built
            Testimonial. In minutes, you can collect text and video
            testimonials from your customers with no need for a developer or
            website hosting.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <Link href={"/pricing"}>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Pricing
          </button>
          </Link>
          <Link href={"/sign-in"}>
          <button className="rounded-lg px-4 py-2 bg-blend-color-burn text-black border border-zinc-800 dark:border-slate-300 border-dashed dark:text-white ">
            Try Free
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FlipWordPage