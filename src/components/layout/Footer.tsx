import Image from "next/image";
import Link from "next/link";
import FooterList from "../FooterList";
import ITS from "public/its.png";

export default function Footer() {
  return (
    <footer className="py-4 px-12 bg-white rounded-lg shadow md:px-24 md:py-8 dark:bg-darkBG">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link
          href="https://www.its.ac.id/"
          className="flex items-center mb-4 sm:mb-0"
        >
          <Image
            src={ITS}
            className="mr-3"
            alt="ITS Logo"
            width={50}
            height={50}
          />
          <span className="self-center text-2xl font-semibold font-poppins whitespace-nowrap dark:text-white">
            daudhiyaa
          </span>
        </Link>
        <ul className="flex flex-wrap items-center gap-3 mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <FooterList title="About" />
          <FooterList title="Privacy" />
          <FooterList title="Licensing" />
          <FooterList title="Contact" />
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {""}
        <Link href="https://flowbite.com/" className="hover:underline">
          Daud Dhiya&apos; Rozaan
        </Link>{" "}
        - 2023
      </span>
    </footer>
  );
}
