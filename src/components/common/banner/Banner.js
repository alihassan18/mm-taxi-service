import React from "react";

const Banner = ({ title }) => {
  return (
    <div>
      <section className="page-header">
        <div className="page-header-shape"></div>
        <div className="container">
          <div className="page-header-info">
            <h4>{title}</h4>
            <h2>
              Feel your journey <br /> with <span>M&M!</span>
            </h2>
            <p>
              Everything your taxi business <br />
              needs is already here!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
