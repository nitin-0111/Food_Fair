import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isTrending && <span>Trending </span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            alt={item?.attributes.title}
            className="mainImg"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img2?.data?.attributes?.url
            }
            className="secImg"
          />
        </div>
        <div className="bottom">
          <h2> {item?.attributes.title}</h2>
          <div className="price">
            <h3>{item?.attributes.place}</h3>
            <h4> ₹{item?.attributes.price}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
