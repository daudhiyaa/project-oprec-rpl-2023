import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []); // pake array biar dipanggil sekali doang

  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name="description" content="Website Penugasan FE RPL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-darkBG flex flex-col justify-center items-center font-poppins">
        <h1 className="text-3xl mb-5">404 Page</h1>
        <h3 className="text-darkParagraph">
          This will return to home-page in 2 seconds
        </h3>
      </div>
    </>
  );
}
