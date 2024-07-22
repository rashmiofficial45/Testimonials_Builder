"use client";
import React from "react";
import {
  Description,
  Offering,
  OfferingWrapper,
  Price,
  PriceCard,
  ProductName,
} from "../global/pricing";
import { HeroHighlight, Highlight } from "../global/hero-highlight";
export const PricingComponent = () => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl lg:text-5xl px-6 sm:px-16 pt-20 pb-10 font-bold ">
      The easiest way to drive more sales for your business
    </div>
    <div className="text-slate-600 px-12 sm:px-40 font-light text-md mb-5">
      Start with 10 text testimonials and 2 video testimonials on us, then
      upgrade to our paid plan only <br /> if you&apos;re happy.
    </div>
    <Highlight className="text-black dark:text-white p-1 ">
      7 days free trial, cancel anytime!
    </Highlight>

    <div className="grid grid-cols-4 gap-y-16 gap-x-8 lg:p-12 p-6 place-items-center">
      <PriceCard
        className="lg:col-span-1 sm:col-span-2 col-span-4"
        contactPageHref={"/sign-in"}
      >
        <ProductName className="font-bold  text- text-3xl flex flex-col">
          Starter
          <span className=" text-muted-foreground text-xl ">
            For hobbies 🥁
          </span>
        </ProductName>
        <Price>Free</Price>
        <span className="bg-amber-200 px-3 py-1 rounded-md font-semibold ">
          Features Included:
        </span>
        <OfferingWrapper>
          <Offering>1 space</Offering>
          <Offering>2 video testimonials in total</Offering>
          <Offering>10 text testimonials in total</Offering>
          <Offering>Create up to 5 tags</Offering>
          <Offering>Limited 3rd-party imports</Offering>
          <Offering>Limited number of tags</Offering>
          <Offering>Public Testimonial page</Offering>
          <Offering>Wall of Love with our logo</Offering>
        </OfferingWrapper>
      </PriceCard>

      <PriceCard
        className="lg:col-span-1 sm:col-span-2 col-span-4"
        contactPageHref={"/sign-in"}
      >
        <ProductName className="font-bold text- text-3xl flex flex-col">
          Starter Plus
          <span className="text-muted-foreground text-xl ">
            For small team 🏠
          </span>
        </ProductName>{" "}
        <Price>$25/mo</Price>
        <span className="bg-amber-200 px-3 py-1 rounded-md font-semibold ">
          Everything in Starter, and:
        </span>
        <OfferingWrapper>
          <Offering>1 space</Offering>
          <Offering>2 video testimonials in total</Offering>
          <Offering>Unlimited text testimonials</Offering>
          <Offering>Unlimited tags</Offering>
          <Offering>All 3rd-party imports</Offering>
          <Offering>AI case study</Offering>
          <Offering>Page localization</Offering>
          <Offering>Remove our branding from all widgets</Offering>
          <Offering>Custom domain (SSL)</Offering>
        </OfferingWrapper>
      </PriceCard>

      <PriceCard
        className="lg:col-span-1 sm:col-span-2 col-span-4"
        contactPageHref={"/sign-in"}
      >
        <ProductName className="font-bold text- text-3xl flex flex-col">
          Premium
          <span className="text-muted-foreground text-xl ">
            For growing businesses 📈
          </span>
        </ProductName>{" "}
        <Price>$60/mo</Price>
        <span className="bg-amber-200 px-3 py-1 rounded-md font-semibold ">
          Everything in Starter Plus, and:
        </span>
        <OfferingWrapper>
          <Offering>2 (covered) to 10 spaces</Offering>
          <Offering>Extra space $30/mo each</Offering>
          <Offering>5 forms/space</Offering>
          <Offering>Unlimited text testimonials</Offering>
          <Offering>Unlimited video testimonials</Offering>
          <Offering>3 minutes video time limit</Offering>
          <Offering>REST API</Offering>
          <Offering>Webhook</Offering>
          <Offering>Zapier and Make integrations</Offering>
          <Offering>2 account-level staff seats</Offering>
          <Offering>7 days free trial</Offering>
        </OfferingWrapper>
      </PriceCard>

      <PriceCard
        className="lg:col-span-1 sm:col-span-2 col-span-4"
        contactPageHref={"/sign-in"}
      >
        <ProductName className="font-bold text- text-3xl flex flex-col">
          Ultimate
          <span className="text-muted-foreground text-xl ">
            For large businesses 🚀
          </span>
        </ProductName>{" "}
        <Price>$80/mo</Price>
        <span className="bg-amber-200 px-3 py-1 rounded-md font-semibold ">
          Everything in Premium, plus:
        </span>
        <OfferingWrapper>
          <Offering>2 (covered) to ∞ spaces</Offering>
          <Offering>Extra space $40/mo each</Offering>
          <Offering>Unlimited forms/space</Offering>
          <Offering>5 minutes video time limit</Offering>
          <Offering>Video metric insights</Offering>
          <Offering>Automatic curator</Offering>
          <Offering>HubSpot CRM integration</Offering>
          <Offering>3 space-level seats for each space</Offering>
          <Offering>5 account-level staff seats</Offering>
          <Offering>
            Dedicated account manager for <br /> onboarding and set-up
          </Offering>
          <Offering>7 days free trial</Offering>
        </OfferingWrapper>
      </PriceCard>
    </div>
  </div>
);
