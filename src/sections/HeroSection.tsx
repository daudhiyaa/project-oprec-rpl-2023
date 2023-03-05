import Image from "next/image";
import Link from "next/link";
import ArrowRight from "public/arrow-right-black.svg";
import { useState } from "react";

export default function Hero() {
  const [isClicked, setClicked] = useState(false);

  return (
    <main className="min-h-screen flex justify-center bg-lightBG dark:bg-darkBG flex-col px-12 md:px-24 items-start">
      <h1 className="text-[50px] text-lightText dark:text-white font-poppins">
        Hi, I&apos;m Daud!
      </h1>
      <h3 className="font-poppins text-justify text-lightParagraph dark:text-darkParagraph text-[1.1rem]">
        Currently studying at the Sepuluh Nopember Institute of Technology
        majoring in Informatics Engineering. I&apos;ve an interest in Mobile App
        and also Web Developer.
      </h3>
      <div className="flex items-center w-full mt-7">
        <button
          onClick={() => {
            setClicked(!isClicked);
          }}
          className="bg-darkComponent z-10 hover:bg-darkComponentHover flex font-medium py-3 px-5 rounded-md w-auto font-poppins hover:shadow-lg duration-300"
        >
          <h2
            className={`delay-1000 duration-1000 text-darkText 
            ${isClicked ? "none" : "inline"}
            `}
          >
            Contact Me
          </h2>
          <Image
            src={ArrowRight}
            alt=""
            className={`duration-300 ${
              isClicked
                ? "rotate-[270deg] sm:rotate-180"
                : "rotate-90 sm:rotate-0"
            }`}
          />
        </button>

        <div className="font-poppins flex items-center bg-red-500">
          <Link
            href="linkedin.com/in/daudhiyaa"
            className={`border-2 hover:border-gray-400 py-2 px-4 dark:text-white absolute text-lightText cursor-pointer rounded-md z-0 duration-500 text-sm sm:text-base ${
              isClicked
                ? "sm:translate-x-2 max-[640px]:translate-y-14 -translate-x-[9.5rem]"
                : "-translate-x-[9.5rem]"
            }`}
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:daud.dhiya31@gmail.com"
            className={`border-2 hover:border-gray-400 py-2 px-4 dark:text-white text-lightText cursor-pointer rounded-md absolute z-0 duration-500 text-sm sm:text-base ${
              isClicked
                ? "sm:translate-x-28 max-[640px]:translate-y-14 -translate-x-[3.5rem]"
                : "-translate-x-[9.5rem]"
            }`}
          >
            Email
          </Link>
          <Link
            href="github.com/daudhiyaa"
            className={`border-2 hover:border-gray-400 py-2 px-4 dark:text-white text-lightText cursor-pointer rounded-md absolute z-0 duration-500 text-sm sm:text-base ${
              isClicked
                ? "sm:translate-x-[12.3rem] max-[640px]:translate-y-14 translate-x-[1.5rem]"
                : "-translate-x-[9.5rem]"
            }`}
          >
            Github
          </Link>
        </div>
      </div>
    </main>
  );
}
