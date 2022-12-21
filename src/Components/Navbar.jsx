
import React, {  useEffect, useState } from "react";
import "./navbar.css";
import {  Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import inter_job from "../Assets/experianceshalaV.jpg";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Button, HStack, Image, Text, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoClose } from 'react-icons/io5';
import { HiShoppingCart } from 'react-icons/hi2';
import UseProfile from "../Hooks/UseProfile";
import { GiPowerButton } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { GET_CART_DATA } from "../Redux/App/action";
function Navbar(props) {
  const dispatch = useDispatch();
  const CARTDATA = useSelector((state) => state.AppReducer.cart);
  useEffect(() => {
   if(CARTDATA.length>=0){
    dispatch(GET_CART_DATA())
   }}, []);
  const {avatar, displayName, userEmail,userPhoto, HandleLogOut} =UseProfile()
  let logo = false;
  let sty;
  let stn;
 
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
  
 console.log(avatar,"avatar")
  return (
    <div className="parent">
      
      <nav className="nav-bar">
        <div className="side_menu" id="side_bar" style={sty}>
          <Box pl={5} pt={1}  >

              <Box  variant='ghost' w={30} h={30} _hover={{border:" 1px solid tomato",borderRadius:"50%"}} _active={{transform: "rotate(10deg)"}}   mt={2} onClick={() => setMenu((logo))}>
            <IoClose color="red"  size={30} /></Box>
          
          </Box>
          <div className="logo_btn">
            {/* add logo here */}

            <NavLink to={"/"}><img className="logo" src={inter_job}  alt={"ExperienceShala"}/></NavLink>
          </div>
          <div className="side_menu_list">
            <div className="visible_2 when_login">
              <div className="side_menu_svg_cont">
                 {avatar?<Image className="side_menu_svg_2 profile_img" src={userPhoto} alt={displayName}/>
                 :<img
                  className="side_menu_svg_2 profile_img"
                  src="https://assets.interntheory.com/creative/default-images/guyProfile.jpg" alt="side_menu"
                />}
              </div>
             
              <div className="side_menu_content_2">
                {avatar?<h1 id="full_name">{displayName}</h1>:""}
                {avatar?<p id="mobile_no">{userEmail}</p>:""} </div>
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
                    onClick={() => setMenu(logo = logo)}
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
                <NavLink to="/admin">
                  <p
                    onClick={() => setMenu(logo)}
                    style={{ color: "black" }}
                  >
                    Company
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
                    onClick={() => setMenu(logo)}
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
                    onClick={() => setMenu(logo)}
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
                <NavLink to="/course">
                  <p
                    onClick={() => setMenu(logo)}
                    style={{ color: "black" }}
                  >
                    Courses
                  </p>
                </NavLink>
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
           

              <div >
              <Accordion w={170} borderColor={"#fff"} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton >
                    <Box as="span" flex='1' >
                      <HStack >
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
                        <Text pl={7}>
                        Register
                        </Text>
                      </HStack>
                   
                    </Box>
                    <Box pl={10}  >

                    
                    <AccordionIcon  />
                    </Box>
                  </AccordionButton>
                </h2>
                <NavLink to={"/register/company"}>
                <AccordionPanel pl={16} color={"blackAlpha.900"} fontSize={"sm"} fontWeight={"15px"} pb={4}>
                  Company
                </AccordionPanel>
                </NavLink>
                <NavLink to={"/register/student"}>
                <AccordionPanel pl={16} color={"blackAlpha.900"} fontSize={"sm"} fontWeight={"15px"} pb={4}>
                   Student
                </AccordionPanel>
                </NavLink>
              </AccordionItem>
            </Accordion>
                </div>

                <Accordion w={170} borderColor={"#fff"} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton >
                    <Box as="span" flex='1' >
                      <HStack >
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
                          
                        <Text pl={7}>
                        Login
                        </Text>
                      </HStack>
                   
                    </Box>
                    <Box pl={10}  >

                    
                    <AccordionIcon  />
                    </Box>
                  </AccordionButton>
                </h2>
                <NavLink to={"/login/company"}>
                <AccordionPanel pl={16} color={"blackAlpha.900"} fontSize={"sm"} fontWeight={"15px"} pb={4}>
                   Company
                </AccordionPanel>
                </NavLink>
                <NavLink to={"/login/student"}>
                <AccordionPanel className="side_menu_content" pl={16} color={"blackAlpha.900"} fontSize={"sm"} fontWeight={"15px"} pb={4}>
                  Student
                </AccordionPanel>
                </NavLink>
              </AccordionItem>
            </Accordion>

            <div
              id="div_3_1"
              className="hidden visible"
              style={{ display: "none" }}
              onClick="logIn()"
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
              <div className="side_menu_content" >
                
              {avatar?<HStack   alignItems={"center"} justifyContent={"center"}><Text as={"b"} color={"red.500"} fontSize={"2xl"} >Logout</Text><Link to={"/"}> <Button   bg={"gray.300"} color={"red.500"}  onClick={HandleLogOut}> <GiPowerButton size={20} color={"red.500"}/></Button></Link></HStack>:""}
              </div>
            </div>
          </div>
        </div>

        <div className="menu_btn" id="menu_btn" style={stn}>
          <Button onClick={() => setMenu((logo = !logo))}>
            <HamburgerIcon/>
          </Button>
        </div>
        <div className="logo_btn" id="logo_btn" style={stn}>
          {/* add logo here */}

          <NavLink to={"/"}><img className="logo" src={inter_job}  alt={"ExperienceShala"}/></NavLink>
        </div>
        {avatar?"":
        <div className="sign_btn after_login">
        <NavLink to="/login/company">
          <button className="butt">signup</button>
        </NavLink>
      </div>}
            
        <div className="cart_btn when_login new_right">
          <NavLink to="/profile">
          {avatar?<Image mt={1} w={9} borderRadius={"50%"} src={userPhoto} alt={displayName}/>:""}

          </NavLink>
        </div>
        <div className="cart_btn">
          <NavLink to="/cart">
          <Box    variant='ghost'  _hover={{bg:" rgba(102, 102, 102, 0.2)",borderRadius:"50%"}} mt={2}  _active={{transform: "rotate(15deg)"}}    >
             <HiShoppingCart color="black" size={30}/>
           </Box>
            
          </NavLink>

          <div className="total" id="total">
            {CARTDATA.length}
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
