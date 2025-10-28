

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

const RestuarantCard=() =>{
  return (
<div className="res-card">
        <h3>Meghna Foods</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJivCCXW_14iTjVaacn0ZXVVKG7EMv1Oteg&s" />
</div>

  )
}


const Body=() =>{
  return (
    <div className="body">

           <div className="Search">Search

                  <div className="res-container">
                   
                  <RestuarantCard />

                    </div>
          </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img  className="logo" src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5296974.png"  />
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
