import React, { useState } from "react";
import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";

import "./Header.css";

const Header = ({ cartItem }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navbarHandler = () => {
    setMobileMenu((mobileMenu) => !mobileMenu);
  };
  const hideNavbarHandler = () => {
    if (mobileMenu) {
      setMobileMenu(false);
    }
  };



  return (
    <>
      <Head />
      <Search
        cartItems={cartItem}
        onToggleNavbar={navbarHandler}
        mobileMenu={mobileMenu}
        onHideNavbar={hideNavbarHandler}
      />
      <Navbar
        mobileMenu={mobileMenu}
        onToggleNavbar={navbarHandler}
      />
    </>
  );
};

export default Header;
