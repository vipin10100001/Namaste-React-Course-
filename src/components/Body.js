import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function Body() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://namastedev.com/api/v1/listRestaurants"
        );
        const json = await response.json();

        const list =
          json?.data?.data?.cards?.[1]?.card?.card?.gridElements
            ?.infoWithStyle?.restaurants || [];

        setRestaurants(list);
        setFilteredRestaurants(list);
      } catch (error) {
        console.error("Error fetching Restaurant List:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    const filter = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filter);
  };

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="search-box">
        <input
          type="text"
          value={searchText}
          placeholder="Search restaurants..."
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="srch-btn">
          Search
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant}
            />
          ))
        ) : (
          <h3>No restaurants found</h3>
        )}
      </div>
    </div>
  );
}

export default Body;
