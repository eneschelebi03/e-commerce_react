import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import Slider from "./Slider";
import "./Home.css";
const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  function handleResize() {
    if (window.innerWidth < 1200) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
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
      <section className="home">
        <div className="container d_flex">
          {!isSmallScreen && <Categories />}
          <Slider isSmallScreen={isSmallScreen} />
        </div>
      </section>
    </>
  );
};

export default Home;
