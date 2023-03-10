import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Search = ({ cartItems, onToggleNavbar, mobileMenu }) => {

  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", this.window.scrollY > 100);
  });

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  function handleResize() {
    if (window.innerWidth > 1110) {
      setIsSmallScreen(false);

    } else {
      setIsSmallScreen(true);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <section className="search">
        <div className="container c_flex">
          {isSmallScreen && (<div className="f_flex left width">
            
            <button
              className="toggle"
              onClick={onToggleNavbar /*(!mobileMenu) */}
            >
              {mobileMenu ? (
                <i className="fas fa-times icon-style home-btn"></i>
              ) : (
                <i className="fa-solid fa-bars icon-style"></i>
              )}
            </button>
            <i className="fa fa-search icon-style"></i>
          </div>
          )}

          <div className="logo width">
            <img src={logo} alt="" />
          </div>

          {!isSmallScreen && (
            <div className="search-box f_flex">
              <i className="fa fa-search"></i>
              <input type="text" placeholder="Find your product..." />
            </div>
          )}

          <div className="f_flex right width">
            <i className="fa fa-user icon-style"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-style"></i>
                {cartItems.length > 0 && (
                  <span>{!isSmallScreen && cartItems.length}</span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
