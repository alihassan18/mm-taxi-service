import React from "react";
import Banner from "../../../components/common/banner/Banner";

function page() {
  return (
    <div>
      <Banner title="ABOUT COMPANY!" />
      <section className="about-section padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="section-heading mb-40">
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
              <ul className="about-info">
                <li>
                  <img
                    className="owner-thumb"
                    src="/assets/img/comment-1.png"
                    alt="thumb"
                  />
                  <div className="owner">
                    <h4>Founder - CEO</h4>
                    {/* <img
                      className="signature"
                      src="/assets/img/signature.png"
                      alt="signature"
                    /> */}
                    <h2></h2>
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
            <div className="col-md-6">
              <div className="video-box-inner">
                <img src="/assets/img/about-3.jpg" alt="thumb" />
                <div className="video-box">
                  <img src="/assets/img/about-1.png" alt="thumb" />
                  <a
                    data-autoplay="true"
                    data-vbtype="video"
                    href="https://www.youtube.com/watch?v=lrf-GAYUOkQ"
                    className="dl-video-popup play-btn"
                  >
                    <video />
                    <div className="ripple"></div>
                  </a>
                </div>
              </div>
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
                        <img src="/assets/img/car-1.png" alt="car" />
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
      <section className="blog-section bg-grey padding">
        <div className="container">
          <div
            className="section-heading text-center mb-40 wow fade-in-bottom"
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

          <div className="row grid-post">
            <div className="col-lg-4 col-md-6 padding-15">
              <div className="post-card">
                <div className="post-thumb">
                  <img src="/assets/img/post-1.jpg" alt="post" />
                  <a href="blog-details.html" className="post-category">
                    Business
                  </a>
                </div>
                <div className="post-content-wrap">
                  <ul className="post-meta">
                    <li>
                      <i className="las la-calendar"></i>Jan 01 2022
                    </li>
                    <li>
                      <i className="las la-user"></i>Elliot Alderson
                    </li>
                  </ul>
                  <div className="post-content">
                    <h3>
                      <a href="blog-details.html" className="hover">
                        How to start initiating an startup in few days.
                      </a>
                    </h3>
                    <p>
                      Financial experts support or help you to to find out which
                      way you can raise your funds more...
                    </p>
                    <a href="blog-details.html" className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 padding-15">
              <div className="post-card">
                <div className="post-thumb">
                  <img src="/assets/img/post-2.jpg" alt="post" />
                  <a href="blog-details.html" className="post-category">
                    Startup
                  </a>
                </div>
                <div className="post-content-wrap">
                  <ul className="post-meta">
                    <li>
                      <i className="las la-calendar"></i>Jan 01 2022
                    </li>
                    <li>
                      <i className="las la-user"></i>Elliot Alderson
                    </li>
                  </ul>
                  <div className="post-content">
                    <h3>
                      <a href="blog-details.html">
                        Financial experts support help you to find out.
                      </a>
                    </h3>
                    <p>
                      Financial experts support or help you to to find out which
                      way you can raise your funds more...
                    </p>
                    <a href="blog-details.html" className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 padding-15">
              <div className="post-card">
                <div className="post-thumb">
                  <img src="/assets/img/post-3.jpg" alt="post" />
                  <a href="blog-details.html" className="post-category">
                    Finance
                  </a>
                </div>
                <div className="post-content-wrap">
                  <ul className="post-meta">
                    <li>
                      <i className="las la-calendar"></i>Jan 01 2022
                    </li>
                    <li>
                      <i className="las la-user"></i>Elliot Alderson
                    </li>
                  </ul>
                  <div className="post-content">
                    <h3>
                      <a href="blog-details.html">
                        Innovative business all over the world.
                      </a>
                    </h3>
                    <p>
                      Financial experts support or help you to to find out which
                      way you can raise your funds more...
                    </p>
                    <a href="blog-details.html" className="read-more">
                      Read More
                    </a>
                  </div>
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
