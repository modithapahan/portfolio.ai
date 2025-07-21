import React, { useState, useEffect } from "react";
import "../styles/NavMenu.css";
import ProfileCard from "./ProfileCard";
import { useNavigate } from "react-router-dom";

function NavMenu() {
  const [searchText, setSearchText] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (label) => {
    if (label === "Me") {
      navigate("/profile", { state: { autoQuery: "Who are you?" } });
    } else {
      setShowProfile(false);
      const element = document.querySelector(`#${label.toLowerCase()}`);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: "Me", iconClass: <i style={{color: "green"}} class="fa-solid fa-face-grin-wide"></i> },
    { label: "Projects", iconClass: <i style={{color: "gray"}} className="fa-solid fa-briefcase"></i> },
    { label: "Skills", iconClass: <i style={{color: "purple"}} className="fa-solid fa-layer-group"></i> },
    { label: "Contact", iconClass: <i style={{color: "brown"}} className="fa-solid fa-id-badge"></i> },
  ];

  return (
    <>
      <div className="nav-container">
        <div className="search-bar">
          <input type="text" placeholder="Ask me anything..." />
          <button>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="menu-buttons" style={{ position: "relative" }}>
          {menuItems.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="menu-button"
              onClick={()=> handleMenuClick(item.label)}
            >
              <div className="icon">{item.iconClass}</div>
              <div className="label">{item.label}</div>
            </a>
          ))}
        </div>
      </div>

      {showProfile && <ProfileCard />}
    </>
  );
}

export default NavMenu;