import React, { useEffect, useState } from "react";
import "./style.css";
import WrapperCard from "./WrapperCard";

const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa-solid fa-truck-fast"></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fa-solid fa-id-card"></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fa-solid fa-shield"></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fa-solid fa-headset"></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];

  const [grid, setGrid] = useState("grid-4");

 

  function handleResize() {
    if (window.innerWidth < 550) {
        setGrid("grid-1")
    } else if (window.innerWidth < 900) {
        setGrid("grid-2");
      } else {
        setGrid("grid-4");
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
      <section className="wrapper background">
        <div className={`container ${grid}`}>
          {data.map((val, index) => {
            return (
              <>
                <WrapperCard card={val} key={index} />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
