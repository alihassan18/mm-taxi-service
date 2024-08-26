import React from "react";
import Banner from "../../components/common/banner/banner";

function page() {
  return (
    <div>
      <Banner title="SERVICES DETAILS!" />
      <section class="about-section padding">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 col-sm-6">
              <div class="about-img">
                <img
                  class="about-img1"
                  src="assets/img/about-1.png"
                  alt="img"
                />
                <img
                  class="about-img2"
                  src="assets/img/about-2.png"
                  alt="img"
                />
                <figure class="round-text">
                  <img src="assets/img/experience-text-round.png" alt="img" />
                </figure>
              </div>
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="section-heading mb-40">
                <h4>
                  <span></span>About Our Company
                </h4>
                <h2>
                  Feel the difference and Relaxation with Ridek Taxi Company!
                </h2>
                <p>
                  We successfully cope with tasks of varying complexity, provide
                  long-term guarantees and regularly master new technologies.
                  Our portfolio includes dozens of successfully completed
                  projects of houses of different storeys, with high–quality
                  finishes and good repairs. Book your taxi from anywhare today!
                </p>
              </div>
              <ul class="about-info">
                <li>
                  <img
                    class="owner-thumb"
                    src="assets/img/comment-1.png"
                    alt="thumb"
                  />
                  <div class="owner">
                    <h4>Founder - CEO</h4>
                    <img
                      class="signature"
                      src="assets/img/signature.png"
                      alt="signature"
                    />
                  </div>
                </li>
                <li>
                  <h2>
                    <span>Call For Taxi</span>
                    <a href="tel:5267214392">5267-214-392</a>
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
