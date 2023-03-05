import Link from "next/link";
import { useState } from "react";
import ArrowRight from "public/arrow-right-black.svg";
import Image from "next/image";

export default function PlaygroundSection() {
  const [username, setUsername] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter Your Name");

  const handleFocus = () => {
    setPlaceholder("");
  };

  const handleBlur = () => {
    setPlaceholder("Enter Your Name");
  };

  const handleClick = (e: any) => {
    if (username == "") {
      alert("Please Enter Your Name");
      e.preventDefault();
    }
  };

  return (
    <section
      id="playground"
      className="min-h-screen font-poppins bg-lightBG dark:bg-darkBG px-12 md:px-24 py-10 flex flex-col justify-center items-center gap-5"
    >
      <h2 className="text-[45px] text-lightText dark:text-white">
        Playground!
      </h2>
      <form
        action=""
        className="flex justify-center items-center gap-4 h-full w-fit md:flex-row flex-col"
      >
        <input
          type="text"
          className=" bg-transparent text-lightParagraph dark:text-white border-2 px-4 py-2 w-full rounded-md"
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxLength={20}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Link
          href={{
            pathname: `login/${username}`,
          }}
          // target="_blank"
        >
          <button
            className="px-4 hover:shadow-md duration-300 hover:bg-darkComponentHover w-max rounded-md py-2 text-darkText bg-darkComponent flex items-center"
            onClick={handleClick}
          >
            Go to your own page
            <Image src={ArrowRight} alt="" />
          </button>
        </Link>
      </form>
    </section>
  );
}
