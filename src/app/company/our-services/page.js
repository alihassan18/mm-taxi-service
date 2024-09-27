import React from "react";
import Banner from "../../../components/common/banner/Banner";
import DynamicScriptsLoader from "../../../components/common/script/ScriptLoader";
import blogs from "../../../components/common/data/blog.json";
import Link from "next/link";
import serviceDetailData from "../../../components/common/data/blogDetails.json";

const servicesData = [
  {
    id: 1,
    title: "Makkah Taxi",
    description:
      "A company in Mecca, Saudi Arabia, that provides transportation services to both residents and visitors.",
    imgSrc: "/assets/img/service-1.jpg",
    carImg: "/assets/img/car-1.png",
    detailsLink: "/company/services-details", // Updated link
  },
  {
    id: 2,
    title: "Madina Taxi",
    description:
      "Operating as a taxi service in Medina, Saudi Arabia, we offer transportation services to both local residents and visitors.",
    imgSrc: "/assets/img/service-3.jpg",
    carImg: "/assets/img/car-1.png",
    detailsLink: "/company/services-details", // Updated link
  },
  {
    id: 3,
    title: "Jeddah Taxi",
    description:
      "A taxi service operates in Jeddah, Saudi Arabia, providing transportation services to both locals and tourists.",
    imgSrc: "/assets/img/jeddah.jpg",
    carImg: "/assets/img/car-1.png",
    detailsLink: "/company/services-details", // Updated link
  },
  {
    id: 4,
    title: "City Transport",
    description:
      "MM Taxi Service provides reliable city transport, ensuring smooth and convenient travel throughout the city.",
    imgSrc: "/assets/img/service-4.jpg",
    carImg: "/assets/img/car-1.png",
    detailsLink: "/company/services-details", // Updated link
  },
  {
    id: 5,
    title: "Riyadh Taxi",
    description:
      "This taxi company's transportation services are accessible to both the city's residents and tourists in Riyadh, Saudi Arabia.",
    imgSrc: "/assets/img/riyadh.jpg",
    carImg: "/assets/img/car-1.png",
    detailsLink: "/company/services-details", // Updated link
  },
  {
    id: 6,
    title: "Dammam Taxi",
    description:
      "This taxi service provides transportation to both residents and tourists in Dammam, Saudi Arabia, as part of its operations.",
    imgSrc: "/assets/img/dammim.webp",
    carImg: "/assets/img/car-1.png",
    detailsLink: "/company/services-details", // Updated link
  },
  {
    id: 7,
    title: "Jeddah Airport Taxi",
    description:
      "ChaCha Taxi Service offers reliable Jeddah Airport taxi services for hassle-free transportation to and from the airport.",
    imgSrc: "/assets/img/jaddah-airport.jpg",
    carImg: "/assets/img/car-1.png",
    detailsLink: "/company/services-details", // Updated link
  },
  {
    id: 8,
    title: "Riyadh Airport Taxi",
    description:
      "ChaCha Taxi Service offers a dependable airport taxi service for convenient and comfortable transportation.",
    imgSrc: "/assets/img/riydah-airport.png",
    carImg: "/assets/img/car-1.png",
    detailsLink: "/company/services-details", // Updated link
  },
  {
    id: 9,
    title: "Dammam Airport Taxi",
    description:
      "ChaCha Taxi Service provides reliable and efficient Dammam Airport taxi service for a hassle-free transportation experience.",
    imgSrc: "/assets/img/dammam-airportjpg.jpg",
    carImg: "/assets/img/car-1.png",
    detailsLink: "/company/services-details", // Updated link
  },
  {
    id: 10,
    title: "Madina Airport Taxi",
    description:
      "Enjoy a hassle-free transportation experience to and from Madina Airport with ChaCha Taxi Service's reliable airport taxi service.",
    imgSrc: "/assets/img/madina-airport.jpg",
    carImg: "/assets/img/car-1.png",
    detailsLink: "/company/services-details", // Updated link
  },
  {
    id: 11,
    title: "Taif Airport Taxi",
    description:
      "ChaCha Taxi Service offers a reliable and comfortable Taif Airport taxi service for convenient transportation to and from the airport.",
    imgSrc: "/assets/img/taif-airport.png",
    carImg: "/assets/img/car-1.png",
    detailsLink: "/company/services-details", // Updated link
  },
];

