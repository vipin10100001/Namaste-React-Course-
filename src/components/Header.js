import { LOGO_URL } from "../utils/constant";
import { use, useState } from "react";

const Header = () => {
  const [state,setState]=useState("Login");
function handClick(){
  if(state=="Login"){
    setState("Logout");
  }
  else setState("Login");
}
  const btnname="Login";
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="App Logo"
          />
        </div>
  
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login-btn" onClick={handClick}>{state} </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;