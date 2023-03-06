import React, {useState, useEffect} from "react";
import Ndata from "./Ndata";

const NewArrCard = () => {
  const [numOfElements, setNumOfElements] = useState(4); 

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 810) {
      // for screens less than 768px wide, render 2 elements
      setNumOfElements(2);
    } else if (width < 1020) {
      // for screens between 768px and 991px wide, render 3 elements
      setNumOfElements(3);
    } else if (width < 1230) {
      // for screens between 768px and 991px wide, render 3 elements
      setNumOfElements(4);
    } else if (width < 1300) {
      setNumOfElements(5);
    } else {
      // for screens larger than 992px, render 4 elements
      setNumOfElements(6);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // call handleResize() initially to set the default number of elements
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div id="new-arrs" className="content flexbox product">
        {Ndata.slice(0, numOfElements).map((val, index) => {
          return (
            <div className="box" key={index}>
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
              <h4>{val.name}</h4>
              <span>{val.price}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewArrCard;
