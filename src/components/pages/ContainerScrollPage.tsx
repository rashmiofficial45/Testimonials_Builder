import Image from 'next/image'
import React from 'react'
import Meteors from '../magicui/meteors'
import { ContainerScroll } from '../ui/container-scroll-animation'

type Props = {}

export const ContainerScrollPage = (props: Props) => {
  return (
    <div className="flex flex-col overflow-hidden">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <Meteors number={60} />
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
      </div>
  )
}

export default ContainerScrollPage