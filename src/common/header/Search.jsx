import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Backdrop from "../helpers/Bakcdrop";

const Search = (props) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", this.window.scrollY > 100);
  });

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);

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

  function handleMobileSearch() {
    setIsMobileSearchActive((isMobileSearchActive) => !isMobileSearchActive);
  }

  function handleToggles() {
    props.onHideNavbar();

    if (isMobileSearchActive) {
      setIsMobileSearchActive(false)
    }
  }

  return (
    <>
      <section className="search" onClick={handleToggles}>
        <div className="container c_flex">
          {isSmallScreen && (
            <div className="f_flex left width">
              <button
                className="toggle"
                onClick={props.onToggleNavbar /*(!mobileMenu) */}
              >
                {props.mobileMenu ? (
                  <i className="fas fa-times icon-style home-btn"></i>
                ) : (
                  <i className="fa-solid fa-bars icon-style"></i>
                )}
              </button>
              <i
                className="fa fa-search icon-style"
                onClick={handleMobileSearch}
              ></i>
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

          {isSmallScreen &&
            isMobileSearchActive &&
            ReactDOM.createPortal(
              <Backdrop onToggle={handleMobileSearch} />,
              document.getElementById("backdrop-root")
            )}
          {isSmallScreen &&
            ReactDOM.createPortal(
              <div
                className={`search-box mobile-view ${
                  isMobileSearchActive && "active"
                } f_flex`}
              >
                <div className="search-container d_flex">
                  <input type="text" placeholder="Find your product..." />
                  <i className="fa fa-search"></i>
                </div>
              </div>,
              document.getElementById("search-box-root")
            )}

          <div className="f_flex right width">
            <i className="fa fa-user icon-style"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-style"></i>
                {props.cartItems.length > 0 && (
                  <span>{!isSmallScreen && props.cartItems.length}</span>
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
