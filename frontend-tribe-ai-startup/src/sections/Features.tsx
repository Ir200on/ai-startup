"use client";

import PRODUCT_IMAGE from "@assets/product-image.png";

const basePath = process.env.NODE_ENV === "production" ? "/ai-startup" : "";

import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";

import productImage from "@/assets/product-image.png";

const tabs = [
  {
    icon: `${basePath}/assets/lottie/vroom_lottie.json`,
    // icon: vroomLottie, // Використовуємо імпортований JSON
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: `${basePath}/assets/lottie/click_lottie.json`,
    // icon: clickLottie,
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: `${basePath}/assets/lottie/stars_lottie.json`,
    // icon: starsLottie,
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-5xl font-medium text-center tracking-tighter">
          Elevate your SEO efforts.
        </h2>
        <p className="text-white/70 text-lg tracking-tight text-center mt-5">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="mt-10">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center"
            >
              <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
                <DotLottiePlayer src={tab.icon} className="h-5 w-5" autoplay />
                {/* <DotLottiePlayer
                  animationData={tab.icon} // Використовуємо animationData замість src
                  className="h-5 w-5"
                  autoplay
                /> */}
              </div>
              <div className="font-medium">{tab.title}</div>
              {tab.isNew && (
                <div className="text-sm rounded-full px-2 pt-0.5">new</div>
              )}
            </div>
          ))}
        </div>
        <Image src={productImage} alt="Product image" />
      </div>
    </section>
  );
};
