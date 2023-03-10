import React, { useState } from "react";
import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";

import "./Header.css";

const Header = ({ cartItem }) => {

  const [mobileMenu, setMobileMenu] = useState(false);
  

  const navbarHandler = () => {
    setMobileMenu(mobileMenu => !mobileMenu)
  }

  return (
    <>
      <Head />
      <Search cartItems={cartItem} onToggleNavbar={navbarHandler} mobileMenu={ mobileMenu } />
      <Navbar mobileMenu={ mobileMenu } />
    </>
  );
};

export default Header;
