import React from "react";
import "../styles/NavMenu.css";

const menuItems = [
  { label: "Me", iconClass: <i class="fa-solid fa-user"></i>, link: "#me" },
  { label: "Projects", iconClass: <i class="fa-solid fa-briefcase"></i>, link: "#projects" },
  { label: "Skills", iconClass: <i class="fa-solid fa-layer-group"></i>, link: "#skills" },
  { label: "Contact", iconClass: <i class="fa-solid fa-id-badge"></i>, link: "#contact" },
];

function NavMenu() {

  return (
    <div className="nav-container">
      <div className="search-bar">
        <input type="text" placeholder="Ask me anything..." />
        <button>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="menu-buttons">
        {menuItems.map((item, index) => (
          <a href={item.link} key={index} className="menu-button">
            <div className="icon">{item.iconClass}</div>
            <div className="label">{item.label}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default NavMenu;
