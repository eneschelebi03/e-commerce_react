import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link, useLocation } from "react-router-dom";
import Categories from "../../components/mainpage/Categories";
import Backdrop from "../helpers/Bakcdrop";

const Navbar = (props) => {
  const [activeCategories, setActiveCategories] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const location = useLocation();

  function activateCategories() {
    if (window.innerWidth < 1200 || location.pathname !== "/") {
      setActiveCategories((activeCategories) => !activeCategories);
    }
  }

  function handleResize() {
    if (window.innerWidth >= 1200) {
      if (location.pathname === "/") {
        setActiveCategories(true);
      }
      setIsSmallScreen(false);
    } else {
      setActiveCategories(false);
      setIsSmallScreen(true);
    }

    if (window.innerWidth < 1111) {
      setIsNavbarHidden(true);
    } else {
      setIsNavbarHidden(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveCategories(false);
    } else {
      setActiveCategories(true);
    }
  }, [location.pathname]);

  if (props.mobileMenu && isNavbarHidden) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return (
    <>
      <header className={`header ${isNavbarHidden && "hidden"}`}>
        <div className="container d_flex">
          {!isNavbarHidden && (
            <div
              className={`category-btn ${activeCategories && "active"} d_flex`}
              onClick={activateCategories}
            >
              <span className="material-icons-round">menu</span>
              <h4>Categories</h4>
            </div>
          )}
          {!isNavbarHidden && (
            <Categories
              isActive={
                activeCategories && (isSmallScreen || location.pathname !== "/")
              }
            />
          )}
          {/* "nav-links__mobile-menu" : "link f_flex capitalize " */}

          {isNavbarHidden &&
            props.mobileMenu &&
            ReactDOM.createPortal(
              <Backdrop onToggle={props.onHideNavbar} />,
              document.getElementById("backdrop-root")
            )}
          <div className="nav-links">
            <ul
              onClick={props.onHideNavbar}
              className={
                isNavbarHidden
                  ? `nav-links__mobile-menu ${props.mobileMenu && "active"}`
                  : "link f_flex capitalize "
              }
            >
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/pages">pages</Link>
              </li>
              <li>
                <Link to="/user">user account</Link>
              </li>
              <li>
                <Link to="/vendor">vendor account</Link>
              </li>
              <li>
                <Link to="/track">track my order</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
