import React from "react";
import ReactDOM from "react-dom/client"; // use correct import for React 18+

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/009/291/628/original/restaurant-logo-design-vector.jpg"
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

const RestaurantCard = ({ resName, cusine }) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/ed859a04-8f52-434b-aca9-6de31d0247fd_95228.JPG"
        alt="img"
      />
      <h3>{resName}</h3>
      <h4>{cusine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minits</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="Meghana Foods" cusine="Biryani, NorthIndian" />
        <RestaurantCard resName="Kfc" cusine="south indian" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

//component inside other component is called Component Composition
