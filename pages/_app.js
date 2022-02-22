import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.scss";
import { Loading } from "../components";
import { ParallaxProvider } from "react-scroll-parallax";
import AOS from "aos";
// import aos styles
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  return (
    <>
      <ParallaxProvider>
        <Loading loading={loading} />
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
