

/**

Header
Logo
Nav Items
Body
Search
RestaurantContainer
RestaurantCard
 - Img
 - Name of Res, Star Rating, cuisine, delery tie
Footer
Copyright
Links
Address
Contact */


import React from "react";
import ReactDOM from "react-dom/client";

const RestaurantCard = (props) => {
  const { resname, cuisine, photo, rating } = props;
  return (
    <div className="res-card">
      <h3>{resname}</h3>
      <img className="res-logo" src={photo} alt={resname} />
      <h3 style={{ backgroundColor: "red" }}>{cuisine}</h3>
      <h4>{rating} ⭐</h4>
      <p>30 Minutes</p>
    </div>
  );
};

const resObj = [
  {
    type: "restaurant",
    data: {
      resname: "Meghna Food",
      cuisine: "Biriyani, North Indian, Asian",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJivCCXW_14iTjVaacn0ZXVVKG7EMv1Oteg&s",
      rating: "4.3",
    },
  },
  {
    type: "restaurant",
    data: {
      resname: "Hotel Taj",
      cuisine: "Chicken Biriyani, North Indian, Asian",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7eQnWra28mt4EcXQRE23Q2s9X-Z1ivWCVPw&s",
      rating: "4.1",
    },
  },
  {
    type: "restaurant",
    data: {
      resname: "Hotel Taj",
      cuisine: "Chicken Biriyani, North Indian, Asian",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7eQnWra28mt4EcXQRE23Q2s9X-Z1ivWCVPw&s",
      rating: "4.1",
    },
  },

  {
    type: "restaurant",
    data: {
      resname: "Hotel Taj",
      cuisine: "Chicken Biriyani, North Indian, Asian",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7eQnWra28mt4EcXQRE23Q2s9X-Z1ivWCVPw&s",
      rating: "4.1",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant.data} />
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5296974.png"
          alt="App Logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
