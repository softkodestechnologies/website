import React from "react";

const Hero = () => {
  return (
    <section className="landing_hero">
      <div className="container">
        <div className="hero_bread">
          <li>Development</li>
          <li>Design</li>
          <li>Training</li>
        </div>
        <div className="landing_hero_wrap">
          <div className="hero_content">
            <div className="div_1">
              <p>
                Do you need your brand to look endearing on the web? need a user
                friendly app to create value? or you need help running your
                online business?{" "}
              </p>
            </div>
            <div className="div_2">
              <div className="div_2_content">
                <p>
                  We provide all these with ease. Softkodes is a tech solutions
                  company with solid design and development expertise. We build
                  standardized applications, provide online business services
                  and offer training is this areas.
                </p>
              </div>

              <div className="arrow_wrap">
                <div className="arrow">
                  <div className="mid"></div>
                  <div className="down"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
