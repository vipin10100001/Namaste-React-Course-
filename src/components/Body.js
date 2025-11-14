import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockdata";
import Shimmer from "./Shimmer";

function Body() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchtext,setSearchtext]=useState(" ");

  useEffect(() => {
   
    const fetchMockData = () => {
      setTimeout(() => {
        setRestaurants(resObj); 
        setLoading(false);
      }, 1000); 
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
      <input
        type="text"
        className="search-box"
        value={searchtext}
        onChange={(e) => setSearchtext(e.target.value)}
      />
    
      <button
        className="srch-btn"
        onClick={() => {
          const filtered = resObj.filter((r) =>
            r.data.name.toLowerCase().includes(searchtext.toLowerCase())
          );
          setRestaurants(filtered);
        }}
      >
        Search
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
