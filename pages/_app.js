import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.scss";
import "../styles/responsive.scss";
import { Loading, Nav, TopButton } from "../components";
import { ParallaxProvider } from "react-scroll-parallax";
import AOS from "aos";
// import aos styles
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);

  // useEffect(() => {
  //   const handleStart = (url) => {
  //     url !== router.pathname ? setLoading(true) : setLoading(false);
  //   };
  //   const handleComplete = (url) => setLoading(false);

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);
  // }, [router]);
  return (
    <>
      <ParallaxProvider>
        <Nav />
        <Component {...pageProps} />
        <TopButton />
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
