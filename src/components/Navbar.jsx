import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="navbarBody">
      <div className="items" id='logo' onClick={()=> navigate('/')}>HUNGRYY</div>

      <div className="items searchWrapper">
        {/* <i className="fa-solid fa-magnifying-glass icon"></i> */}
        <input type="text" placeholder="search" className="searchInput" />
      </div>

      <div className="items"  >
        <i className="fa-solid fa-user" onClick={()=> navigate('/signup')}></i> <span onClick={()=> navigate('/signup')}>sign In</span>
      </div>
    </div>
  );
};

export default Navbar;

