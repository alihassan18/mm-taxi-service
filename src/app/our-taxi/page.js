import React from "react";
import Banner from "../../components/common/banner/Banner";
import DynamicScriptsLoader from "../../components/common/script/ScriptLoader";

function page() {
  return (
    <div>
      <DynamicScriptsLoader />
      <Banner title="OUR TAXI LIST!" />
      <section className="our-taxi padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 sm-padding">
              <div className="pricing-item">
                <div className="pricing-head-wrap">
                  <div className="pricing-car">
                    <img src="/assets/img/pricing-car.png" alt="car" />
                    <div className="price">$2.50/km</div>
                  </div>
                </div>
                <div className="pricing-head">
                  <h3>
                    <a href="taxi-details.html">BMW X5 2008</a>
                  </h3>
                  <span className="location">Chicago</span>
                </div>
                <ul className="pricing-list">
                  <li>
                    Initial Charge: <span>$2.50</span>
                  </li>
                  <li>
                    Per Mile/KM: <span>$4.20</span>
                  </li>
                  <li>
                    Per Stopped Trafic: <span>$1.50</span>
                  </li>
                  <li>
                    Passengers: <span>4 Person</span>
                  </li>
                  <li>
                    <a href="book-taxi.html" className="default-btn">
                      Book Taxi Now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 sm-padding">
              <div className="pricing-item">
                <div className="pricing-head-wrap">
                  <div className="pricing-car">
                    <img src="/assets/img/pricing-car.png" alt="car" />
                    <div className="price">$3.50/km</div>
                  </div>
                </div>
                <div className="pricing-head">
                  <h3>
                    <a href="taxi-details.html">Mercedes‑Benz</a>
                  </h3>
                  <span className="location">Florida</span>
                </div>
                <ul className="pricing-list">
                  <li>
                    Initial Charge: <span>$2.50</span>
                  </li>
                  <li>
                    Per Mile/KM: <span>$4.20</span>
                  </li>
                  <li>
                    Per Stopped Trafic: <span>$1.50</span>
                  </li>
                  <li>
                    Passengers: <span>4 Person</span>
                  </li>
                  <li>
                    <a href="book-taxi.html" className="default-btn">
                      Book Taxi Now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 sm-padding">
              <div className="pricing-item">
                <div className="pricing-head-wrap">
                  <div className="pricing-car">
                    <img src="/assets/img/pricing-car.png" alt="car" />
                    <div className="price">$4.50/km</div>
                  </div>
                </div>
                <div className="pricing-head">
                  <h3>
                    <a href="taxi-details.html">Hyundai 2022</a>
                  </h3>
                  <span className="location">New York</span>
                </div>
                <ul className="pricing-list">
                  <li>
                    Initial Charge: <span>$2.50</span>
                  </li>
                  <li>
                    Per Mile/KM: <span>$4.20</span>
                  </li>
                  <li>
                    Per Stopped Trafic: <span>$1.50</span>
                  </li>
                  <li>
                    Passengers: <span>4 Person</span>
                  </li>
                  <li>
                    <a href="book-taxi.html" className="default-btn">
                      Book Taxi Now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
