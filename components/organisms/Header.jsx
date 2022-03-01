import React from "react";
import Image from "next/image";

const Header = () => {
  const openNav = () => {
    if (!window) return;
    let nav = document.querySelector(".nav");
    console.log(nav);
    nav.classList.add("nav_open");
  };
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Image src="/assets/title.svg" width={251} height={80} alt="title" />
        </div>
        <div className="bar_wrap">
          <div className="bars" onClick={openNav}>
            <Image src="/assets/bars.svg" width={39} height={39} alt="bars" />
          </div>
          <h1>Menu</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
