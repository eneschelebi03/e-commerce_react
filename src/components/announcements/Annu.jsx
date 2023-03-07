import React, { useEffect, useState } from "react";
import "./Announcement.css";

const Annu = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  function handleResize() {
    if (window.innerWidth < 768) {
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
      <section className="annouc background">
        <div className={`container ${isSmallScreen && "small-screen"} d_flex`}>
          <div className="img-small">
            <img
              src="./images/banner-1.png"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div className="img-big">
            <img
              src="./images/banner-2.png"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Annu;
