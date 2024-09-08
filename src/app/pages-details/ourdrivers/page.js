import { Bangers } from "next/font/google";
import React from "react";
import Banner from "../../../components/common/banner/Banner";
import DynamicScriptsLoader from "../../../components/common/script/ScriptLoader";

function page() {
  return (
    <div>
      <DynamicScriptsLoader />
      <Banner title="OUR DRIVERS!" />

      <section className="team-section padding">
        <div className="container">
          <div className="section-heading text-center mb-40">
            <h4>
              <span></span>Lets Go With Us!
            </h4>
            <h2>Our Expert Drivers</h2>
            <p>
              MM Taxi Service handles trips of all complexities, offering long-term  <br />
              reliability for Umrah and Hajj.


            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="team-item">
                <div className="team-thumb">
                  <img src="/assets/img/team-1.jpg" alt="thumb" />
                </div>
                <div className="team-content">
                  <h3>
                    <a href="driver-details.html">Félix Lengyel</a>
                  </h3>
                  <h4>BMW X5 2008</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="team-item">
                <div className="team-thumb">
                  <img src="/assets/img/team-2.jpg" alt="thumb" />
                </div>
                <div className="team-content">
                  <h3>
                    <a href="driver-details.html">Henry Nathan</a>
                  </h3>
                  <h4>Mercedes‑Benz</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="team-item">
                <div className="team-thumb">
                  <img src="/assets/img/team-3.jpg" alt="thumb" />
                </div>
                <div className="team-content">
                  <h3>
                    <a href="driver-details.html">Brandon Larned</a>
                  </h3>
                  <h4>Hyundai 2022</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="team-item">
                <div className="team-thumb">
                  <img src="/assets/img/team-4.jpg" alt="thumb" />
                </div>
                <div className="team-content">
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
