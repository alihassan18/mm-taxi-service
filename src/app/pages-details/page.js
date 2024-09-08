import React from "react";
import Banner from "../../components/common/banner/Banner";
import DynamicScriptsLoader from "../../components/common/script/ScriptLoader";

function page() {
  return (
    <div>
      <DynamicScriptsLoader />
      <Banner title="SERVICES DETAILS!" />
      <section className="about-section padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-6">
              <div className="about-img">
                <img
                  className="about-img1"
                  src="assets/img/about-1.png"
                  alt="img"
                />
                <img
                  className="about-img2"
                  src="assets/img/about-2.png"
                  alt="img"
                />
                <figure className="round-text">
                  <img src="assets/img/experience-text-round.png" alt="img" />
                </figure>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="section-heading mb-40">
                <h4>
                  <span></span>About Our Company
                </h4>
                <h2>
                  Feel the difference and Relaxation with M&M Taxi Company!
                </h2>
                <p>
                  We successfully cope with tasks of varying complexity, provide
                  long-term guarantees and regularly master new technologies.
                  Our portfolio includes dozens of successfully completed
                  projects of houses of different storeys, with high–quality
                  finishes and good repairs. Book your taxi from anywhare today!
                </p>
              </div>
              <ul className="about-info">
                <li>
                  <img
                    className="owner-thumb"
                    src="assets/img/comment-1.png"
                    alt="thumb"
                  />
                  <div className="owner">
                    <h4>Founder - CEO</h4>
                    <img
                      className="signature"
                      src="assets/img/signature.png"
                      alt="signature"
                    />
                  </div>
                </li>
                <li>
                  <h2>
                    <span>Call For Taxi</span>
                    <a href="tel:5267214392">+966595783153</a>
                  </h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
