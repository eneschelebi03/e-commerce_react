import React from "react";
import Heading from "../../common/heading/Heading";
import TopCatCard from "./TopCatCard";

const TopCate = () => {
  const icon = <i className="fa fa-border-all"></i>;

  return (
    <>
      <section className="topCat background">
        <div className="container">
          <Heading icon={icon} heading="Top Categories"/>
          <TopCatCard />
        </div>
      </section>
    </>
  );
};

export default TopCate;
