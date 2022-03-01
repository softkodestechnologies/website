import Image from "next/image";
import React from "react";

const Nav = () => {
  const removeNav = () => {
    if (!window) return;
    let nav = document.querySelector(".nav");
    console.log(nav);
    nav.classList.remove("nav_open");
  };
  return (
    <div className="nav">
      <div className="nav_con">
        <div className="nav_header">
          <div className="title">
            <Image src="/assets/title.svg" width={251} height={79} alt="logo" />
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
              <li>
                <span>01.</span>What we do
              </li>
              <li>
                <span>02.</span>Training
              </li>
              <li>
                <span>03.</span>Culture
              </li>
              <li>
                <span></span>Career
              </li>
              <li>
                <span></span>News
              </li>
              <li>
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
          <p>Subscribe to our Newsletter</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
