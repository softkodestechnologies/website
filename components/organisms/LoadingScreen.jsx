import React from "react";
import Image from "next/image";

const LoadingScreen = ({ loading }) => {
  return (
    <div className={loading ? "loading_wrap" : "none"}>
      <div className="loading_left">
        <Image src="/assets/logo.svg" alt="" height={140} width={128} />
        <h1>Experience</h1>
      </div>
      <div className="loading_centre">
        <div className="loading_centre_wrap">
          <h1>100%</h1>
        </div>
      </div>
      <div className="loading_right">
        <h1>Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
