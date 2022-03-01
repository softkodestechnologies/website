import React from "react";
import Image from "next/image";

const LoadingScreen = ({ loading, percent }) => {
  return (
    <div className={loading ? "loading_wrap" : "none"}>
      <div className="loading_left">
        <div className="loading_left_img">
          <Image src="/assets/logo.svg" alt="" height={140} width={128} />
        </div>
        <h1>Experience</h1>
      </div>
      <div className="loading_centre">
        <div className="loading_centre_wrap">
          <h1>{percent}%</h1>
        </div>
      </div>
      <div className="loading_right">
        <h1>Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
