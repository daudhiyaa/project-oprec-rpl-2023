import Head from "next/head";
import Image from "next/image";
import { ReactNode, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Moon from "public/moon.svg";
import Sun from "public/sun.svg";
import NavbarList from "../link/NavbarList";
interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <>
      <Head>
        <title>{pageTitle} Page | FE RPL</title>
        <meta name="description" content="Website Penugasan FE RPL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-title.png" />
      </Head>
      <div className={`${darkToggle && "dark"}`}>
        <Header
          props={{ setDarkToggle: setDarkToggle, darkToggle: darkToggle }}
        />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}
