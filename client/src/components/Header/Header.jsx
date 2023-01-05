import React from "react";
import "./Header.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
 
  
  return (
    <>
      <div className="navbar">
        <div className="main-logo">
          <h3>
            <NavLink to="/" data-text="hasnainstore...">
              hasnainstore...
            </NavLink>
          </h3>
        </div>
        
            <div className={show ? "search active" : "search"}>
              <input type="search" placeholder="search product here..." />
              <button>search</button>
            </div>
            <div className={show ? "links active" :"links"}>
              <ul>
                <li>
                  <NavLink to="/">home</NavLink>
                </li>
                <li>
                  <NavLink to="/Products">products</NavLink>
                </li>
                <li>
                  <NavLink to="/login">sign in</NavLink>
                </li>
                <li>
                  <NavLink to="/register">sign up</NavLink>
                </li>
              </ul>
            </div>
        
        <div className="navbar-icons">
         <span onClick={toggle}>{show ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}</span>
        </div>
      </div>
    </>
  );
};

export default Header;
