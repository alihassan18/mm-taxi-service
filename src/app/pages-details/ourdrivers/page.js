import { Bangers } from "next/font/google";
import React from "react";
import Banner from "../../../components/common/banner/banner";

function page() {
  return (
    <div>
      <Banner title="OUR DRIVERS!" />

      <section class="team-section padding">
        <div class="container">
          <div class="section-heading text-center mb-40">
            <h4>
              <span></span>Lets Go With Us!
            </h4>
            <h2>Our Expert Drivers</h2>
            <p>
              We successfully cope with tasks of varying complexity, provide
              long-term <br />
              guarantees and regularly master new technologies.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 sm-padding">
              <div class="team-item">
                <div class="team-thumb">
                  <img src="/assets/img/team-1.jpg" alt="thumb" />
                </div>
                <div class="team-content">
                  <h3>
                    <a href="driver-details.html">Félix Lengyel</a>
                  </h3>
                  <h4>BMW X5 2008</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 sm-padding">
              <div class="team-item">
                <div class="team-thumb">
                  <img src="/assets/img/team-2.jpg" alt="thumb" />
                </div>
                <div class="team-content">
                  <h3>
                    <a href="driver-details.html">Henry Nathan</a>
                  </h3>
                  <h4>Mercedes‑Benz</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 sm-padding">
              <div class="team-item">
                <div class="team-thumb">
                  <img src="/assets/img/team-3.jpg" alt="thumb" />
                </div>
                <div class="team-content">
                  <h3>
                    <a href="driver-details.html">Brandon Larned</a>
                  </h3>
                  <h4>Hyundai 2022</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 sm-padding">
              <div class="team-item">
                <div class="team-thumb">
                  <img src="/assets/img/team-4.jpg" alt="thumb" />
                </div>
                <div class="team-content">
                  <h3>
                    <a href="driver-details.html">Sasha Hostyn</a>
                  </h3>
                  <h4>Toyota XCorola</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
