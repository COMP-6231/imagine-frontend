import Head from "next/head";
import { ReactNode, useState } from "react";

export default function Layout({
  title = "",
  description = "",
  children,
}: {
  title?: string;
  description?: string;
  children: ReactNode;
}) {
  const [openWaitList, setOpenWaitList] = useState(false);
  return (
    <div className={`font-satoshi bg-black-1 relative`}>
      <Head>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
        <meta name="msvalidate.01" content="223D9979439CC0D3878A9B5736BC49F9" />
      </Head>
      <main
        className={`flex flex-col items-center min-h-[100vh] px-5 pb-[4rem] mobile:px-3`}
      >
        {children}
      </main>
    </div>
  );
}
