import React from "react";
import Banner from "../../../components/common/banner/Banner";
import DynamicScriptsLoader from "../../../components/common/script/ScriptLoader";

const page = () => {
  return (
    <div>
      <DynamicScriptsLoader />
      <Banner title="TAXI DETAILS!" />
      <section className="taxi-details bd-bottom padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="taxi-details-img">
                <img src="/assets/img/car-2.png" alt="taxi" />
                <div className="price">
                  <i className="las la-tachometer-alt"></i>$0.85/km
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-heading">
                <h4>
                  <span></span>Introducing
                </h4>
                <h2>Mercedes-Maybach Haute Voiture - 2024</h2>
                <p>
                  We successfully cope with tasks of varying complexity, provide
                  long-term guarantees and regularly master new technologies.
                  Our portfolio includes dozens of successfully completed
                  projects of houses of different storeys, with high–quality
                  finishes and good repairs. Book your taxi from anywhare today!
                </p>
              </div>
              <ul className="taxi-features">
                <li>
                  <span>
                    <i className="las la-taxi"></i>Car ID:
                  </span>{" "}
                  7762
                </li>
                <li>
                  <span>
                    <i className="las la-compass"></i>Transmission:
                  </span>
                  Auto
                </li>
                <li>
                  <span>
                    <i className="las la-route"></i>Mileage:
                  </span>{" "}
                  170K
                </li>
                <li>
                  <span>
                    <i className="las la-tools"></i>Engine:
                  </span>{" "}
                  6.5L LP petrol
                </li>
                <li>
                  <span>
                    <i className="las la-sync"></i>Air Condition:
                  </span>{" "}
                  Yes
                </li>
                <li>
                  <span>
                    <i className="las la-briefcase"></i>Luggage Carry:
                  </span>
                  4
                </li>
              </ul>
              <a href="book-taxi.html" className="default-btn mt-30">
                Book Your Ride
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!--/.taxi-details--> */}

      <section className="related-taxi bg-grey padding">
        <div className="container">
          <div className="section-heading text-center mb-40">
            <h4>
              <span></span>Our More Taxis
            </h4>
            <h2>Related Taxis To Ride</h2>
            <p>
              We successfully cope with tasks of varying complexity, provide
              long-term <br />
              guarantees and regularly master new technologies.
            </p>
          </div>
          {/* <!--/.section-heading--> */}
          <div className="swiper-outside">
            <div className="taxi-carousel swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
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
                <div className="swiper-slide">
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
                <div className="swiper-slide">
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
                <div className="swiper-slide">
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
              </div>
            </div>
            {/* <!-- Carousel Arrows --> */}
            <div className="swiper-nav swiper-next">
              <i className="las la-long-arrow-alt-right"></i>
            </div>
            <div className="swiper-nav swiper-prev">
              <i className="las la-long-arrow-alt-left"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
