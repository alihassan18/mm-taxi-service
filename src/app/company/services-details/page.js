import React from "react";
import Banner from "../../../components/common/banner/Banner";

const page = () => {
  return (
    <div>
      <Banner title="SERVICES DETAILS!" />
      <section className="service-details bg-grey padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 sm-padding">
              <div className="service-details-info">
                <img src="/assets/img/post-2.jpg" alt="img" />
                <h2>Comfortable Business Transport Services!</h2>
                <p>
                  Financial experts support or help you to to find out which way
                  you can raise your funds more. Arkit a trusted name for
                  providing assistants. Initially their main objective was to
                  ensure the service they provide these people are loyal to
                  their industry.
                </p>
                <p>
                  Unless you are the one who really cares about this, it is not
                  terribly important. What all matters are how your hybrid
                  mobile application development is going to work in the long
                  run as no one will care about how it was built.
                </p>
                <ul className="service-features">
                  <li>
                    <div>
                      <i className="las la-shipping-fast"></i>
                    </div>
                    <div>
                      <h3>Fast &amp; Easy Pickups</h3>
                      <p>
                        Everything your taxi business needs is already here!
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <i className="las la-taxi"></i>
                    </div>
                    <div>
                      <h3>Instant Car Provide</h3>
                      <p>
                        Everything your taxi business needs is already here!
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <i className="las la-tachometer-alt"></i>
                    </div>
                    <div>
                      <h3>Save Expert Drive</h3>
                      <p>
                        Everything your taxi business needs is already here!
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <i className="las la-user-astronaut"></i>
                    </div>
                    <div>
                      <h3>24/7 Support</h3>
                      <p>
                        Everything your taxi business needs is already here!
                      </p>
                    </div>
                  </li>
                </ul>
                <p>
                  There are some big shifts taking place in the field of
                  construction equipment mathematics. Starting with the
                  integration of mathematics devices in vehicles right from
                  manufacturers, to the standardization and integration of
                  mathematics data across various business functions, the future
                  of mathematics.
                </p>
                <div className="service-details-list">
                  <img src="/assets/img/post-1.jpg" alt="img" />
                  <div>
                    <h3>Passenger Benefits!</h3>
                    <p>Everything your taxi business needs is already here!</p>
                    <ul className="service-icon-list">
                      <li>
                        <i className="las la-hand-point-right"></i>Use the latest
                        diagnostic equipment.
                      </li>
                      <li>
                        <i className="las la-hand-point-right"></i>Automotive
                        service for our clients.
                      </li>
                      <li>
                        <i className="las la-hand-point-right"></i>Quick dedicated
                        support team.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sm-padding">
              <div className="service-sidebar sidebar-widget">
                <div className="widget-title service-widget">
                  <h3>Categories</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Regular Transport</a>
                    <i className="las la-arrow-right"></i>
                  </li>
                  <li>
                    <a href="#">City Transport</a>
                    <i className="las la-arrow-right"></i>
                  </li>
                  <li>
                    <a href="#">Airport Transport</a>
                    <i className="las la-arrow-right"></i>
                  </li>
                  <li>
                    <a href="#">Long Journey</a>
                    <i className="las la-arrow-right"></i>
                  </li>
                  <li>
                    <a href="#">Luggage Transport</a>
                    <i className="las la-arrow-right"></i>
                  </li>
                </ul>
              </div>
              <div className="sidebar-widget banner">
                <div className="banner-info">
                  <a href="index.html">
                    <img
                      className="logo"
                      src="/assets/img/logo-light.png"
                      alt="logo"
                    />
                  </a>
                  <h3>
                    Feel your journey with <span>Ridek!</span>
                  </h3>
                  <p>Everything your taxi business needs is already here!</p>
                  <h2 className="discount">
                    <span>-60%</span> Off Today!
                  </h2>
                  <a href="contact.html" className="default-btn">
                    Get Your Offer Now
                  </a>
                </div>
              </div>
              <div className="sidebar-widget">
                <div className="widget-title">
                  <h3>Tags</h3>
                </div>
                <ul className="tags">
                  <li>
                    <a href="#">business</a>
                  </li>
                  <li>
                    <a href="#">marketing</a>
                  </li>
                  <li>
                    <a href="#">startup</a>
                  </li>
                  <li>
                    <a href="#">design</a>
                  </li>
                  <li>
                    <a href="#">consulting</a>
                  </li>
                  <li>
                    <a href="#">strategy</a>
                  </li>
                  <li>
                    <a href="#">development</a>
                  </li>
                  <li>
                    <a href="#">tips</a>
                  </li>
                  <li>
                    <a href="#">Seo</a>
                  </li>
                </ul>
              </div>
              {/* <!--Tags--> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
