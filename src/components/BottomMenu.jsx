import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BottomMenu.css";

function BottomMenu() {
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
    { label: "Me", iconClass: <i style={{color: "green"}} className="fa-solid fa-user fa-xs"></i> },
    { label: "Projects", iconClass: <i style={{color: "light-green"}} className="fa-solid fa-briefcase fa-xs"></i> },
    { label: "Skills", iconClass: <i style={{color: "purple"}} className="fa-solid fa-layer-group fa-xs"></i> },
    { label: "Certify", iconClass: <i style={{color: "orange"}} class="fa-solid fa-certificate fa-xs"></i> },
    { label: "Contact", iconClass: <i style={{color: "brown"}} className="fa-solid fa-id-badge fa-xs"></i> },
  ];
  return (
    <>
      <div className="container">
        <div className="menu">
          {menuItems.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="buttons"
              onClick={() => handleMenuClick(item.label)}
            >
              <div className="icon">{item.iconClass}</div>
              <div className="label">{item.label}</div>
            </a>
          ))}
        </div>

        {/* <div className="search-bar">
          <input type="text" placeholder="Ask me anything..." />
          <button>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div> */}
      </div>
    </>
  );
}

export default BottomMenu;