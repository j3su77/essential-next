import { FC, ReactNode } from "react";
import Head from "next/head";

interface Props {
  title: string;
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ title, children }) => {
  <Head>
    <title>{title}</title>
  </Head>
  return (
    <div style={{paddingBottom: ".5rem"}}>
      {children}
    </div>
  );
};
