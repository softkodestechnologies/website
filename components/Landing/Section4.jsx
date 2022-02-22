import Image from "next/image";
import React from "react";
import { Parallax } from "react-scroll-parallax";

const Section4 = () => {
  return (
    <section className="section4">
      <div className="container">
        <h1>WE ALSO TRAIN PEOPLE ON</h1>
        <div className="section4_parts">
          <div className="section4_part">
            <Parallax speed={-10}>
              <h2>WEB DESIGN</h2>
            </Parallax>
            <div className="section4_img">
              <Parallax speed={20}>
                <Image
                  src="/assets/image10.png"
                  alt="image"
                  width={460}
                  height={460}
                />
              </Parallax>
            </div>
          </div>

          <div className="section4_part">
            <Parallax speed={-10}>
              <h2>MOBILE DEVELOPMENT</h2>
            </Parallax>
            <div className="section4_img">
              <Parallax speed={20}>
                <Image
                  src="/assets/image11.png"
                  alt="image"
                  width={460}
                  height={460}
                />
              </Parallax>
            </div>
          </div>

          <div className="section4_part">
            <Parallax speed={-10}>
              <h2>GAME DEVELOPMENT</h2>
            </Parallax>
            <div className="section4_img">
              <Parallax speed={20}>
                <Image
                  src="/assets/image12.png"
                  alt="image"
                  width={460}
                  height={460}
                />
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
