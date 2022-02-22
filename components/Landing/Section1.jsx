import React from "react";
import Image from "next/image";
const Section1 = () => {
  return (
    <section className="section1">
      <div className="container">
        <div className="section1_wrap">
          <h1 data-aos="fade-down" data-aos-delay="300">
            WHAT WE DO
          </h1>
          <div className="section1_cards">
            <div className="card" data-aos="fade-up-right" data-aos-delay="450">
              <Image
                src="/assets/image1.png"
                alt="test"
                width={342}
                height={534}
              />
            </div>

            <div className="card" data-aos="fade-down" data-aos-delay="450">
              <Image
                src="/assets/image2.png"
                alt="test"
                width={387}
                height={273}
              />
              <div className="content">
                <h3>Development</h3>
                <p>
                  We specialise in Web development, android development, IOS
                  development, HTML/CSS/JS, Backend/API, integrated word press
                </p>
              </div>
            </div>
            <div
              className="card"
              data-aos="fade-down-left"
              data-aos-delay="450"
            >
              <Image
                src="/assets/image3.png"
                alt="test"
                width={295}
                height={545}
              />
            </div>

            <div
              className="card"
              data-aos="zoom-out-right"
              data-aos-delay="450"
            >
              <Image
                src="/assets/image4.png"
                alt="test"
                width={317}
                height={507}
              />
              <div className="content">
                <h3>Design</h3>
                <p>
                  We provide dhesign services ranging from Animation,
                  Iconography, 2D/3D graphics, and Branding to graphic design
                  and Ui/Ux design.
                </p>
              </div>
            </div>

            <div className="card" data-aos="zoom-out-down" data-aos-delay="450">
              <Image
                src="/assets/image5.png"
                alt="test"
                width={352}
                height={264}
              />
              <div className="content">
                <h3>Development</h3>
                <p>
                  Our designs are tailored to be functional, aesthetically
                  pleasing and to represents the brand’s vision adequately.
                </p>
              </div>
            </div>

            <div className="card" data-aos="zoom-out-left" data-aos-delay="450">
              <Image
                src="/assets/image6.png"
                alt="test"
                width={324}
                height={506}
              />
              <div className="content">
                <h3>Training</h3>
                <p>
                  We offer intensive and thorough training on Ui/Ux Design,
                  Graphic Design, Mobile Development, Web Development and Game
                  Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
