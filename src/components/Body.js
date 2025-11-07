import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

let listOfRestaurants = [
  {
    id: 1,
    name: "Meghna Food",
    cuisine: "Biriyani, North Indian, Asian",
    photo:
    "https://3.bp.blogspot.com/-6SiPWsVZolw/UAfhKjllAlI/AAAAAAAAAOQ/79NRiFpqPKo/s1600/Chicken_Biryani.jpg",
  
    rating: 4.3,
    deliveryTime: "30 Minutes",
  },
  {
    id: 2,
    name: "Hotel Taj",
    cuisine: "Chicken Biriyani, North Indian, Asian",
    photo:
    "https://www.mashed.com/img/gallery/kfc-buffet-locations-do-still-exist-heres-where-to-find-them/l-intro-1688650239.jpg",
    rating: 4.1,
    deliveryTime: "32 Minutes",
  },
  
     {
      id:3,
        resname: "Green Leaf",
        cuisine: "Pure Veg, Thali, Gujarati",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dfll6fkkq1g5kmyb2bhk",
        rating: "4.5",
        deliveryTime: "35 Minutes",
      },
  
    {
      id:4,
        resname: "Juicy Burgers",
        cuisine: "Burgers, Wraps, Beverages",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/azt0vgubsh7ekywjwbmm",
        rating: "4.3",
        deliveryTime: "28 Minutes",
      
    },
    
     { id:5,
        resname: "Madras Mess",
        cuisine: "South Indian, Non-Veg, Curry",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/s3tz8ax8nhyqf3nkljmn",
        rating: "4.4",
        deliveryTime: "37 Minutes",
      },
    
    
      {id:6,
        resname: "Urban Cafe",
        cuisine: "Cafe, Continental, Breakfast",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/tvnvkzzv8n0vxv7yzcjb",
        rating: "4.2",
        deliveryTime: "30 Minutes",
      },
    
    
];

const Body = () => {
  // useState to manage restaurant list
  const [restaurants, setRestaurants] = useState(listOfRestaurants);

  const filterTopRated = () => {
    const filteredList = listOfRestaurants.filter((b) => b.rating > 4.2);
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
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
