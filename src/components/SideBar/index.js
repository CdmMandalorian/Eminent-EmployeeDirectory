import React from "react";
import "./style.css";
import logo from '../../Assests/Images/2hUFTDv.png'

function SideBar({children}) {
  return (
    <nav className="d-flex bd-highlight">
         <div className="p-2 flex-fill bd-highlight">
         {children}
         <img src={logo} alt="Logo" className="img-fluid" />
        </div>
    </nav>
  );
}

export default SideBar;