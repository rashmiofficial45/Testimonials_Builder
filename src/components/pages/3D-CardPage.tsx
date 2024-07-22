import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";
import { CardContainer, CardItem } from "../ui/3d-card";
import Dot from "../animata/dot";
import { TracingBeam } from "../global/tracing-beam";
import BoxReveal from "@/components/magicui/box-reveal";
import { FollowerPointerCard } from "../global/following-pointer";
type Props = {};
const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Manu Arora",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: "/demo/thumbnail.png",
  authorAvatar: "/manu.png",
};
const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
const FollowingPointerDemo = () => {
  return (
    <div className="">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <ThreeDCardDemo />
      </FollowerPointerCard>
    </div>
  );
};
const ThreeDCardDemo = (props: Props) => {
  return (
    <>
      <Dot className="">
        <TracingBeam className="px-1">


          <div className="grid w-full grid-cols-1 gap-y-10 md:grid-cols-2 md:grid-flow-row-dense md:gap-x-40">
            <div className="w-full col-span-1 mt-36 dark:invert px-8 md:p-0">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-[2.5rem] font-semibold">
                  Quick to setup<span className="text-[#5046e6]">.</span>
                </p>
              </BoxReveal>

              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h2 className="mt-[.5rem] text-[1.4rem]">
                  A dedicated
                  <span className="text-[#5046e6]"> Landing page</span>
                </h2>
              </BoxReveal>

              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="mt-[1.5rem]">
                  <p>
                    -&gt; Create a dedicated landing page for your business.
                    Share the page link easily via
                    <span className="font-semibold text-[#5046e6]"> email</span>
                    ,
                    <span className="font-semibold text-[#5046e6]">
                      {" "}
                      social media
                    </span>
                    , or even
                    <span className="font-semibold text-[#5046e6]"> SMS</span>
                    . <br />
                    -&gt; Setup can be done in two minutes.
                    <br />
                  </p>
                </div>
              </BoxReveal>
            </div>

            <CardContainer className="inter-var col-span-1 w-full px-8 md:p-0">
              <CardItem translateZ="100" className="w-full">
                <Image
                  src="/landing-page.png"
                  height={405}
                  width={540}
                  className="h-96 w-full block object-contain mx-auto relative rounded-xl group-hover/card:shadow-xl dark:invert"
                  alt="thumbnail"
                />
              </CardItem>
            </CardContainer>
          </div>

          <div className="grid w-full grid-cols-1 gap-y-10 md:grid-cols-2 md:grid-flow-row-dense md:gap-x-40">
            <div className="md:col-start-2 w-full col-span-1 mt-20 dark:invert px-8 md:p-0">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-[2.5rem] font-semibold">
                  Easy to manage<span className="text-[#5046e6]">.</span>
                </p>
              </BoxReveal>

              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h2 className="mt-[.5rem] text-[1.4rem]">
                  A dashboard to manage all
                  <span className="text-[#5046e6]"> Testimonials</span>
                </h2>
              </BoxReveal>

              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="mt-[1.5rem]">
                  <p>
                    -&gt; You will have a simple & clean dashboard to manage all
                    testimonials in one place. It&apos;s like your email inbox,
                    but it&apos;s designed for your
                    <span className="font-semibold text-[#5046e6]">
                      {" "}
                      social proof!
                    </span>
                  </p>
                </div>
              </BoxReveal>
            </div>

            <CardContainer className="inter-var col-span-1 w-full px-8 md:p-0">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/integrations.png"
                  height={400}
                  width={600}
                  className=" w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardContainer>
          </div>

          <div className="grid w-full grid-cols-1 gap-y-10 md:grid-cols-2 md:grid-flow-row-dense md:gap-x-40">
            <div className="w-full col-span-1 mt-20 dark:invert px-8 md:p-0">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-[2.5rem] font-semibold">
                  Track the Metrics<span className="text-[#5046e6]">.</span>
                </p>
              </BoxReveal>

              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h2 className="mt-[.5rem] text-[1.4rem]">
                  Understand how video
                  <span className="text-[#5046e6]">
                    {" "}
                    testimonials are performing
                  </span>
                </h2>
              </BoxReveal>

              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="mt-[1.5rem]">
                  <p>
                    -&gt; Track the metrics from all embedded videos, help your
                    marketing team understand the
                    <span className="font-semibold text-[#5046e6]">
                      {" "}
                      performance
                    </span>{" "}
                    at a glance, even
                    <span className="font-semibold text-[#5046e6]">
                      {" "}
                      promote
                    </span>
                    the best-performing videos to different marketing channels.
                    <br />
                    -&gt; Available in the Ultimate plan
                    <br />
                  </p>
                </div>
              </BoxReveal>
            </div>

            <CardContainer className="inter-var col-span-1 w-full px-8 md:p-0">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/metrics.png"
                  height={400}
                  width={600}
                  className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardContainer>
          </div>

          <div className="grid w-full grid-cols-1 gap-y-10 md:grid-cols-2 md:grid-flow-row-dense md:gap-x-40">
            <div className="w-full md:col-start-2 col-span-1 mt-20 dark:invert px-8 md:p-0">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-[2.5rem] font-semibold">
                  More social proof
                  <span className="text-[#5046e6]">.</span>
                </p>
              </BoxReveal>

              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h2 className="mt-[.5rem] text-[1.4rem]">
                  Not only text and
                  <span className="text-[#5046e6]"> Video testimonials</span>
                </h2>
              </BoxReveal>

              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="mt-[1.5rem]">
                  <p>
                    -&gt; If you have testimonials on social media (e.g.
                    <span className="font-semibold text-[#5046e6]">
                      {" "}
                      Twitter, LinkedIn, TikTok{" "}
                    </span>{" "}
                    etc), video hosting platforms (e.g.
                    <span className="font-semibold text-[#5046e6]">
                      {" "}
                      YouTube, Vimeo
                    </span>
                    ), and other review sites (e.g.
                    <span className="font-semibold text-[#5046e6]">
                      {" "}
                      G2, Google, Capterra, Yelp
                    </span>{" "}
                    etc), bring them all to your account.
                    <br />
                    -&gt; Testimonial helps you manage all your social proof in
                    a single place!
                    <br />
                  </p>
                </div>
              </BoxReveal>
            </div>

            <CardContainer className="inter-var col-span-1 w-full px-8 md:p-0">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/more-social-proof.png"
                  height={400}
                  width={600}
                  className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardContainer>
          </div>

          <div className="grid w-full grid-cols-1 gap-y-10 md:grid-cols-2 md:grid-flow-row-dense md:gap-x-40">
            <div className="w-full col-span-1 mt-20 dark:invert px-8 md:p-0">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-[2.5rem] font-semibold">
                  Embed the Wall of Love
                  <span className="text-[#5046e6]">.</span>
                </p>
              </BoxReveal>

              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h2 className="mt-[.5rem] text-[1.4rem]">
                  The best testimonials all in
                  <span className="text-[#5046e6]"> one place</span>
                </h2>
              </BoxReveal>

              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="mt-[1.5rem]">
                  <p>
                    -&gt; Treat the Wall of Love as the place to showcase all
                    your favorite testimonials. You can
                    <span className="font-semibold text-[#5046e6]"> embed</span>
                    it to your
                    <span className="font-semibold text-[#5046e6]">
                      {" "}
                      website
                    </span>
                    in under a minute.
                    <br />
                    -&gt; No coding knowledge required!
                    <br />
                  </p>
                </div>
              </BoxReveal>
            </div>

            <CardContainer className="inter-var col-span-1 w-full px-8 md:p-0">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/wall-of-love.png"
                  height={400}
                  width={600}
                  className="h-96 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardContainer>
          </div>
        </TracingBeam>
      </Dot>
    </>
  );
};

export default FollowingPointerDemo;
