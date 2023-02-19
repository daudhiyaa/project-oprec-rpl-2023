import Image from "next/image";
import ArrowLeft from "public/arrow-left.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

export default function UserNamePage() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <Head>
        <title>{name} Page | FE RPL</title>
        <meta name="description" content="Website Penugasan FE RPL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-title.png" />
      </Head>
      <section className="bg-gray-900 min-h-screen flex flex-col justify-center items-center font-poppins">
        <span className="text-[5vw] md:text-[50px] flex ">
          Hello
          <h2 className=" ml-[1vw] underline underline-offset-[5px] decoration-2">
            {name}
          </h2>
          !
        </span>
        <h3 className="text-[4vw] md:text-[22px]">This is your own page</h3>
        <Link href="/">
          <button className="text-sm rounded-md border-2 px-3 py-[0.5rem] mt-9 flex items-center">
            <Image src={ArrowLeft} alt="" />
            Back to Home Page
          </button>
        </Link>
      </section>
    </>
  );
}
