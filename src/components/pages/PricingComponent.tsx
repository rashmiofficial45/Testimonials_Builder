import React from 'react'
import { Description, Offering, OfferingWrapper, Price, PriceCard, ProductName } from '../global/pricing'

export const PricingComponent = () => (
    <div className='text-center'>
    <div className='text-5xl px-20 pt-20 pb-10 font-bold '>
        The easiest way to drive more sales <br /> for your business
    </div>
    <div className='text-slate-600 font-light text-md'>
        Start with 10 text testimonials and 2 video testimonials on us,
        then upgrade to our paid plan only <br /> if you&apos;re happy.
    </div>
    <div>
        7 days free trial, cancel anytime!
    </div>
    <div className='flex gap-4 mx-6 p-12 justify-center'>
  <PriceCard contactPageHref={'/sign-in'}>
    <ProductName>UI Components</ProductName>
    <Price>$2000/mo</Price>
    <Description>
      Special UI component for your website made with React.js, TailwindCSS and FramerMotion.
    </Description>
    <OfferingWrapper>
      <Offering>Design + Development</Offering>
      <Offering>React.js/TailwindCSS</Offering>
      <Offering>Infinite Revisions</Offering>
      <Offering>4-7 days turnaround time</Offering>
      <Offering>Direct Contact With Team Leader</Offering>
    </OfferingWrapper>
  </PriceCard>
  <PriceCard contactPageHref={'/sign-in'}>
    <ProductName>UI Components</ProductName>
    <Price>$2000/mo</Price>
    <Description>
      Special UI component for your website made with React.js, TailwindCSS and FramerMotion.
    </Description>
    <OfferingWrapper>
      <Offering>Design + Development</Offering>
      <Offering>React.js/TailwindCSS</Offering>
      <Offering>Infinite Revisions</Offering>
      <Offering>4-7 days turnaround time</Offering>
      <Offering>Direct Contact With Team Leader</Offering>
    </OfferingWrapper>
  </PriceCard>
  <PriceCard contactPageHref={'/sign-in'}>
    <ProductName>UI Components</ProductName>
    <Price>$2000/mo</Price>
    <Description>
      Special UI component for your website made with React.js, TailwindCSS and FramerMotion.
    </Description>
    <OfferingWrapper>
      <Offering>Design + Development</Offering>
      <Offering>React.js/TailwindCSS</Offering>
      <Offering>Infinite Revisions</Offering>
      <Offering>4-7 days turnaround time</Offering>
      <Offering>Direct Contact With Team Leader</Offering>
    </OfferingWrapper>
  </PriceCard>
  </div>
  </div>
  )
