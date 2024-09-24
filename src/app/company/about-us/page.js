/* eslint-disable react/no-unescaped-entities */
import React from "react";
import blogs from "../../../components/common/data/blog.json";
import Link from "next/link";
import Banner from "../../../components/common/banner/Banner";
import DynamicScriptsLoader from "../../../components/common/script/ScriptLoader";

const testimonials = [
  {
    quote:
      "Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesn't with large font phone settings.",
    authorName: "Muhammad",
    authorLastName: "Ajmal",
    authorImage: "/assets/img/ajmal.png",
  },
  {
    quote:
      "MM Taxi provides a much-needed solution by making transportation easily available in areas where it's hard to find. However, the app could use some improvements, especially when it comes to accessibility features like support for large font phone settings.",
    authorName: "Muhammad",
    authorLastName: "Arslan",
    authorImage: "/assets/img/arslan.jpg",
  },
  {
    quote:
      "Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesn't with large font phone settings.",
    authorName: "Muhammad",
    authorLastName: "Faizan",
    authorImage: "/assets/img/faizan.jpg",
  },
];
const page = () => {
  return (
    <div>
      {/* <!--/.page-header--> */}
      <DynamicScriptsLoader />
      <Banner title="ABOUT US!" />
      <section className="about-section padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-6">
              <div className="about-img">
                <img
                  className="about-img1"
                  src="/assets/img/about-1.png"
                  alt="img"
                />
                <img
                  className="about-img2"
                  src="/assets/img/about-2.png"
                  alt="img"
                />
                <figure className="round-text">
                  <img src="/assets/img/experience-text-round.png" alt="img" />
                </figure>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
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
                  it's short trips or long journeys, we ensure a seamless and
                  comfortable experience. Our team is committed to delivering
                  top-quality service with modern vehicles, ensuring your travel
                  is smooth and stress-free. Trust us for safe, timely, and
                  professional transportation during your sacred journey. Book
                  your Umrah or Hajj taxi from anywhere today!
                </p>
              </div>
              {/* <!--/.section-heading--> */}
              <ul className="about-info">
                <li>
                  <img
                    className="owner-thumb"
                    src="/assets/img/comment-1.jpg"
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
                    <a href="tel:+966595783153">+966595783153</a>
                  </h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!--/.about-section--> */}

      <section className="service-section bg-grey bd-bottom padding">
        <div className="bg-half"></div>
        <div className="container">
          <div className="section-heading text-center mb-40">
            <h4>
              <span></span>What We Offer
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
          {/* <!--/.section-heading--> */}
          <div className="swiper-outside">
            <div className="service-carousel">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
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
              <div className="swiper-pagination"></div>
              {/* <!-- Carousel Dots --> */}
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
      {/* <!--/.service-section--> */}

      <section className="testimonial-section bg-grey">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-heading mb-10">
                <h4>
                  <span></span>Clients Testimonial
                </h4>
                <h2>MM Passenger Reviews...</h2>
                <p>
                  MM Taxi Service handles trips of all complexities, offering
                  long-term reliability for Umrah and Hajj.
                </p>
              </div>
              <div className="swiper-outside testi-pagination">
                <div className="testimonial-carousel">
                  <div className="swiper-wrapper">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="swiper-slide">
                        <div className="testi-item">
                          <div className="quote-icon">
                            <i className="las la-quote-right"></i>
                          </div>
                          <p className="truncate">{testimonial.quote}</p>
                          <div className="testi-author">
                            <div className="author-thumb ">
                              <img
                                src={testimonial.authorImage}
                                alt="author"
                                height={100}
                              />
                            </div>
                            <div className="author-info">
                              <h3>
                                {testimonial.authorName}{" "}
                                <span>{testimonial.authorLastName}</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="swiper-pagination"></div>
                {/* <!-- Carousel Dots --> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-wrap">
                <div className="section-heading mb-30">
                  <h4 className="white">
                    <span></span>Why Choose Us!
                  </h4>
                  <h2 className="white">Why Ride with MM?</h2>
                  <p className="white">
                    MM Taxi Service handles trips of all complexities, offering
                    long-term, reliability for Umrah and Hajj.
                  </p>
                </div>
                {/* <!--/.section-heading--> */}
                <ul className="mmtaxi-features">
                  <li>
                    <div className="feature-icon">
                      <i className="las la-gem"></i>
                    </div>
                    <div className="feature-content">
                      <h3>Safe Guarantee</h3>
                      <p>MM Taxi Service handles trips of all complexities!</p>
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon">
                      <i className="las la-taxi"></i>
                    </div>
                    <div className="feature-content">
                      <h3>Fast Pickups</h3>
                      <p>MM Taxi Service handles trips of all complexities!</p>
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon">
                      <i className="las la-tachometer-alt"></i>
                    </div>
                    <div className="feature-content">
                      <h3>Quick Ride</h3>
                      <p>MM Taxi Service handles trips of all complexities!</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--/.testimonial-section--> */}

      {/* <section className="team-section padding">
        <div className="container">
          <div className="section-heading text-center mb-40">
            <h4>
              <span></span>Lets Go With Us!
            </h4>
            <h2>Our Expert Drivers</h2>
            <p>
              MM Taxi Service handles trips of all complexities, offering
              long-term <br />
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
      </section> */}
      {/* <!--/.team-section--> */}

      <section className="cta-section padding">
        <div className="cta-men"></div>
        <div className="container">
          <div className="cta-content">
            <h2>
              Call Us Now <span>Book Your Taxi</span> For Your Next Ride!
            </h2>
            <p>
              MM Taxi Service handles trips of all complexities, offering
              long-term, reliability for Umrah and Hajj
            </p>
            <div className="cta-call">
              <i className="las la-phone-volume"></i>
              <p>
                <span>Call For Taxi</span>
                <a href="tel:+966595783153">+966595783153</a>
              </p>
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
              MM Taxi Service handles trips of all complexities, offering
              long-term, reliability for Umrah and Hajj.
            </p>
          </div>
          {/* <!--/.section-heading--> */}
          <div className="row grid-post">
            <div className="row">
              {blogs.slice(0, 3).map((post, index) => (
                <div className="col-lg-4 col-md-6 padding-15" key={index}>
                  <div className="post-card">
                    <div className="post-thumb">
                      <img src={post.imgSrc} alt="post" />
                      <a href="blog-details.html" className="post-category">
                        {post.category}
                      </a>
                    </div>
                    <div className="post-content-wrap">
                      <ul className="post-meta">
                        <li>
                          <i className="las la-calendar"></i>
                          {post.date}
                        </li>
                        <li>
                          <i className="las la-user"></i>
                          {post.author}
                        </li>
                      </ul>
                      <div className="post-content">
                        <h3>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="read-more hover"
                          >
                            {post.title}
                          </Link>
                        </h3>
                        <p>{post.description}</p>
                        <Link href={`/blog/${post.slug}`} className="read-more">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <!--/.blog-section--> */}
    </div>
  );
};

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
    url: "https://www.mmtaxiservice.com/company/about-us",
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
