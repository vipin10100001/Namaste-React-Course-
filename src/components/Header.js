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

  export default Header;