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
                  Feel the difference and Relaxation with MM Taxi Company!
                </h2>
                <p>
                  At MM Taxi Service, we specialize in providing reliable and
                  efficient transportation for Umrah and Hajj pilgrims. Whether
                  it's short trips or long journeys, we ensure a seamless and
                  comfortable experience. Our team is committed to delivering
                  top-quality service with modern vehicles, ensuring your travel
                  is smooth and stress-free. Trust us for safe, timely, and
                  professional transportation during your sacred journey. Book
                  your Umrah or Hajj taxi from anywhere today!
                </p>
              </div>
              <ul className="about-info">
                <li>
                  <img
                    className="owner-thumb"
                    src="assets/img/comment-1.jpg"
                    alt="thumb"
                  />
                  <div className="owner">
                    <h4>Founder - CEO</h4>
                    <p>Sanaullah</p>
                  </div>
                </li>
                <li>
                  <h2>
                    <span>Call For Taxi</span>
                    <a href="tel:+966595783153">+966595783153</a>
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
