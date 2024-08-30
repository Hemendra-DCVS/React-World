import React, { useState, useRef } from "react";
import './Styling.css'; 

function Dropdown({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);


  // Toggle dropdown on hover
  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Clearing timeout if mouse re-enters
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 500); // short delay
    setTimeoutId(id);
  };

  // Close dropdown on item click
  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div 
      className={`dropdown ${isOpen ? "open" : ""}`}
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      
    >
      <button className="dropdown-button">Hover me</button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index} onClick={handleItemClick} className="dropdown-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
