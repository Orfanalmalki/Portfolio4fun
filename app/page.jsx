/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full flex flex-col-reverse xl:flex-row items-center justify-between gap-12 xl:gap-24 xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left flex-1">
          <span className="text-xl">Full-Stack Developer</span>
          <h1 className="h1 mb-6">
            Heyy It's Me
            <br />
            <span className="text-accent">Orfan Al Malki</span>
          </h1>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-9 text-white/80">
            I’m a Full-Stack Developer with a passion for learning and
            self-improvement. I thrive on taking on new challenges, constantly
            expanding my skills, and delivering high-quality products. I’m
            dedicated to working hard and achieving more, always focused on
            creating solutions that are both practical and impactful.
          </p>
          {/* <div className="flex flex-col xl:flex-row items-center gap-8">
            <DownloadButton className="uppercase flex items-center gap-2" />
            <div className="mb-8 xl:mb-0">
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div> */}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className=" order-1 flex-1 max-w-[500px] max-h-[500px]"
        >
          <Image
            src="/files/ppv3.png"
            alt="Profile Image"
            priority
            quality={100}
            width={500}
            height={500}
            className="object-contain mx-auto"
          />
        </motion.div>
      </div>
      {/* <Stats /> */}
    </section>
  );
};

export default Home;
