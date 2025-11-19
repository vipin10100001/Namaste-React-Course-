import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
  if (!resData?.info) return null;

  const {
    id,
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    sla,
    costForTwo,
  } = resData.info;

  return (
    <Link
      to={`/restaurant/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="res-card">
        <img
          className="res-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="restaurant"
        />

        <h3>{name}</h3>
        <p>{cuisines?.join(", ")}</p>

        <p>⭐ {avgRating}</p>
        <p>{sla?.slaString}</p>
        <p>₹{costForTwo / 100} for two</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
