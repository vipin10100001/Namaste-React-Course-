import React from "react";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    sla,
    costForTwo
  } = resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/" +
          cloudinaryImageId
        }
        alt={name}
      />

      <h3>{name}</h3>
      <p>{cuisines?.join(", ")}</p>
      <p>⭐ {avgRating}</p>
      <p>{sla?.deliveryTime} Minutes</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
