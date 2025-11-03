

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

const RestuarantCard=(props) =>{
  console.log(props);
  return (
<div className="res-card">
        <h3>Meghna Foods</h3>
        <img className="res-logo"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJivCCXW_14iTjVaacn0ZXVVKG7EMv1Oteg&s" />

        <h3 style={{backgroundColor:"red"}}>Biriyani , North Indian , Asian </h3>
        <h4>4.3</h4>
        <h5>{console.log("lol this is h5")}</h5>
        <p>30 Minutes</p>
        
</div>

  )
}


const Body=() =>{
  return (
    <div className="body">

           <div className="Search">Search

                  <div className="res-container">
                    
                  <RestuarantCard  res-name="Meghna Food" cuisine="Biriyani , North Indian , Asian "/>
                  

                    </div>
          </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img   className="logo" src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5296974.png"  />
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
