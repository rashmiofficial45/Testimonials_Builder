import React from 'react'
import { VelocityScroll } from '../magicui/scroll-based-velocity'

type Props = {}

export const VelocityScrollPage = (props: Props) => {
  return (
    <div className="mt-[-100px]">
        <VelocityScroll
          text="Get Testimonials"
          default_velocity={5}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
      </div>
  )
}

export default VelocityScrollPage