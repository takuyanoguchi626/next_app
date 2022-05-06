// import React from 'react'
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <Header header={props.header}></Header>
      <div className="container">
        <h3 className="my-3 text-primary text-center">{props.title}</h3>
        {props.children}
      </div>
      <Footer footer="copyright TAKUYA-noguchi"></Footer>
    </div>
  );
};

export default Layout;
