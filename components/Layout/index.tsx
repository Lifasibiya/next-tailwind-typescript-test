import React, { ReactNode } from 'react';
import Head from "next/head";

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Logo' }: Props) => {
  return (
    <div>
      <Head >
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main  className="flex">
        <div className="min-w-16 w-16 z-2 h-screen bg-sidebg">
        </div>
        <div className="w-full h-screen pt-28 bg-mainbg">
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;

