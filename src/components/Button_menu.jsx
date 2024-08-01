import React, { useState } from 'react';
import './css/Button_menu.css'


function ButtonMenu() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <div>
      <input
        className="checkbox"
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        placeholder='menu'
      />
      <label className="toggle" htmlFor="checkbox">
        <div className={`bar1 bars ${isChecked ? 'active' : ''}`}></div>
        <div className={`bar2 bars ${isChecked ? 'active' : ''}`}></div>
        <div className={`bar3 bars ${isChecked ? 'active' : ''}`}></div>
      </label>
      <div className={`sidebar ${isChecked ? 'active' : ''}`}>
        <ul>
          <li><a href="#about" onClick={handleToggle}>About</a></li>
          <li><a href="#projects" onClick={handleToggle}>Projects</a></li>
          <li><a href="#contact" onClick={handleToggle}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default ButtonMenu;