import React, { useState } from "react";
import IconClose from "../images/icon-close.svg";
import IconHamburger from "../images/icon-hamburger.svg";

const NavButton = () => {
    const [toggleButton, setToggleButton] = useState(false)

    const onToggle = () => {
        setToggleButton(!toggleButton)
    }

  return (
    <>
    <button onClick={onToggle} className="mobile-nav-icon" aria-controls="primary-navigation" aria-expanded="false">
      {toggleButton ? <><div ><img className="icon-close" src={IconClose} alt="" aria-hidden="true"/><nav className="mobile-navigation" id="mobile-navigation">
     <ul className="nav-list">
       <li>
         <a href="Pricing">Pricing</a>
       </li>
       <li>
         <a href="Product">Product</a>
       </li>
       <li>
         <a href="About">About Us</a>
       </li>
       <li>
         <a href="Career">Career</a>
       </li>
       <li>
         <a href="Community">Community</a>
       </li>
     </ul>
   </nav></div></> : <img className="icon-hamburger" src={IconHamburger} alt="" aria-hidden="true" /> }
      <span className="visually-hidden">Menu</span>
    </button>
    
   </>
  );
};

export default NavButton;
