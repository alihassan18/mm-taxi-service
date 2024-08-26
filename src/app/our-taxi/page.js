import React from "react";
import Banner from "../../components/common/banner/banner";

function page() {
  return (
    <div>
      <Banner title="OUR TAXI LIST!" />
      <section class="our-taxi padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 sm-padding">
              <div class="pricing-item">
                <div class="pricing-head-wrap">
                  <div class="pricing-car">
                    <img src="/assets/img/pricing-car.png" alt="car" />
                    <div class="price">$2.50/km</div>
                  </div>
                </div>
                <div class="pricing-head">
                  <h3>
                    <a href="taxi-details.html">BMW X5 2008</a>
                  </h3>
                  <span class="location">Chicago</span>
                </div>
                <ul class="pricing-list">
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
                    <a href="book-taxi.html" class="default-btn">
                      Book Taxi Now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 sm-padding">
              <div class="pricing-item">
                <div class="pricing-head-wrap">
                  <div class="pricing-car">
                    <img src="/assets/img/pricing-car.png" alt="car" />
                    <div class="price">$3.50/km</div>
                  </div>
                </div>
                <div class="pricing-head">
                  <h3>
                    <a href="taxi-details.html">Mercedes‑Benz</a>
                  </h3>
                  <span class="location">Florida</span>
                </div>
                <ul class="pricing-list">
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
                    <a href="book-taxi.html" class="default-btn">
                      Book Taxi Now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 sm-padding">
              <div class="pricing-item">
                <div class="pricing-head-wrap">
                  <div class="pricing-car">
                    <img src="/assets/img/pricing-car.png" alt="car" />
                    <div class="price">$4.50/km</div>
                  </div>
                </div>
                <div class="pricing-head">
                  <h3>
                    <a href="taxi-details.html">Hyundai 2022</a>
                  </h3>
                  <span class="location">New York</span>
                </div>
                <ul class="pricing-list">
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
                    <a href="book-taxi.html" class="default-btn">
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
