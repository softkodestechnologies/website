import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <section className="section3">
      <div className="container">
        <div className="section3_card">
          <div className="section3_img">
            <Image
              src="/assets/image9.png"
              width={961}
              height={693}
              alt="image"
            />
          </div>
          <div className="section3_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tellus
            nisl nisi.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
