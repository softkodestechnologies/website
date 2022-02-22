import React from "react";
import Image from "next/image";
const Section1 = () => {
  return (
    <section className="section1">
      <div className="container">
        <div className="section1_wrap">
          <h1>WHAT WE DO</h1>
          <div className="section1_cards">
            <div className="card">
              <Image
                src="/assets/image1.png"
                alt="test"
                width={421}
                height={657}
              />
            </div>

            <div className="card">
              <Image
                src="/assets/image2.png"
                alt="test"
                width={477}
                height={337}
              />
              <div className="content">
                <h3>Development</h3>
                <p>
                  We specialise in Web development, android development, IOS
                  development, HTML/CSS/JS, Backend/API, integrated word press
                </p>
              </div>
            </div>
            <div className="card">
              <Image
                src="/assets/image3.png"
                alt="test"
                width={364}
                height={670}
              />
            </div>

            <div className="card">
              <Image
                src="/assets/image4.png"
                alt="test"
                width={391}
                height={624}
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

            <div className="card">
              <Image
                src="/assets/image5.png"
                alt="test"
                width={433}
                height={325}
              />
              <div className="content">
                <h3>Development</h3>
                <p>
                  Our designs are tailored to be functional, aesthetically
                  pleasing and to represents the brand’s vision adequately.
                </p>
              </div>
            </div>

            <div className="card">
              <Image
                src="/assets/image6.png"
                alt="test"
                width={399}
                height={623}
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
