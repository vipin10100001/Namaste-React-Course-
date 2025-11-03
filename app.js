

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
  const {resname,photo,cuisine,rating}=props;
  console.log(props); 
  return (
<div className="res-card">
        <h3>{props.resname}</h3>
        <img className="res-logo"  src={props.photo} />


        <h3 style={{backgroundColor:"red"}}>{props.cuisine}</h3>
        <h4>{props.rating}</h4>
        
        <p>30 Minutes</p>
         
</div>

  )
}


const Body=() =>{
  return (
    <div className="body">

           <div className="Search">Search

                  <div className="res-container">
                    
                  <RestuarantCard  resname="Meghna Food" cuisine="Biriyani , North Indian , Asian " photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:AN d9GcRpJivCCXW_14iTjVaacn0ZXVVKG7EMv1Oteg&s" rating="4.3" />
                  <RestuarantCard  resname="Hotel Taj" cuisine=" Chicken Biriyani , North Indian , Asian " photo ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7eQnWra28mt4EcXQRE23Q2s9X-Z1ivWCVPw&s" rating ="4.1"/>
                  

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
