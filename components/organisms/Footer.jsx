import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer_wrap">
        <div className="top">
          <div
            className="left"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1300"
          >
            <div className="image">
              <Image
                src="/assets/title.svg"
                width={336}
                height={109}
                alt="title"
              />
            </div>
            <h3>Info@softkodesllc.com</h3>
            <p>km 5 Refinery road opp Chicken Republic. Effurun Delta state</p>
          </div>
          <div
            className="center"
            data-aos="fade-bottom"
            data-aos-delay="400"
            data-aos-duration="1300"
          >
            <h1>Quick Links</h1>
            <ul>
              <li>Home</li>
              <li>Get to know us</li>
              <li>Culture</li>
              <li>Our Works</li>
              <li>Training</li>
            </ul>
          </div>
          <div
            className="right"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="1300"
          >
            <h1>Contact Us</h1>
            <ul>
              <li>Dribble</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Behance</li>
              <li>Facebook</li>
              <li>Medium</li>
            </ul>
          </div>
        </div>
        <div
          className="bottom"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1300"
        >
          <div className="copy">Copyright Softkode all rights reserved.</div>
          <div className="list">
            <p>Terms Condition </p>
            <p>Privacy Policy</p>
            <p>FAQ</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