const page = () => {
  return (
    <div>
      <DynamicScriptsLoader />
      <Banner title="OUR SERVICES!" />
      <section className="service-section bg-grey bd-bottom padding">
        <div className="container">
          <div className="row">
            {serviceDetailData.map((service, index) => (
              <div key={index} className="col-lg-4 col-sm-6 padding-15">
                <div className="service-item ">
                  <div className="service-thumb">
                    <img src={service.imgSrc} alt={service.title} />
                    <div className="service-shape-wrap ">
                      <div className="service-shape"></div>
                    </div>
                    <div className="service-car">
                      <img src={"/assets/img/car-1.png"} alt="car" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>
                      <a href={service.detailsLink}>{service.title}</a>
                    </h3>
                    <p className="truncate">{service.description}</p>
                    <Link
                      className="read-more"
                      href={`/company/services-details/${service.slug}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!--/.service-section--> */}

      <section className="cta-section-2 padding ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="cta-content">
                <h4>MM Taxi Services!</h4>
                <h2>Feel your journey with MM!</h2>
                <Link href={"/company/book-a-ride"}>
                  <p href="book-taxi.html" className="default-btn">
                    Book a Taxi
                  </p>
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <ul className="check-list">
                <li>
                  <i className="las la-arrow-right"></i>Easy payment systems.
                </li>
                <li>
                  <i className="las la-arrow-right"></i>Make safety a top
                  priority.
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

      <section className="blog-section bg-grey padding ">
        <div className="container">
          <div className="section-heading text-center mb-40">
            <h4>
              <span></span>Recent Posts!
            </h4>
            <h2>News And Insights</h2>
            <p>
              MM Taxi Service handles trips of all complexities, offering
              long-term <br />
              reliability for Umrah and Hajj.
            </p>
          </div>
          {/* <!--/.section-heading--> */}
          <div className="row grid-post ">
            <div className="row ">
              {blogs.slice(0, 3).map((post, index) => (
                <div className="col-lg-4  col-md-6 padding-15 bd" key={index}>
                  <div className="post-card ">
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
    </div>
  );
};

export const metadata = {
  title: "Our Services | MM Taxi Service",
  description:
    "Explore the range of services offered by MM Taxi Service, including Umra taxi services, airport transfers, hotel transfers, and city tours in Saudi Arabia.",
  keywords: [
    "Umra taxi services",
    "airport transfers",
    "hotel transfers",
    "city tours",
    "Saudi Arabia",
  ],
  author: "MM Taxi Service",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Our Services | MM Taxi Service",
    description:
      "Explore the range of services offered by MM Taxi Service, including Umra taxi services, airport transfers, hotel transfers, and city tours in Saudi Arabia.",
    url: "https://www.mmtaxiservice.com/company/our-services",
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
    title: "Our Services | MM Taxi Service",
    description:
      "Explore the range of services offered by MM Taxi Service, including Umra taxi services, airport transfers, hotel transfers, and city tours in Saudi Arabia.",
    image: "https://www.mmtaxiservice.com/assets/img/logo-dark.png",
  },
  canonical: "https://www.mmtaxiservice.com/services",
  favicon: "https://www.mmtaxiservice.com/favicon.ico",
  appleTouchIcon: "https://www.mmtaxiservice.com/apple-touch-icon.png",
  msApplicationTileImage: "https://www.mmtaxiservice.com/mstile-144x144.png",
};

export default page;
