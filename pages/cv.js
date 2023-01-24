import React, { useEffect, useState } from "react";
import Head from "next/head";

const CV = () => {
  const [size, setSize] = useState([800, 800]);
  useEffect(() => {
    setSize([window.innerWidth, window.innerHeight]);
  }, []);

  return (
    <>
      <Head>
        <title>FAR Developer Portfolio</title>
        <meta
          name="description"
          content="Francisco Alvarez Raineri - Full Stack Developer"
        />
        <link rel="icon" href="/Retrato low.png" />
      </Head>
      <iframe
        src="/Francisco Alvarez Raineri Resume.pdf"
        width={size[0]}
        height={size[1]}
        frameborder="0"
        className="mx-auto"
      ></iframe>
    </>
  );
};

export default CV;
