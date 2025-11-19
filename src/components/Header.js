import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const Header = () => {

//console.log("Header component")

  const [state,setState]=useState("Login");

  useEffect(()=>{
    console.log("useEffect is called");
  },[state]);


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
            <li> <Link to="/">Home</Link></li>
            <li> <Link to ="/About"> About Us </Link>   </li>
            <li><Link to="/Contact">Contact Us </Link></li>
            <li>Cart</li>
            <button className="login-btn" onClick={handClick}>{state} </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;