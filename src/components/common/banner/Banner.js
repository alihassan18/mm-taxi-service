import React from "react";

const Banner = ({
  title,
  headingLine1,
  headingLine2,
  descriptionLine1,
  descriptionLine2,
}) => {
  return (
    <div>
      <section className="page-header">
        <div className="page-header-shape"></div>
        <div className="container">
          <div className="page-header-info">
            <h4>{title}</h4>
            <h2>
              {headingLine1}
              <br />
              {headingLine2}
            </h2>
            <p className="">
              {descriptionLine1}
              <br />
              {descriptionLine2}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
