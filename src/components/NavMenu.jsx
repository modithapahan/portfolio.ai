import React, { useEffect, useRef, useState } from "react";
import "../styles/NavMenu.css";

const menuItems = [
  { label: "Me", icon: "😊", link: "#me" },
  { label: "Projects", icon: "💼", link: "#projects" },
  { label: "Skills", icon: "🧠", link: "#skills" },
  { label: "Contact", icon: "📬", link: "#contact" },
];

function NavMenu() {
  const searchRef = useRef(null);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!searchRef.current) return;

      const rect = searchRef.current.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distance = Math.hypot(centerX - mouseX, centerY - mouseY);

      // Trigger blur if distance is below threshold
      setIsBlurred(distance < 150); // you can tweak this
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="nav-container">
      <div
        ref={searchRef}
        className={`search-bar ${isBlurred ? "blurred" : ""}`}
      >
        {/* <div
          ref={searchRef}
          className={`search-bar ${isBlurred ? "blurred" : ""}`}
        >
          <input type="text" placeholder="Ask me anything..." />
          <button>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div> */}
        <input type="text" placeholder="Ask me anything..." />
        <button>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="menu-buttons">
        {menuItems.map((item, index) => (
          <a href={item.link} key={index} className="menu-button">
            <div className="icon">{item.icon}</div>
            <div className="label">{item.label}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default NavMenu;
