import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockdata";

const Body = () => {

  const [restaurants, setRestaurants] = useState(resObj);

  const filterTopRated = () => {
    const filteredList = resObj.filter(
      (b) => parseFloat(b.data.rating) > 4.2
    );
    setRestaurants(filteredList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
