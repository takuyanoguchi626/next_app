import React, { FC } from "react";
import Head from "next/head";

type props = {
  title: string;
};

export const Header: FC<props> = (props) => {
  const { title } = props;
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        crossOrigin="anonymous"
      ></link>
    </Head>
  );
};
