import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.scss";
import "../styles/responsive.scss";
import { Loading, Nav, TopButton } from "../components";
import { ParallaxProvider } from "react-scroll-parallax";
import AOS from "aos";
// import aos styles
import "aos/dist/aos.css";
import GeneralContextProvider from "../context/GeneralContext";
import "../node_modules/locomotive-scroll/src/locomotive-scroll.scss";
import dynamic from "next/dynamic";

const ScrollContainer = dynamic(
  () => import("react-scroll-motion").then((mod) => mod.ScrollContainer),
  { ssr: false }
);

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
      <GeneralContextProvider>
        <ScrollContainer>
          <ParallaxProvider>
            <Nav />
            <Component {...pageProps} />
            <TopButton />
          </ParallaxProvider>
        </ScrollContainer>
      </GeneralContextProvider>
    </>
  );
}

export default MyApp;
