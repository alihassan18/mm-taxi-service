import React from "react";
import Banner from "../../components/common/banner/Banner";
import DynamicScriptsLoader from "../../components/common/script/ScriptLoader";

function page() {
  return (
    <div>
      <DynamicScriptsLoader />
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
                  Feel the difference and Relaxation with MM Taxi Company!
                </h2>
                <p>
                  At MM Taxi Service, we specialize in providing reliable and
                  efficient transportation for Umrah and Hajj pilgrims. Whether
                  it&apos;s short trips or long journeys, we ensure a seamless and
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
                    src="/assets/img/comment-1.jpg"
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
              MM Taxi Company!
            </h2>
            <p>
              MM Taxi Service handles trips of all complexities, offering
              long-term <br />
              reliability for Umrah and Hajj.
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
                        MM Taxi Service offers reliable regular transport,
                        ensuring consistent and comfortable rides for your daily
                        needs.
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
                        MM Taxi Service offers reliable and punctual airport
                        transportation, ensuring you reach your destination
                        comfortably and on time.
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
                        MM Taxi Service offers secure and efficient luggage
                        transport, ensuring your belongings arrive safely and on
                        time.
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
                        MM Taxi Service provides reliable city transport,
                        ensuring smooth and convenient travel throughout the
                        city.
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
                        MM Taxi Service – Everything You Need for Reliable Umrah
                        & Hajj Transportation! Designed for Taxi Service
                        Excellence!
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
              MM Taxi Service handles trips of all complexities, offering
              long-term <br />
              reliability for Umrah and Hajj.
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

export const metadata = {
  title: "About Us | MM Taxi Service",
  description:
    "Learn more about MM Taxi Service, our mission, vision, and the team behind our trusted Umra taxi service in Saudi Arabia.",
  keywords: [
    "About MM Taxi Service",
    "Umra taxi service",
    "Saudi Arabia",
    "team",
    "mission",
    "vision",
  ],
  author: "MM Taxi Service",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "About Us | MM Taxi Service",
    description:
      "Learn more about MM Taxi Service, our mission, vision, and the team behind our trusted Umra taxi service in Saudi Arabia.",
    url: "https://www.mmtaxiservice.com/about-us",
    siteName: "MM Taxi Service",
    type: "website",
    image: "https://www.mmtaxiservice.com/assets/img/logo-dark.png",
    images: [
      {
        url: "https://www.mmtaxiservice.com/assets/img/car-2.png",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "About Us | MM Taxi Service",
    description:
      "Learn more about MM Taxi Service, our mission, vision, and the team behind our trusted Umra taxi service in Saudi Arabia.",
    image: "https://www.mmtaxiservice.com/assets/img/logo-dark.png",
  },
  canonical: "https://www.mmtaxiservice.com/about",
  favicon: "https://www.mmtaxiservice.com/favicon.ico",
  appleTouchIcon: "https://www.mmtaxiservice.com/apple-touch-icon.png",
  msApplicationTileImage: "https://www.mmtaxiservice.com/mstile-144x144.png",
};

export default page;
