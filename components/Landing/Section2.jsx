import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="section2">
      <div className="part1">
        <div className="container">
          <div className="content">
            <h1>Design Interactive & Responsive Prototypes</h1>
            <h2>
              Our <span>Prototypes</span> are created with{" "}
              <span>responsive design</span> which displays impeccably any
              screen size, including mobile, tablet, and desktop.
            </h2>
          </div>
          <div className="dir">
            <Image
              alt="arrow"
              width={530}
              height={220}
              src="/assets/arrow1.svg"
            />
          </div>
          <div className="image">
            <Image
              alt="image"
              width={652}
              height={1055}
              src="/assets/image7.png"
            />
          </div>
        </div>
      </div>

      <div className="part2">
        <div className="container">
          <div>
            <Image
              alt="image"
              width={688}
              height={1080}
              src="/assets/image8.png"
            />
          </div>
          <div className="part2_prime">
            <div className="dir">
              <Image
                alt="arrow"
                width={379}
                height={266}
                src="/assets/arrow2.svg"
              />
            </div>
            <div className="content">
              <h1>Development</h1>
              <h2>Code Quickly with us.</h2>
              <h3>
                With us, you don’t have a problem with urgency. Our pace though
                swift, will provide you with the best possible results. We are
                committed to providing amazing products in a timely manner.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
