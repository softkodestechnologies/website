import Image from "next/image";
import React from "react";

const main = () => {
  return (
    <section className="member">
      <div className="container">
        <h1>
          Welcome to Apply, a member of our Team will respond to you shortly
          after submission want
        </h1>
        <div className="member_form_wrap">
          <div className="member_head">
            <Image src="/assets/ring.png" alt="ring" width={63} height={3} />
            <h2>Web Design</h2>
          </div>
          <h3>
            Fill-in your details and a representative will be in touch with you
            shortly.
          </h3>
          <form>
            <div className="control">
              <input type="text" placeholder="Enter First Name*" />
            </div>
            <div className="control">
              <input type="text" placeholder="Enter First Name*" />
            </div>
            <div className="control">
              <input type="text" placeholder="Enter First Name*" />
            </div>
            <div className="control">
              <input type="text" placeholder="Enter First Name*" />
            </div>
            <div className="control">
              <input type="text" placeholder="Enter First Name*" />
            </div>
            <div className="control">
              <input type="text" placeholder="Enter First Name*" />
            </div>
            <div className="control">
              <textarea name="" id="" cols="30" rows="10">
                Tell Us About Your Acedemics Background*
              </textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default main;
