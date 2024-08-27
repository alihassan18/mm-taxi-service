"use client";
import React from "react";
// import OurTaxi from "@/components/common/ourtaxi/page";
const HomePage = () => {
  return (
    <React.Fragment>
      <div>
        <div class="slider-section">
          <div class="main-slider">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="slider-img">
                  <img
                    src="/assets/img/slider-bg.jpg"
                    alt="img"
                    class="kenburns"
                    style={{ animationDuration: "12000ms" }}
                  />
                </div>
                <div class="car-holder">
                  <img
                    src="/assets/img/car-1.png"
                    alt="car"
                    data-animation="car-animation"
                    data-duration="1.5s"
                  />
                  <div class="shape">
                    <div
                      data-animation="slide-in-bottom"
                      data-duration="1.5s"
                      data-delay="0.3s"
                    ></div>
                    <div
                      data-animation="fade-in"
                      data-duration="1.5s"
                      data-delay="0.2s"
                    ></div>
                    <div
                      data-animation="slide-in-top"
                      data-duration="1.5s"
                      data-delay="0.5s"
                    ></div>
                  </div>
                </div>
                <div class="slider-content-wrap d-flex align-items-center text-left">
                  <div class="container">
                    <div class="slider-content">
                      <div class="slider-caption medium">
                        <div class="inner-layer">
                          <div
                            data-animation="fade-in-bottom"
                            data-delay="0.3s"
                          >
                            Travel securely with us!
                          </div>
                        </div>
                      </div>
                      <div class="slider-caption big">
                        <div class="inner-layer">
                          <div
                            data-animation="fade-in-bottom"
                            data-delay="0.5s"
                          >
                            Book your taxi from
                            <br />
                            anywhare today!
                          </div>
                        </div>
                      </div>
                      <div class="slider-caption small">
                        <div class="inner-layer">
                          <div
                            data-animation="fade-in-bottom"
                            data-delay="0.7s"
                            data-duration="1s"
                          >
                            Everything your taxi business needs is already here!{" "}
                            <br />
                            Ridek made for taxi service companies!
                          </div>
                        </div>
                      </div>
                      <div class="slider-btn">
                        <a
                          href="book-taxi.html"
                          class="default-btn"
                          data-animation="fade-in-bottom"
                          data-delay="0.9s"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slider-img">
                  <img
                    src="/assets/img/slider-bg.jpg"
                    alt="img"
                    class="kenburns"
                    style={{ animationDuration: "12000ms" }}
                  />
                </div>
                <div class="car-holder">
                  <img
                    src="/assets/img/car-1.png"
                    alt="car"
                    data-animation="car-animation"
                    data-duration="1.5s"
                  />
                  <div class="shape">
                    <div
                      data-animation="slide-in-bottom"
                      data-duration="1.5s"
                      data-delay="0.3s"
                    ></div>
                    <div
                      data-animation="fade-in"
                      data-duration="1.5s"
                      data-delay="0.2s"
                    ></div>
                    <div
                      data-animation="slide-in-top"
                      data-duration="1.5s"
                      data-delay="0.5s"
                    ></div>
                  </div>
                </div>
                <div class="slider-content-wrap d-flex align-items-center text-left">
                  <div class="container">
                    <div class="slider-content">
                      <div class="slider-caption medium">
                        <div class="inner-layer">
                          <div
                            data-animation="fade-in-bottom"
                            data-delay="0.3s"
                          >
                            Travel securely with us!
                          </div>
                        </div>
                      </div>
                      <div class="slider-caption big">
                        <div class="inner-layer">
                          <div
                            data-animation="fade-in-bottom"
                            data-delay="0.5s"
                          >
                            Book your taxi from
                            <br />
                            anywhare today!
                          </div>
                        </div>
                      </div>
                      <div class="slider-caption small">
                        <div class="inner-layer">
                          <div
                            data-animation="fade-in-bottom"
                            data-delay="0.7s"
                            data-duration="1s"
                          >
                            Everything your taxi business needs is already here!{" "}
                            <br />
                            Ridek made for taxi service companies!
                          </div>
                        </div>
                      </div>
                      <div class="slider-btn">
                        <a
                          href="book-taxi.html"
                          class="default-btn"
                          data-animation="fade-in-bottom"
                          data-delay="0.9s"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Slider navigation buttons --> */}
            <div class="slider-controls">
              <div class="slider-control slider-button-prev">
                <span>
                  <i class="las la-long-arrow-alt-left"></i>
                </span>
                Prev
              </div>
              <div class="slider-pagination"></div>
              <div class="slider-control slider-button-next">
                Next
                <span>
                  <i class="las la-long-arrow-alt-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="site-preloader">
          <div className="car">
            <div className="strike"></div>
            <div className="strike strike2"></div>
            <div className="strike strike3"></div>
            <div className="strike strike4"></div>
            <div className="strike strike5"></div>
            <div className="car-detail spoiler"></div>
            <div className="car-detail back"></div>
            <div className="car-detail center"></div>
            <div className="car-detail center1"></div>
            <div className="car-detail front"></div>
            <div className="car-detail wheel"></div>
            <div className="car-detail wheel wheel2"></div>
          </div>
        </div> */}

        <div id="popup-search-box">
          <div className="box-inner-wrap d-flex align-items-center">
            <form id="form" action="#" method="get" role="search">
              <input
                id="popup-search"
                type="text"
                name="s"
                placeholder="Type keywords here..."
              />
              <button id="popup-search-button" type="submit" name="submit">
                <i className="las la-search"></i>
              </button>
            </form>
            <div className="search-close">
              <i className="las la-times"></i>
            </div>
          </div>
        </div>
        <div id="searchbox-overlay"></div>

        <div id="popup-sidebox" className="popup-sidebox">
          <div className="sidebox-content">
            <div className="site-logo">
              <a href="index.html">
                <img src="/assets/img/logo-light.png" alt="logo" />
              </a>
            </div>
            <p>
              Everything your taxi business needs is already here! Ridek, a
              theme made for taxi service companies.
            </p>
            <ul className="sidebox-list">
              <li className="call">
                <span>Call for ride:</span>5267-214-392
              </li>
              <li>
                <span>You can find us at:</span>Halk Street New York, USA - 2386
              </li>
              <li>
                <span>Email now:</span>Info.ridek@mail.com
              </li>
            </ul>
          </div>
        </div>
        <div id="sidebox-overlay"></div>

        {/*  */}
        <section className="about-section padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="about-img">
                  <img
                    className="about-img1 wow fade-in-left"
                    data-wow-delay="200ms"
                    src="/assets/img/about-1.png"
                    alt="img"
                  />
                  <img
                    className="about-img2 wow fade-in-bottom"
                    data-wow-delay="400ms"
                    src="/assets/img/about-2.png"
                    alt="img"
                  />
                  <figure className="round-text">
                    <img
                      src="/assets/img/experience-text-round.png"
                      alt="img"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="section-heading mb-40 wow fade-in-right"
                  data-wow-delay="200ms"
                >
                  <h4>
                    <span />
                    About Our Company
                  </h4>
                  <h2>
                    Feel the difference and Relaxation with Ridek Taxi Company!
                  </h2>
                  <p>
                    We successfully cope with tasks of varying complexity,
                    provide long-term guarantees and regularly master new
                    technologies. Our portfolio includes dozens of successfully
                    completed projects of houses of different storeys, with
                    high–quality finishes and good repairs. Book your taxi from
                    anywhare today!
                  </p>
                </div>
                {/*/.section-heading*/}
                <ul
                  className="about-info wow fade-in-right"
                  data-wow-delay="400ms"
                >
                  <li>
                    <img
                      className="owner-thumb"
                      src="/assets/img/comment-1.png"
                      alt="thumb"
                    />
                    <div className="owner">
                      <h4>Founder - CEO</h4>
                      <img
                        className="signature"
                        src="/assets/img/signature.png"
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

        <section className="service-section bg-grey padding">
          <div className="bg-half" />
          <div className="container">
            <div
              className="section-heading text-center mb-40 wow fade-in-bottom"
              data-wow-delay="200ms"
            >
              <h4>
                <span />
                What We Offer
              </h4>
              <h2 className="white">
                Start your journey with
                <br />
                Ridek Taxi Company!
              </h2>
              <p>
                We successfully cope with tasks of varying complexity, provide
                long-term <br />
                guarantees and regularly master new technologies.
              </p>
            </div>
            {/*/.section-heading*/}
            <div className="swiper-outside">
              <div className="service-carousel">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div
                      className="service-item wow fade-in-bottom"
                      data-wow-delay="200ms"
                    >
                      <div className="service-thumb">
                        <img src="/assets/img/service-1.jpg" alt="img" />
                        <div className="service-shape-wrap">
                          <div className="service-shape" />
                        </div>
                        <div className="service-car">
                          <img src="/assets/img/car-1.png" alt="car" />
                        </div>
                      </div>
                      <div className="service-content">
                        <h3>
                          <a href="service-details.html">Regular Transport</a>
                        </h3>
                        <p>
                          Everything your taxi business needs is already here!
                          Ridek made for taxi service companies!
                        </p>
                        <a className="read-more" href="service-details.html">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="service-item wow fade-in-bottom"
                      data-wow-delay="400ms"
                    >
                      <div className="service-thumb">
                        <img src="/assets/img/service-2.jpg" alt="img" />
                        <div className="service-shape-wrap">
                          <div className="service-shape" />
                        </div>
                        <div className="service-car">
                          <img src="/assets/img/car-1.png" alt="car" />
                        </div>
                      </div>
                      <div className="service-content">
                        <h3>
                          <a href="service-details.html">Airport Transport</a>
                        </h3>
                        <p>
                          Everything your taxi business needs is already here!
                          Ridek made for taxi service companies!
                        </p>
                        <a className="read-more" href="service-details.html">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="service-item wow fade-in-bottom"
                      data-wow-delay="600ms"
                    >
                      <div className="service-thumb">
                        <img src="/assets/img/service-3.jpg" alt="img" />
                        <div className="service-shape-wrap">
                          <div className="service-shape" />
                        </div>
                        <div className="service-car">
                          <img src="/assets/img/service-2.jpg" alt="car" />
                        </div>
                      </div>
                      <div className="service-content">
                        <h3>
                          <a href="service-details.html">Luggage Transport</a>
                        </h3>
                        <p>
                          Everything your taxi business needs is already here!
                          Ridek made for taxi service companies!
                        </p>
                        <a className="read-more" href="service-details.html">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="service-item">
                      <div className="service-thumb">
                        <img src="/assets/img/service-4.jpg" alt="img" />
                        <div className="service-shape-wrap">
                          <div className="service-shape" />
                        </div>
                        <div className="service-car">
                          <img src="/assets/img/car-1.png" alt="car" />
                        </div>
                      </div>
                      <div className="service-content">
                        <h3>
                          <a href="service-details.html">City Transport</a>
                        </h3>
                        <p>
                          Everything your taxi business needs is already here!
                          Ridek made for taxi service companies!
                        </p>
                        <a className="read-more" href="service-details.html">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="service-item">
                      <div className="service-thumb">
                        <img src="/assets/img/service-5.jpg" alt="img" />
                        <div className="service-shape-wrap">
                          <div className="service-shape" />
                        </div>
                        <div className="service-car">
                          <img src="/assets/img/car-1.png" alt="car" />
                        </div>
                      </div>
                      <div className="service-content">
                        <h3>
                          <a href="service-details.html">Business Transport</a>
                        </h3>
                        <p>
                          Everything your taxi business needs is already here!
                          Ridek made for taxi service companies!
                        </p>
                        <a className="read-more" href="service-details.html">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" />
                {/* Carousel Dots */}
              </div>
              {/* Carousel Arrows */}
              <div className="swiper-nav swiper-next">
                <i className="las la-long-arrow-alt-right" />
              </div>
              <div className="swiper-nav swiper-prev">
                <i className="las la-long-arrow-alt-left" />
              </div>
            </div>
          </div>
        </section>

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
                    We successfully cope with tasks of varying complexity,
                    provide long-term guarantees and regularly master new
                    technologies. Our portfolio includes dozens of successfully
                    completed projects of houses of different storeys, with
                    high–quality finishes and good repairs. Book your taxi from
                    anywhare today!
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
                    </span>{" "}
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
                    </span>{" "}
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

        <section class="booking-section">
          <div class="container">
            <div class="row pos-relative padding">
              <div class="col-lg-4">
                <div
                  class="booking-car wow fade-in-left"
                  data-wow-delay="200ms"
                ></div>
              </div>
              <div class="col-lg-8">
                <div class="booking-wrap">
                  <div class="section-heading mb-30">
                    <h4>
                      <span></span>Online Booking
                    </h4>
                    <h2 class="white">Book Your Taxi Ride</h2>
                  </div>
                  <form action="book-ride.php" id="book-taxi-ride">
                    <div class="booking-form">
                      <div class="form-field">
                        <i class="las la-user-tie"></i>
                        <input type="text" id="full-name" name="full-name" class="form-control"
                          placeholder="Your Name" required />
                      </div>
                      <div class="form-field">
                        <i class="las la-envelope-open"></i>
                        <input type="email" id="email" name="email" class="form-control" placeholder="Email"
                          required />
                      </div>
                      <div class="form-field">
                        <i class="las la-tags"></i>
                        <select name="package-type" id="type" class="niceSelect">
                          <option value="standard">Standard</option>
                          <option value="business">Business</option>
                          <option value="economy">Economy</option>
                          <option value="vip-spacial">VIP Spacial</option>
                          <option value="comfort">Comfort</option>
                        </select>
                      </div>
                      <div class="form-field">
                        <i class="las la-user-friends"></i>
                        <select name="passengers" id="passengers" class="niceSelect">
                          <option value="1">1 Person</option>
                          <option value="2">2 Person</option>
                          <option value="3">3 Person</option>
                          <option value="4">4 Person</option>
                          <option value="5">5 Person</option>
                        </select>
                      </div>
                      <div class="form-field">
                        <i class="las la-map-marker"></i>
                        <input type="text" id="start-dest" name="start-dest" class="form-control"
                          placeholder="Start Destination" required />
                      </div>
                      <div class="form-field">
                        <i class="las la-map-marker"></i>
                        <input type="text" id="end-dest" name="end-dest" class="form-control"
                          placeholder="End Destination" required />
                      </div>
                      <div class="form-field">
                        <i class="las la-calendar"></i>
                        <input type="text" id="ride-date" name="ride-date" class="form-control date-picker"
                          placeholder="Select Date" required />
                      </div>
                      <div class="form-field">
                        <i class="las la-clock"></i>
                        <input type="text" id="ride-time" name="ride-time" class="form-control time-picker"
                          placeholder="Select Time" required />
                      </div>
                      <div class="form-field">
                        <button id="submit" class="default-btn" type="submit">Book Your Taxi</button>
                      </div>
                    </div>
                    <div id="form-messages" class="alert" role="alert"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <OurTaxi /> */}
        <section class="download-section bd-bottom padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div
                  class="section-heading wow fade-in-left"
                  data-wow-delay="200ms"
                >
                  <h4>
                    <span></span>Online Booking
                  </h4>
                  <h2>Get the Ridek Mobile app and Start Your Journey!</h2>
                  <p>
                    We successfully cope with tasks of varying complexity,
                    provide long-term guarantees and regularly master
                    technologies.
                  </p>
                  <ul class="app-feature">
                    <li>
                      <i>
                        <img
                          class="feature-icon"
                          src="/assets/img/icon-navigator.svg"
                          alt="icon"
                        />
                      </i>
                      <h3>
                        Easy to Search <br />
                        Ridek Taxi!
                      </h3>
                    </li>
                    <li>
                      <i>
                        <img
                          class="feature-icon"
                          src="/assets/img/icon-clock.svg"
                          alt="icon"
                        />
                      </i>
                      <h3>
                        Quick Pickups To <br />
                        Save Time!
                      </h3>
                    </li>
                    <li>
                      <i>
                        <img
                          class="feature-icon"
                          src="/assets/img/icon-docs.svg"
                          alt="icon"
                        />
                      </i>
                      <h3>
                        Inclusive Rates To
                        <br />
                        Enjoy Ride!
                      </h3>
                    </li>
                  </ul>
                  <div class="download-btn">
                    <a href="#">
                      <img src="/assets/img/google-play.svg" alt="PlayStore" />
                    </a>
                    <a href="#">
                      <img src="/assets/img/app-store.svg" alt="AppStore" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 d-none d-lg-block">
                <div class="taxi-holder">
                  <div
                    class="taxi wow fade-in-left"
                    data-wow-delay="300ms"
                  ></div>
                  <div
                    class="mockup wow fade-in-bottom"
                    data-wow-delay="400ms"
                  ></div>
                  <div
                    class="charecter wow fade-in-right"
                    data-wow-delay="500ms"
                  ></div>
                  <img
                    class="location-marker"
                    src="/assets/img/location-marker.png"
                    alt="location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="testimonial-section bg-grey">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="section-heading mb-10">
                  <h4>
                    <span></span>Clients Testimonial
                  </h4>
                  <h2>Ridek Passenger Reviews...</h2>
                  <p>
                    We successfully cope with tasks of varying complexity,
                    provide long-term guarantees and regularly master
                    technologies.
                  </p>
                </div>
                <div class="swiper-outside testi-pagination">
                  <div class="testimonial-carousel">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="testi-item">
                          <div class="quote-icon">
                            <i class="las la-quote-right"></i>
                          </div>
                          <p>
                            Good to have transportation available in places and
                            times it is otherwise hard to find, but the app has
                            always been a bit difficult to use especially how it
                            works or doesnt with large font phone settings.
                          </p>
                          <div class="testi-author">
                            <div class="author-thumb">
                              <img
                                src="/assets/img/comment-1.png"
                                alt="author"
                              />
                            </div>
                            <div class="author-info">
                              <h3>
                                Eredrik Johanson <span>Financial .INC</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="testi-item">
                          <div class="quote-icon">
                            <i class="las la-quote-right"></i>
                          </div>
                          <p>
                            Good to have transportation available in places and
                            times it is otherwise hard to find, but the app has
                            always been a bit difficult to use especially how it
                            works or doesnt with large font phone settings.
                          </p>
                          <div class="testi-author">
                            <div class="author-thumb">
                              <img
                                src="/assets/img/comment-1.png"
                                alt="author"
                              />
                            </div>
                            <div class="author-info">
                              <h3>
                                Eredrik Johanson <span>Financial .INC</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="testi-item">
                          <div class="quote-icon">
                            <i class="las la-quote-right"></i>
                          </div>
                          <p>
                            Good to have transportation available in places and
                            times it is otherwise hard to find, but the app has
                            always been a bit difficult to use especially how it
                            works or doesnt with large font phone settings.
                          </p>
                          <div class="testi-author">
                            <div class="author-thumb">
                              <img
                                src="/assets/img/comment-1.png"
                                alt="author"
                              />
                            </div>
                            <div class="author-info">
                              <h3>
                                Eredrik Johanson <span>Financial .INC</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="feature-wrap">
                  <div
                    class="section-heading mb-30 wow fade-in-right"
                    data-wow-delay="200ms"
                  >
                    <h4 class="white">
                      <span></span>Why Choose Us!
                    </h4>
                    <h2 class="white">Why Ride with Ridek?</h2>
                    <p class="white">
                      We successfully cope with tasks of varying complexity,
                      provide long-term guarantees and regularly master
                      technologies.
                    </p>
                  </div>

                  <ul class="ridek-features">
                    <li class="wow fade-in-right" data-wow-delay="300ms">
                      <div class="feature-icon">
                        <i class="las la-gem"></i>
                      </div>
                      <div class="feature-content">
                        <h3>Safe Guarantee</h3>
                        <p>
                          We successfully cope with tasks of <br />
                          varying complexity!
                        </p>
                      </div>
                    </li>
                    <li class="wow fade-in-right" data-wow-delay="400ms">
                      <div class="feature-icon">
                        <i class="las la-taxi"></i>
                      </div>
                      <div class="feature-content">
                        <h3>Fast Pickups</h3>
                        <p>
                          We successfully cope with tasks of <br />
                          varying complexity!
                        </p>
                      </div>
                    </li>
                    <li class="wow fade-in-right" data-wow-delay="500ms">
                      <div class="feature-icon">
                        <i class="las la-tachometer-alt"></i>
                      </div>
                      <div class="feature-content">
                        <h3>Quick Ride</h3>
                        <p>
                          We successfully cope with tasks of <br />
                          varying complexity!
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="cta-section padding">
          <div class="cta-men wow fade-in-bottom" data-wow-delay="200ms"></div>
          <div class="container">
            <div class="cta-content">
              <h2>
                Call Us Now <span>Book Your Taxi</span> <br />
                For Your Next Ride!
              </h2>
              <p>
                We successfully cope with tasks of varying complexity,
                <br />
                guarantees and regularly master new technologies.
              </p>
              <div class="cta-call">
                <i class="las la-phone-volume"></i>
                <p>
                  <span>Call For Taxi</span>
                  <a href="tel:5267214392">5267-214-392</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="blog-section bg-grey padding">
          <div class="container">
            <div
              class="section-heading text-center mb-40 wow fade-in-bottom"
              data-wow-delay="200ms"
            >
              <h4>
                <span></span>Recent Posts!
              </h4>
              <h2>News And Insights!</h2>
              <p>
                We successfully cope with tasks of varying complexity, provide
                long-term <br />
                guarantees and regularly master new technologies.
              </p>
            </div>

            <div class="row grid-post">
              <div class="col-lg-4 col-md-6 padding-15">
                <div class="post-card">
                  <div class="post-thumb">
                    <img src="/assets/img/post-1.jpg" alt="post" />
                    <a href="blog-details.html" class="post-category">
                      Business
                    </a>
                  </div>
                  <div class="post-content-wrap">
                    <ul class="post-meta">
                      <li>
                        <i class="las la-calendar"></i>Jan 01 2022
                      </li>
                      <li>
                        <i class="las la-user"></i>Elliot Alderson
                      </li>
                    </ul>
                    <div class="post-content">
                      <h3>
                        <a href="blog-details.html" class="hover">
                          How to start initiating an startup in few days.
                        </a>
                      </h3>
                      <p>
                        Financial experts support or help you to to find out
                        which way you can raise your funds more...
                      </p>
                      <a href="blog-details.html" class="read-more">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 padding-15">
                <div class="post-card">
                  <div class="post-thumb">
                    <img src="/assets/img/post-2.jpg" alt="post" />
                    <a href="blog-details.html" class="post-category">
                      Startup
                    </a>
                  </div>
                  <div class="post-content-wrap">
                    <ul class="post-meta">
                      <li>
                        <i class="las la-calendar"></i>Jan 01 2022
                      </li>
                      <li>
                        <i class="las la-user"></i>Elliot Alderson
                      </li>
                    </ul>
                    <div class="post-content">
                      <h3>
                        <a href="blog-details.html">
                          Financial experts support help you to find out.
                        </a>
                      </h3>
                      <p>
                        Financial experts support or help you to to find out
                        which way you can raise your funds more...
                      </p>
                      <a href="blog-details.html" class="read-more">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 padding-15">
                <div class="post-card">
                  <div class="post-thumb">
                    <img src="/assets/img/post-3.jpg" alt="post" />
                    <a href="blog-details.html" class="post-category">
                      Finance
                    </a>
                  </div>
                  <div class="post-content-wrap">
                    <ul class="post-meta">
                      <li>
                        <i class="las la-calendar"></i>Jan 01 2022
                      </li>
                      <li>
                        <i class="las la-user"></i>Elliot Alderson
                      </li>
                    </ul>
                    <div class="post-content">
                      <h3>
                        <a href="blog-details.html">
                          Innovative business all over the world.
                        </a>
                      </h3>
                      <p>
                        Financial experts support or help you to to find out
                        which way you can raise your funds more...
                      </p>
                      <a href="blog-details.html" class="read-more">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="scrollup">
          <button id="scroll-top" className="scroll-to-top">
            <i className="las la-arrow-up"></i>
          </button>
        </div>

        <div className="dl-cursor">
          <div className="cursor-icon-holder">
            <i className="las la-times"></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
