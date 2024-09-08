import React from "react";
import Banner from "../../../components/common/banner/Banner";
import DynamicScriptsLoader from "../../../components/common/script/ScriptLoader";

const page = () => {
  return (
    <div>
      <DynamicScriptsLoader />
      <Banner title="OUR SERVICES!" />
      <section className="service-section bg-grey bd-bottom padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 padding-15">
              <div className="service-item">
                <div className="service-thumb">
                  <img src="/assets/img/service-1.jpg" alt="img" />
                  <div className="service-shape-wrap">
                    <div className="service-shape"></div>
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
                    MM Taxi Service offers reliable regular transport, ensuring consistent and comfortable rides for your daily needs.
                  </p>
                  <a className="read-more" href="service-details.html">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 padding-15">
              <div className="service-item">
                <div className="service-thumb">
                  <img src="/assets/img/service-2.jpg" alt="img" />
                  <div className="service-shape-wrap">
                    <div className="service-shape"></div>
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
                    MM Taxi Service offers reliable and punctual airport transportation, ensuring you reach your destination comfortably and on time.
                  </p>
                  <a className="read-more" href="service-details.html">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 padding-15">
              <div className="service-item">
                <div className="service-thumb">
                  <img src="/assets/img/service-3.jpg" alt="img" />
                  <div className="service-shape-wrap">
                    <div className="service-shape"></div>
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
                    MM Taxi Service offers secure and efficient luggage transport, ensuring your belongings arrive safely and on time.
                  </p>
                  <a className="read-more" href="service-details.html">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 padding-15">
              <div className="service-item">
                <div className="service-thumb">
                  <img src="/assets/img/service-4.jpg" alt="img" />
                  <div className="service-shape-wrap">
                    <div className="service-shape"></div>
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
                    MM Taxi Service provides reliable city transport, ensuring smooth and convenient travel throughout the city.
                  </p>
                  <a className="read-more" href="service-details.html">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 padding-15">
              <div className="service-item">
                <div className="service-thumb">
                  <img src="/assets/img/service-5.jpg" alt="img" />
                  <div className="service-shape-wrap">
                    <div className="service-shape"></div>
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
                    MM Taxi Service – Everything You Need for Reliable Umrah & Hajj Transportation!
                    Designed for Taxi Service Excellence!
                  </p>
                  <a className="read-more" href="service-details.html">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 padding-15">
              <div className="service-item">
                <div className="service-thumb">
                  <img src="/assets/img/service-5.jpg" alt="img" />
                  <div className="service-shape-wrap">
                    <div className="service-shape"></div>
                  </div>
                  <div className="service-car">
                    <img src="/assets/img/car-1.png" alt="car" />
                  </div>
                </div>
                <div className="service-content">
                  <h3>
                    <a href="service-details.html">Local Transport</a>
                  </h3>
                  <p>
                    MM Taxi Service – Everything You Need for Reliable Umrah & Hajj Transportation! MM
                    made for taxi service companies!
                  </p>
                  <a className="read-more" href="service-details.html">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--/.service-section--> */}

      <section className="cta-section-2 padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="cta-content">
                <h4>MM Taxi Services!</h4>
                <h2>Feel your journey with MM!</h2>
                <a href="book-taxi.html" className="default-btn">
                  Book a Taxi
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <ul className="check-list">
                <li>
                  <i className="las la-arrow-right"></i>Easy payment systems.
                </li>
                <li>
                  <i className="las la-arrow-right"></i>Make safety a top priority.
                </li>
                <li>
                  <i className="las la-arrow-right"></i>First and quick pickups.
                </li>
                <li>
                  <i className="las la-arrow-right"></i>Access MM globally.
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="cta-men"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--/.cta-section--> */}

      <section className="blog-section bg-grey padding">
        <div className="container">
          <div className="section-heading text-center mb-40">
            <h4>
              <span></span>Recent Posts!
            </h4>
            <h2>News And Insights!</h2>
            <p>
              MM Taxi Service handles trips of all complexities, offering long-term  <br />
              reliability for Umrah and Hajj.


            </p>
          </div>
          {/* <!--/.section-heading--> */}
          <div className="row grid-post">
            <div className="col-lg-4 col-md-6 padding-15">
              <div className="post-card">
                <div className="post-thumb">
                  <img src="assets/img/post-1.jpg" alt="post" />
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
                  <img src="assets/img/post-2.jpg" alt="post" />
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
                  <img src="assets/img/post-3.jpg" alt="post" />
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
};

export const metadata = {
  title: 'Our Services | MM Taxi Service',
  description: 'Explore the range of services offered by MM Taxi Service, including Umra taxi services, airport transfers, hotel transfers, and city tours in Saudi Arabia.',
  keywords: ['Umra taxi services', 'airport transfers', 'hotel transfers', 'city tours', 'Saudi Arabia'],
  author: 'MM Taxi Service',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Our Services | MM Taxi Service',
    description: 'Explore the range of services offered by MM Taxi Service, including Umra taxi services, airport transfers, hotel transfers, and city tours in Saudi Arabia.',
    url: 'https://www.mmtaxiservice.com/company/our-services',
    siteName: 'MM Taxi Service',
    type: 'website',
    image: 'https://www.mmtaxiservice.com/assets/img/logo-dark.png',
    images: [
      {
        url: 'https://www.mmtaxiservice.com/assets/img/car-2.png',
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Our Services | MM Taxi Service',
    description: 'Explore the range of services offered by MM Taxi Service, including Umra taxi services, airport transfers, hotel transfers, and city tours in Saudi Arabia.',
    image: 'https://www.mmtaxiservice.com/assets/img/logo-dark.png',
  },
  canonical: 'https://www.mmtaxiservice.com/services',
  favicon: 'https://www.mmtaxiservice.com/favicon.ico',
  appleTouchIcon: 'https://www.mmtaxiservice.com/apple-touch-icon.png',
  msApplicationTileImage: 'https://www.mmtaxiservice.com/mstile-144x144.png',
};


export default page;
