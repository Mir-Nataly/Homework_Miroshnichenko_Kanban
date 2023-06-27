import React, { useState, useRef, useEffect } from "react";

import css from '../dropdown/Dropdown.css'

import UserMenu from '../../assets/user-menu.svg'

function Dropdown() {
  const container = useRef();
  const [dropdownState, setDropdownState] = useState({ open: false });

  const handleDropdownClick = () =>
    setDropdownState({ open: !dropdownState.open });

  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setDropdownState({ open: false });
       }
    };

 useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

 return () => document.removeEventListener("mousedown", handleClickOutside);
     }, []);

 return (
 <div className="css.choice">
      <button
        
        className={css.myBtn}
       
        onClick={handleDropdownClick}>
        <div className="btnIcon">
          <img src={UserMenu} alt='' className="css.fotoBackground"/>
        </div>
				
      </button>
      {dropdownState.open && (
          <div className={css.dropdown}>
            <ul>
              <li>Profile</li>
              <li>Log out</li>
            </ul>
          </div>
      )}
    </div>
 );
}

export default Dropdown




/* function Button() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


export default Button */