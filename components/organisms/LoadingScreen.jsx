import React from "react";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";

const LoadingScreen = ({ loading, percent }) => {
  return (
    <div className={loading ? "loading_wrap" : "none"}>
      <div className="loading_centre">
        <Image src="/assets/logo.svg" alt="" height={235} width={215} />
      </div>
      <div className="loading_bar">
        <ProgressBar
          completed={percent}
          customLabel="Loading..."
          height="26px"
          bgColor="#000"
          borderRadius="10px"
          transitionDuration="0.2s"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
