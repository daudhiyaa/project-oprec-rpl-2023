import Image from "next/image";
import ArrowRight from "public/arrow-right-white.svg";

export default function Hero() {
  return (
    <main className="min-h-screen flex justify-center bg-darkBG flex-col px-12 md:px-24 items-start">
      <h1 className="text-[50px] font-poppins">Hi, I&apos;m Daud!</h1>
      <h3 className="font-poppins text-justify text-darkParagraph text-[1.1rem]">
        Currently studying at the Sepuluh Nopember Institute of Technology
        majoring in Informatics Engineering. I&apos;ve an interest in Mobile App
        and also Web Developer.
      </h3>
      <button className="bg-darkComponent hover:bg-darkComponentHover flex font-medium py-3 px-5 text-darkText rounded-md w-auto mt-7 font-poppins">
        Contact Me
        <Image src={ArrowRight} alt="" />
      </button>
    </main>
  );
}
