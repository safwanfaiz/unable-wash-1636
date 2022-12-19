import { GET_PRODUCTS_COMPANY } from "../Redux/App/action";

 import "./CoursePage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CourseCard } from "./CourseCard";
// import axios from "axios";
export default function CoursePage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AppReducer.products);
  useEffect(() => {
   if(data.length===0){
    dispatch(GET_PRODUCTS_COMPANY())
   }}, []);
  return (
    <div className="c-container">
      <div className="c-wrapper">
        <div className="img-container">
          <img
            className="c-img"
            src="https://assets.interntheory.com/creative/courses/listpage/Course-banner1.png"
            alt="Add"
          />
        </div>
        <div className="c-body-container">
          <div className="c-body-wrapper">
            <div className="c-body-texts">
              <h6 className="c-heading">Certified Online Courses</h6>
              <h6 className="c-body-para">
                Upgrade your skills with Intern Theory's online learning
                platform. Enrol for any certified online courses and get a step
                ahead of competition. Select from a range of skill based online
                courses and kickstart your career.
              </h6>
            </div>
            <div className="caurse-card-wrapper">
              {data.length >=0 && data.map((item)=> 
               <CourseCard key={item.id} data={item}  />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}