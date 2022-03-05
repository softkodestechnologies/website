import React, { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
const Section1 = () => {
  const sectionRef = useRef(null);

  const callbackFunction = (entries) => {
    const [entry] = entries;
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  useEffect(() => {
    if (!window) return;
    const observer = new IntersectionObserver(callbackFunction);
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [sectionRef]);
  return (
    <>
      <section className="section1" ref={sectionRef}>
        <div className="container">
          <div className="section1_wrap">
            <h1 data-aos="fade-down" data-aos-delay="300">
              WHAT WE DO
            </h1>
            <div className="section1_cards">
              <div
                className="card"
                data-aos="fade-up-right"
                data-aos-delay="450"
              >
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

              <div
                className="card"
                data-aos="zoom-out-down"
                data-aos-delay="450"
              >
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

              <div
                className="card"
                data-aos="zoom-out-left"
                data-aos-delay="450"
              >
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

      <section className="section1_mobile">
        <div className="container">
          <div className="mobile_pt1">
            <h1>WHAT WE DO</h1>
            <div
              className="head_image"
              data-aos="flip-down"
              data-aos-delay="400"
              data-aos-easing="ease-out-back"
              data-aos-duration="2000"
            >
              <Image
                src="/assets/image2.png"
                alt="test"
                width={285}
                height={201}
              />
            </div>
            <div className="mobile_pt1_wrap">
              <div
                className="content"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <h2>Development</h2>
                <p>
                  We specialise in Web development, android development, IOS
                  development, HTML/CSS/JS, Backend/API, integrated word press
                  at.
                </p>
              </div>
              <div className="image_wrap">
                <div className="arrow">
                  <Image
                    src="/assets/arrow3.svg"
                    alt="test"
                    width={88}
                    height={90}
                  />
                </div>
                <div
                  className="image"
                  data-aos="flip-right"
                  data-aos-delay="400"
                  data-aos-easing="ease-out-back"
                  data-aos-duration="2000"
                >
                  <Image
                    src="/assets/image1.png"
                    alt="test"
                    width={217}
                    height={243}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mobile_pt2">
            <div className="mobile_pt2_wrap">
              <div
                className="content"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <h2>Design</h2>
                <p>
                  We provide dhesign services ranging from Animation,
                  Iconography, 2D/3D graphics, and Branding to graphic design
                  and Ui/Ux design.
                </p>
              </div>
              <div className="arrow">
                <Image
                  src="/assets/arrow4.svg"
                  alt="test"
                  width={88}
                  height={107}
                />
              </div>
              <div
                className="image"
                data-aos="flip-right"
                data-aos-delay="400"
                data-aos-easing="ease-out-back"
                data-aos-duration="2000"
              >
                <Image
                  src="/assets/image23.png"
                  alt="test"
                  width={185}
                  height={291}
                />
              </div>
            </div>
          </div>

          <div className="mobile_pt3">
            <div className="mobile_pt3_wrap">
              <div
                className="image"
                data-aos="flip-left"
                data-aos-delay="400"
                data-aos-easing="ease-out-back"
                data-aos-duration="2000"
              >
                <Image
                  src="/assets/image6.png"
                  alt="test"
                  width={185}
                  height={291}
                />
              </div>
              <div className="arrow">
                <Image
                  src="/assets/arrow5.svg"
                  alt="test"
                  width={88}
                  height={107}
                />
              </div>
              <div
                className="content"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div className="fake"></div>
                <div className="content_wrap">
                  <h2>Design</h2>
                  <p>
                    We provide dhesign services ranging from Animation,
                    Iconography, 2D/3D graphics, and Branding to graphic design
                    and Ui/Ux design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
