import React from "react";

const main = () => {
  return (
    <section className="contact">
      <div className="container">
        <h1 data-aos="fade-down" data-aos-delay="400" data-aos-duration="1300">
          Hi! <br /> Tell us what you want
        </h1>
        <div
          className="contact_form_wrap"
          data-aos="fade-down"
          data-aos-delay="400"
          data-aos-duration="1300"
        >
          <form>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <input type="text" placeholder="Enter First Name" />
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <input type="text" placeholder="Enter Last Name" />
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <input type="text" placeholder="Enter Email Name" />
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <input type="text" placeholder="Enter Phone Name" />
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <input type="text" placeholder="Enter Website" />
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <input type="text" placeholder="Enter Company/Organization" />
            </div>

            <div
              className="services"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <h2>What services are you interested in</h2>
              <div className="services_wrap">
                <div className="check_control">
                  <input type="checkbox" name="" id="check" />
                  <label htmlFor="check">Basic Website</label>
                </div>
                <div className="check_control">
                  <input type="checkbox" name="" id="check" />
                  <label htmlFor="check">Digita Marketing</label>
                </div>
                <div className="check_control">
                  <input type="checkbox" name="" id="check" />
                  <label htmlFor="check">Web Design</label>
                </div>
                <div className="check_control">
                  <input type="checkbox" name="" id="check" />
                  <label htmlFor="check">Animation 3D</label>
                </div>
                <div className="check_control">
                  <input type="checkbox" name="" id="check" />
                  <label htmlFor="check">Brand Website</label>
                </div>
                <div className="check_control">
                  <input type="checkbox" name="" id="check" />
                  <label htmlFor="check">Mobile App</label>
                </div>
              </div>
            </div>

            <div
              className="budget"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <h2>
                Project Budget <span>(USD)</span>
              </h2>
              <div className="budget_wrap">
                <div className="budget_btn"> {"<"}10,000</div>
                <div className="budget_btn">10 to 20k</div>
                <div className="budget_btn">30 to 40k</div>
                <div className="budget_btn">40 to 50k</div>
                <div className="budget_btn">{">"}50,000</div>
              </div>
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
                placeholder=" Tell Us About Your Project"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default main;
