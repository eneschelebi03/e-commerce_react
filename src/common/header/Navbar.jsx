import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Categories from "../../components/mainpage/Categories";

const Navbar = ({mobileMenu}) => {
  const [activeCategories, setActiveCategories] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);


  function activateCategories() {
    if (window.innerWidth < 1200) {
      setActiveCategories(activeCategories => !activeCategories);
    }
  }

  function handleResize() {
    if (window.innerWidth > 1200) {
      setActiveCategories(true);
      setIsSmallScreen(false);
    }  else {
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
  }, []);


  return (
    <>
      <header className={`header ${isNavbarHidden && "hidden"}`}>
        <div className="container d_flex">
          {!isNavbarHidden && <div
            className={`category-btn ${activeCategories && "active"} d_flex`}
            onClick={activateCategories}
          >
            <span class="material-icons-round">menu</span>
            <h4>Categories</h4>
          </div>
          }

          {!isNavbarHidden && <Categories isActive={activeCategories && isSmallScreen} />}
          

          <div className="nav-links"
          >
            <ul className={mobileMenu ? "nav-links__mobile-menu" : "link f_flex capitalize "}>
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

