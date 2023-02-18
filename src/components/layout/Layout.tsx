import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>{pageTitle} Page | FE RPL</title>
        <meta name="description" content="Website Penugasan FE RPL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-title.png" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
