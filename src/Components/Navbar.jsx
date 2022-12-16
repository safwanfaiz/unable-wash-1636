import React, { memo, useEffect, useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import inter_job from "../../Assets/experianceshalaSquare.jpg";
import axios from "axios";

// document.getElementById("munu_btn").addEventListener("click",myFun)

// function myFun(){
//   alert("rohit kumar malav")
// }

function Navbar(props) {
  const LoginUser = JSON.parse(localStorage.getItem("Login_id")) || "";
  const AdminUser = JSON.parse(localStorage.getItem("Admin_id")) || "";
  const [cartlength, setCartlength] = useState(0);
  const [name, setName] = useState("SignIn");
  console.log("AdminUser:", AdminUser);
  // console.log("  LoginUser.fname:", );
  const navigate = useNavigate();
  let logo = false;
  let sty;
  let stn;
  // https://interandjob.netlify.app/viewandaplly/12
  ////////////
  const fetchname = () => {
    if (LoginUser.fname) {
      setName(LoginUser.fname);
    } else if (AdminUser.fname) {
      setName(AdminUser.fname);
    }
  };
  const logout = () => {
    if (LoginUser) {
      navigate("/login");
      localStorage.removeItem("Login_id");
    } else {
      navigate("/login");
      localStorage.removeItem("Admin_id");
    }
  };
  const [menu, setMenu] = useState(logo);

  if (menu) {
    sty = {
      display: "inline-block",
    };
    stn = {
      display: "none",
    };
  } else {
    stn = {
      display: "inline-block",
    };
    sty = {
      display: "none",
    };
  }
  const homepage = () => {
    if (LoginUser.isAuth) {
      navigate("/dashboard");
    } else if (AdminUser.isAuth) {
      navigate("Admin/dashboard");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    axios
      .get("https://intertheory.onrender.com/cart")
      .then((res) => {
        setCartlength(res.data.length);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  useEffect(() => {
    fetchname();
  }, [LoginUser, AdminUser]);
  return (
    <div className="parent">
      <nav>
        <div className="side_menu" id="side_bar" style={sty}>
          <div className="menu_btn" id="menu_btn_2">
            <button onClick={() => setMenu((logo = logo))}>
              <img
                className="menu_image"
                src="data:image/png;base64,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"
              />
            </button>
          </div>
          <div className="logo_btn">
            {/* add logo here */}

            {/* <img className="logo" src={inter_job} /> */}
          </div>
          <div className="side_menu_list">
            <div className="visible_2 when_login">
              <div className="side_menu_svg_cont">
                <img
                  className="side_menu_svg_2 profile_img"
                  src="https://assets.interntheory.com/creative/default-images/guyProfile.jpg"
                />
              </div>
              <div className="side_menu_content_2">
                <h1 id="full_name"></h1>
                <p id="mobile_no"></p>
              </div>
            </div>

            <div className="visible after_login">
              <div className="side_menu_svg_cont">
                <svg
                  className="side_menu_svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  {/* zx */}
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                </svg>
              </div>

              <div className="side_menu_content">
                <NavLink to="/">
                  {" "}
                  <p
                    onClick={() => setMenu((logo = logo))}
                    style={{ color: "black" }}
                  >
                    Home
                  </p>
                </NavLink>
              </div>
            </div>
            <div className="visible when_login">
              <div className="side_menu_svg_cont">
                <svg
                  className="side_menu_svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
                </svg>
              </div>
              <div className="side_menu_content">
                <NavLink to="/dashboard">
                  <p
                    onClick={() => setMenu((logo = logo))}
                    style={{ color: "black" }}
                  >
                    Dashboard
                  </p>
                </NavLink>
              </div>
            </div>
            <div className="visible" style={{ display: "none" }}>
              <div className="side_menu_svg_cont">
                <svg
                  className="side_menu_svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                </svg>
              </div>
              <div className="side_menu_content">
                <p>Profile</p>
              </div>
            </div>
            <div className="visible">
              <div className="side_menu_svg_cont">
                <svg
                  className="side_menu_svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                </svg>
              </div>
              <div className="side_menu_content">
                <NavLink to="/internships">
                  <p
                    onClick={() => setMenu((logo = logo))}
                    style={{ color: "black" }}
                  >
                    Internships
                  </p>
                </NavLink>
              </div>
            </div>
            <div className="visible">
              <div className="side_menu_svg_cont">
                <svg
                  className="side_menu_svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
                </svg>
              </div>
              <div className="side_menu_content">
                <NavLink to="/jobs">
                  {" "}
                  <p
                    onClick={() => setMenu((logo = logo))}
                    style={{ color: "black" }}
                  >
                    Jobs
                  </p>
                </NavLink>
              </div>
            </div>
            <div className="visible" style={{ display: "none" }}>
              <div className="side_menu_svg_cont">
                <svg
                  className="side_menu_svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
                </svg>
              </div>
              <div className="side_menu_content" style={{ display: "none" }}>
                <p>Post Internship</p>
              </div>
            </div>
            <div className="visible">
              <div className="side_menu_svg_cont">
                <svg
                  className="side_menu_svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path>
                </svg>
              </div>
              <div className="side_menu_content">
                <NavLink to="/courses">
                  <p
                    onClick={() => setMenu((logo = logo))}
                    style={{ color: "black" }}
                  >
                    Courses
                  </p>
                </NavLink>

                <svg
                  className="drop_down"
                  id="drop_down_1"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                </svg>
                <svg
                  className="drop_up"
                  id="drop_up_1"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                </svg>
              </div>
            </div>
            <div id="div_1_1" className="hidden visible">
              <div className="side_menu_svg_cont"></div>
              <div className="side_menu_content">
                <p>Online Courses</p>
              </div>
            </div>
            <div
              id="div_1_2"
              className="hidden visible"
              style={{ display: "none" }}
            >
              <div className="side_menu_svg_cont"></div>
              <div className="side_menu_content">
                <p>Classroom Training</p>
              </div>
            </div>
            <div className="visible when_login">
              <div className="side_menu_svg_cont">
                <svg
                  className="side_menu_svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                </svg>
              </div>
              <div className="side_menu_content">
                <p>Transactions</p>
              </div>
            </div>
            <div className="visible">
              <div className="side_menu_svg_cont">
                <svg
                  className="side_menu_svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                </svg>
              </div>
              <div className="side_menu_content">
                <p>Contact Us</p>
              </div>
            </div>
            <div style={{ display: "none" }} className="visible">
              <div className="side_menu_svg_cont">
                <svg
                  className="side_menu_svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path>
                </svg>
              </div>
              <div className="side_menu_content">
                <p>Start Your Business Today</p>
              </div>
            </div>
            <div className="line_break"></div>
            <div className="visible after_login">
              <div className="side_menu_svg_cont">
                <svg
                  className="side_menu_svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"></path>
                </svg>
              </div>
              <div className="side_menu_content">
                <NavLink to="/signup">
                  {" "}
                  <p
                    onClick={() => setMenu((logo = logo))}
                    style={{ color: "black" }}
                  >
                    Register
                  </p>
                </NavLink>

                <svg
                  className="drop_down"
                  id="drop_down_2"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                </svg>
                <svg
                  className="drop_up"
                  id="drop_up_2"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                </svg>
              </div>
            </div>
            <div id="div_2_1" className="hidden visible">
              <div className="side_menu_svg_cont"></div>
              <div className="side_menu_content">
                <p>Company</p>
              </div>
            </div>
            <div id="div_2_2" className="hidden visible">
              <div className="side_menu_svg_cont"></div>
              <div className="side_menu_content">
                <p>Student</p>
              </div>
            </div>
            <div className="visible after_login">
              <div className="side_menu_svg_cont">
                <svg
                  className="side_menu_svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z"></path>
                </svg>
              </div>
              <div className="side_menu_content">
                <NavLink to="/login">
                  {" "}
                  <p
                    onClick={() => setMenu((logo = logo))}
                    style={{ color: "black" }}
                  >
                    Login
                  </p>
                </NavLink>

                <svg
                  className="drop_down"
                  id="drop_down_3"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                </svg>
                <svg
                  className="drop_up"
                  id="drop_up_3"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                </svg>
              </div>
            </div>
            <div
              id="div_3_1"
              className="hidden visible"
              style={{ display: "none" }}
              onclick="logIn()"
            >
              <div className="side_menu_svg_cont"></div>
              <div className="side_menu_content">
                <p>Company</p>
              </div>
            </div>
            <div id="div_3_2" className="hidden visible">
              <div className="side_menu_svg_cont"></div>
              <div className="side_menu_content">
                <p>Student</p>
              </div>
            </div>
            <div className="visible" style={{ display: "none" }}>
              <div className="side_menu_svg_cont">
                <svg
                  className="side_menu_svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path>
                </svg>
              </div>
              <div className="side_menu_content">
                <NavLink to="/changepassword">
                  {" "}
                  <p
                    onClick={() => setMenu((logo = logo))}
                    style={{ color: "black" }}
                  >
                    Change Password
                  </p>
                </NavLink>
              </div>
            </div>
            <div className="visible when_login">
              <div className="side_menu_svg_cont">
                <svg
                  className="side_menu_svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                </svg>
              </div>
              <div className="side_menu_content" onClick={logout}>
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>

        <div className="menu_btn" id="menu_btn" style={stn}>
          <button onClick={() => setMenu((logo = !logo))}>
            <img
              className="menu_image"
              src="data:image/png;base64,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"
            />
          </button>
        </div>
        <div className="logo_btn" id="logo_btn" style={stn}>
          {/* add logo here */}

          {/* <img onClick={homepage} className="logo" src={inter_job} /> */}
        </div>
        <div className="sign_btn after_login">
          <NavLink to="/login">
            <button className="butt">{name ? name : "signup"}</button>
          </NavLink>
        </div>

        <div className="cart_btn when_login new_right">
          <NavLink to="/profile">
            {" "}
            <img
              className="cart_image profile_img"
              src="https://assets.interntheory.com/creative/default-images/guyProfile.jpg"
            />
          </NavLink>
        </div>
        <div className="cart_btn">
          <NavLink to="/cart">
            <div>
              <img
                className="cart_image"
                src="data:image/jpeg;base64,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"
              />
            </div>
          </NavLink>

          <div className="total" id="total">
            {cartlength}
          </div>
        </div>
        <div className="cart_btn when_login new_left">
          <svg
            className="cart_image"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
          </svg>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
