import React from "react";
import { NavLink } from "react-router-dom";

import "./home.css";

function HomePage(props) {
  return (
    <div>
      <div className="container" id="container">
        {/* /* <!-- /////////////////////////////////////// SECTION_1 START ////////////////////////////// --> */}

        <section className="section_1">
          <div>
            <div>
              <h5>
                Let’s Get You <span> Ready</span>
              </h5>
              <p>
                The One Stop to Upgrade Your Resume. Expand Your Skillset. Do An
                Internship. Get Placed
              </p>
            </div>
            <div className="search_box">
              <form id="search_form" autocomplete="off">
                <div className="search_box_1">
                  <div className="cities autocomplete">
                    <input
                      type="text"
                      placeholder="Cities..."
                      id="search_cities"
                    />
                    <svg
                      height="20"
                      width="20"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      focusable="false"
                      className="down_svg"
                    >
                      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                    </svg>
                    <div className="show" id="cities">
                      <p>Ahmedabad</p>
                      <p>Bangalore</p>
                      <p>Chennai</p>
                      <p>Delhi</p>
                      <p>Jaipur</p>
                      <p>Kolkata</p>
                      <p>Lucknow</p>
                      <p>Mumbai</p>
                      <p>Pune</p>
                      <p>Hyderabad</p>
                      <p>Chandigarh</p>
                    </div>
                  </div>
                  <div className="types autocomplete">
                    <input
                      type="text"
                      placeholder="Types..."
                      id="search_types"
                    />

                    <svg
                      height="20"
                      width="20"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      focusable="false"
                      className="down_svg"
                    >
                      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                    </svg>
                    <div className="show" id="types">
                      <p>Full Time</p>
                      <p>Part Time</p>
                      <p>Work from Home</p>
                    </div>
                  </div>
                  <div className="preferences autocomplete">
                    <input
                      type="text"
                      placeholder="Preferences..."
                      id="search_preference"
                    />
                    <svg
                      height="20"
                      width="20"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      focusable="false"
                      className="down_svg"
                    >
                      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                    </svg>
                    <div className="show" id="preference">
                      <p>Advertising</p>
                      <p>Branding</p>
                      <p>Content Writing</p>
                      <p>Digital Marketing</p>
                      <p>Journalism</p>
                      <p>Logistics</p>
                      <p>Marketings</p>
                      <p>Operations</p>
                      <p>Others</p>
                    </div>
                  </div>
                </div>
                <div className="or">
                  <h2>OR</h2>
                </div>
                <div className="search_box_2">
                  <div className="search_box_btn">
                    <input
                      type="text"
                      placeholder="Search..."
                      id="search_post"
                    />
                    <NavLink to="/jobs">
                      <button
                        id="search_btn_"
                        style={{
                          backgroundColor: "red",
                          padding: "5px 10px",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        SEARCH
                      </button>
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* <!-- /////////////////////////////////////// SECTION_2 START ////////////////////////////// --> */}

        <section className="section_2">
          <div>
            <div className="section_2_cont_1">
              <h1>
                PLETHORA OF OPPORTUNITIES<span> FOR YOU</span>
              </h1>
              <hr />
              <p>
                We are on a mission to connect employers to young talent all
                over India. With our strong corporate network, it will no longer
                be a challenge to find the right internship for you
              </p>
            </div>
            <div className="section_2_cont_2">
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-1.png"
                />
              </div>
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-2.png"
                />
              </div>
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-3.png"
                />
              </div>
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-4.png"
                />
              </div>
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-6.png"
                />
              </div>
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-7.png"
                />
              </div>
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-8.png"
                />
              </div>
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-9.png"
                />
              </div>
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-10.png"
                />
              </div>
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-11.png"
                />
              </div>
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-12.png"
                />
              </div>
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-13.png"
                />
              </div>
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-14.png"
                />
              </div>
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-15.png"
                />
              </div>
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-16.png"
                />
              </div>
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-17.png"
                />
              </div>
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-18.png"
                />
              </div>
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-19.png"
                />
              </div>
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-20.png"
                />
              </div>
              <div>
                <img
                  className="partner_logo"
                  src="https://assets.interntheory.com/creative/home-logo/logo-21.png"
                />
              </div>
            </div>
            <br />
          </div>
        </section>

        {/* <!-- /////////////////////////////////////// SECTION_3 START ////////////////////////////// --> */}

        <section className="section_3">
          <div className="section_3_title">
            <h1>
              LET’S GET SOME <span> WORK EXPERIENCE </span>
            </h1>
          </div>
          <div className="section_3_body">
            <div className="cart_work_exp">
              <img src="https://assets.interntheory.com/creative/home-internships/Marketing-Icon.jpg" />
            </div>
            <div className="cart_work_exp">
              <img src="https://assets.interntheory.com/creative/home-internships/BD.jpg" />
            </div>
            <div className="cart_work_exp">
              <img src="https://assets.interntheory.com/creative/home-internships/Content-Writing.jpg" />
            </div>
            <div className="cart_work_exp">
              <img src="https://assets.interntheory.com/creative/home-internships/Graphic.jpg" />
            </div>
            <div className="cart_work_exp">
              <img src="https://assets.interntheory.com/creative/home-internships/Finance.jpg" />
            </div>
            <div className="cart_work_exp">
              <img src="https://assets.interntheory.com/creative/home-internships/HR.jpg" />
            </div>
            <div className="cart_work_exp">
              <img src="https://assets.interntheory.com/creative/home-internships/Eng.jpg" />
            </div>
            <div className="cart_work_exp">
              <img src="https://assets.interntheory.com/creative/home-internships/All-Internships.jpg" />
            </div>
          </div>
        </section>

        {/* <!-- /////////////////////////////////////// SECTION_4 START ////////////////////////////// --> */}

        <section className="section_4">
          <div className="section_4_title">
            <h1>
              HOW ABOUT <span> UPSKILLING ?</span>
            </h1>
          </div>
          <div className="section_4_body">
            <div className="cart_upskill">
              <img src="https://assets.interntheory.com/creative/home-courses/Homepage-stock.jpg" />
            </div>
            <div className="cart_upskill">
              <img src="https://assets.interntheory.com/creative/home-courses/Homepage-digital.jpg" />
            </div>
            <div className="cart_upskill">
              <img src="https://assets.interntheory.com/creative/home-courses/Homepage-web.jpg" />
            </div>
          </div>
        </section>

        {/* <!-- /////////////////////////////////////// SECTION_5 START ////////////////////////////// --> */}

        <section className="section_5">
          <div>
            <div className="section_5_img">
              <img src="https://assets.interntheory.com/creative/chart.png" />
            </div>
            <div className="section_5_content">
              <h1>
                WE ARE CONSTANTLY <span>GROWING</span>
              </h1>

              <p>
                We are on a mission to help every student in India. Upgrading
                your CV and getting you a meaningful job remains our sole motive
                and we are not stopping anytime soon.
              </p>
            </div>
          </div>
        </section>
        {/* 
  <!-- /////////////////////////////////////// SECTION_6 START ////////////////////////////// --> */}

        <section className="section_6">
          <div className="slide_nav">
            <img src="https://image.flaticon.com/icons/png/512/271/271220.png" />
          </div>
          <div className="section_6_cart">
            <div>
              <div className="section_6_cart_sec_1">
                <img
                  className="section_6_cart_img"
                  src="https://assets.interntheory.com/img/testimonial-image/in1.jpg"
                />
                <h5>Sshikha Bodwaani</h5>
                <span className="section_6_cart_position">
                  Sr. Exec. HR at BookMyShow
                </span>
              </div>
              <div className="section_6_cart_sec_2">
                <p>
                  "We have been using InternTheory for over a year now and are
                  very happy with the quality of applications that we receive.
                  Their team has been very helpful in screening applications for
                  the various internship requirements we had. It has been a
                  delight working with them."
                </p>
              </div>
            </div>
            <div>
              <div className="section_6_cart_sec_1 section_6_cart_sec_1_2">
                <img
                  className="section_6_cart_img"
                  src="https://assets.interntheory.com/img/testimonial-image/in4.jpg"
                />
                <h5>Harshil Bhadra</h5>
                <span className="section_6_cart_position">
                  Intern at Porsche
                </span>
              </div>
            </div>
          </div>
          <div className="slide_nav">
            <img src="https://image.flaticon.com/icons/png/512/271/271228.png" />
          </div>
        </section>
      </div>
    </div>
  );
}

export {HomePage};
