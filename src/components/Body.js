import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockdata";
import Shimmer from "./Shimmer";

function Body() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch using mock data
    const fetchMockData = () => {
      setTimeout(() => {
        setRestaurants(resObj); 
        setLoading(false);
      }, 1000); // just for loading effect
    };

    
    fetchMockData();
  }, []);



  const filterTopRated = () => {
    const filteredList = resObj.filter(
      (b) => parseFloat(b.data.rating) > 4.3
    );
    setRestaurants(filteredList);
  };

  const resetFilter = () => {
    setRestaurants(resObj);
  };

  if (loading) {
    return <Shimmer />;
  }

  return (

    
    <div className="body">
      <h2 className="title">🍽 Restaurants in Bangalore</h2>

      <div className="search">
      <input type="text"  />
      <button>Search</button>
      
      </div>

      <div className="filter">
        <button className="filter-btn" onClick={filterTopRated}>
          ⭐ Top Rated (4.3+)
        </button>
        <button className="filter-btn" onClick={resetFilter}>
          🔄 Reset
        </button>
      </div>

      <div className="res-container">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant.data} />
        ))}
      </div>
    </div>
  );
}

export default Body;
