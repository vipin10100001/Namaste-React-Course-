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
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae4a6?auto=format&fit=crop&w=500&q=80",
      rating: "4.3",
    },
  },
  {
    type: "restaurant",
    data: {
      resname: "Hotel Taj",
      cuisine: "Chicken Biriyani, North Indian, Asian",
      photo:
        "https://images.unsplash.com/photo-1632827421651-69a7563c0e6e?auto=format&fit=crop&w=500&q=80",
      rating: "4.1",
    },
  },
  {
    type: "restaurant",
    data: {
      resname: "Domino’s Pizza",
      cuisine: "Pizza, Italian, Fast Food",
      photo:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=500&q=80",
      rating: "4.5",
    },
  },
  {
    type: "restaurant",
    data: {
      resname: "KFC",
      cuisine: "Fried Chicken, Burgers, Fast Food",
      photo:
        "https://images.unsplash.com/photo-1606755962773-0a8b0a092ec3?auto=format&fit=crop&w=500&q=80",
      rating: "4.2",
    },
  },
  {
    type: "restaurant",
    data: {
      resname: "China Town",
      cuisine: "Chinese, Asian, Noodles, Dumplings",
      photo:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80",
      rating: "4.0",
    },
  },
  {
    type: "restaurant",
    data: {
      resname: "Barbeque Nation",
      cuisine: "Grill, Buffet, North Indian",
      photo:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80",
      rating: "4.4",
    },
  },
  {
    type: "restaurant",
    data: {
      resname: "Subway",
      cuisine: "Healthy, Sandwich, Fast Food",
      photo:
        "https://images.unsplash.com/photo-1601924582971-cf7d9f3a01ed?auto=format&fit=crop&w=500&q=80",
      rating: "4.1",
    },
  },
  {
    type: "restaurant",
    data: {
      resname: "The Pasta Bowl Company",
      cuisine: "Italian, Continental, Salads",
      photo:
        "https://images.unsplash.com/photo-1603133872878-684f1b27b4e9?auto=format&fit=crop&w=500&q=80",
      rating: "4.6",
    },
  },
  {
    type: "restaurant",
    data: {
      resname: "Burger King",
      cuisine: "Burgers, Fries, Beverages",
      photo:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80",
      rating: "4.3",
    },
  },
  {
    type: "restaurant",
    data: {
      resname: "Sagar Ratna",
      cuisine: "South Indian, Vegetarian, Dosa",
      photo:
        "https://images.unsplash.com/photo-1640601866401-8ffccbb7f3f1?auto=format&fit=crop&w=500&q=80",
      rating: "4.2",
    },
  },
  {
    type: "restaurant",
    data: {
      resname: "Royal Bakers",
      cuisine: "Bakery, Snacks, Desserts",
      photo:
        "https://images.unsplash.com/photo-1605475128023-439b7bca2c30?auto=format&fit=crop&w=500&q=80",
      rating: "4.5",
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
