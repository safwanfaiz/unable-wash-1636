import { useDispatch } from "react-redux";
import "./CourseCard.css";
import { ADD_DATA_TO_CART } from "../Redux/App/action";

export const CourseCard =({ data }) =>{
  const dispatch = useDispatch();
  const handleAddToCart = (data) => {
    dispatch(ADD_DATA_TO_CART(data)).then((e)=>{});
  };
  return (
    <>
      <div className="c-card-container">
        <div className="c-card-wrapper">
          <div className="c-card-img-box">
            <img src={data.image} alt="" className="c-card-img" />
          </div>
          <div className="c-card-desc">
            <h2 className="caurse-name">{data.name}</h2>
            <p className="curse-desc">{data.desc}</p>
          </div>
        </div>
        <div className="c-card-price-wrapper">
          <div className="c-card-odlprice">
            <span className="c-oldprice">₹{data.oldPrice}</span>
            <p className="c-card-price">{data.newPrice}₹</p>
          </div>
          <p className="c-card-emi">{data.emi}</p>
          <div className="c-card-btn">
            <button className="c-btn c-btn-light">KNOW MORE</button>
            <button onClick={()=>handleAddToCart(data)} className="c-btn">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
}