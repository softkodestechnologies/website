import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { useGeneralContext } from "../../context/GeneralContext";
import { AnimatePresence, motion } from "framer-motion";

const Nav = () => {
  const { navOpen, setNavOpen } = useGeneralContext();
  const router = useRouter();
  const move = (route) => {
    router.push(route);
  };
  const removeNav = () => {
    setNavOpen(false);
  };
  return (
    <AnimatePresence>
      {navOpen && (
        <motion.div
          className="nav"
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 500, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="nav_con">
            <div className="nav_header">
              <div className="title" onClick={() => router.push("/")}>
                <Image
                  src="/assets/title.svg"
                  width={251}
                  height={79}
                  alt="logo"
                />
              </div>
              <div className="nav_icon" onClick={removeNav}>
                X
              </div>
            </div>
            <div
              className="nav_body"
              data-aos="flip-right"
              data-aos-delay="300"
              data-aos-easing="ease-out-back"
              data-aos-duration="2000"
            >
              <div className="nav_links1">
                <ul>
                  <li onClick={() => move("/projects")}>
                    <span>01.</span>What we do
                  </li>
                  <li onClick={() => move("/training")}>
                    <span>02.</span>Training
                  </li>
                  <li onClick={() => move("/")}>
                    <span>03.</span>Culture
                  </li>
                  <li onClick={() => move("/career")}>
                    <span></span>Career
                  </li>
                  <li onClick={() => move("news")}>
                    <span></span>News
                  </li>
                  <li onClick={() => move("/contact")}>
                    <span></span>Contact
                  </li>
                </ul>
              </div>
              <div className="nav_links2">
                <ul>
                  <h1>More</h1>
                  <li>News</li>
                  <li>Behance</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>Facebook</li>
                </ul>
              </div>
            </div>
            <div className="nav_footer">
              <p>
                <span onClick={() => move("/newsletter")}>
                  Subscribe to our Newsletter
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Nav;
