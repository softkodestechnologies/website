import Image from "next/image";
import React from "react";

const main = () => {
  return (
    <section className="member">
      <div className="container">
        <h1 data-aos="fade-down" data-aos-delay="400" data-aos-duration="1300">
          Welcome to Apply, a member of our Team will respond to you shortly
          after submission want
        </h1>
        <div
          className="member_form_wrap"
          data-aos="fade-down"
          data-aos-delay="400"
          data-aos-duration="1300"
        >
          <div className="member_head">
            <div className="member_head_img">
              <Image src="/assets/ring.svg" alt="ring" width={63} height={63} />
            </div>
            <h2>Web Design</h2>
          </div>
          <h3
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-duration="1300"
          >
            Fill-in your details and a representative will be in touch with you
            shortly.
          </h3>
          <form>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <input type="text" placeholder="Enter First Name*" />
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <input type="text" placeholder="Enter Last Name*" />
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <input type="text" placeholder="Enter Email Name*" />
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <input type="text" placeholder="Enter Phone Name*" />
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <input type="text" placeholder="Date Of birth*" />
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <input type="text" placeholder="Home Address*" />
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <textarea
                name=""
                id=""
                rows="5"
                placeholder="Tell Us About Your Acedemics Background*"
              ></textarea>
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <textarea
                name=""
                id=""
                rows="5"
                placeholder="Tell Us About Your Acedemics Background*"
              ></textarea>
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <textarea
                name=""
                id=""
                rows="5"
                placeholder=" Tell Us About Your Acedemics Background*"
              ></textarea>
            </div>
            <div
              className="two_btns"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <button>Add Course</button>
              <button>Delete Course</button>
            </div>
            <div
              className="one"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <button>Delete</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default main;
