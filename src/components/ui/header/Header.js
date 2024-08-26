import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      <header className="main-header">
        <div className="top-header">
          <div className="container">
            <div className="top-header-wrap">
              <div className="top-left">
                <p>Reliable Taxi Service & Transport Solutions!</p>
              </div>
              <div className="top-right">
                <ul className="top-header-nav">
                  <li>
                    <a href="faqs.html">Help</a>
                  </li>
                  <li>
                    <a href="contact.html">Support</a>
                  </li>
                  <li>
                    <a href="faqs.html">FAQ</a>
                  </li>
                </ul>
                <ul className="header-social-share">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mid-header">
          <div className="container">
            <div className="mid-header-wrap">
              <div className="site-logo">
                <a href="index.html">
                  <img src="/assets/img/logo-dark.png" alt="Logo" />
                </a>
              </div>

              <ul className="header-info">
                <li>
                  <div className="header-info-icon">
                    <i className="las la-phone-volume"></i>
                  </div>
                  <div className="header-info-text">
                    <h3>
                      <span>Call us now</span>
                      <a href="tel:5267214392">5267-214-392</a>
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="header-info-icon">
                    <i className="las la-envelope-open"></i>
                  </div>
                  <div className="header-info-text">
                    <h3>
                      <span>Email now</span>Info.ridek@mail.com
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="header-info-icon">
                    <i className="las la-map-marked-alt"></i>
                  </div>
                  <div className="header-info-text">
                    <h3>
                      <span>Halk Street</span>New York, USA - 2386
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav-menu-wrapper">
          <div className="container">
            <div className="nav-menu-inner">
              <div className="site-logo">
                <a href="index.html">
                  <img src="/assets/img/logo-dark.png" alt="Logo" />
                </a>
              </div>
              <div className="header-menu-wrap">
                <ul className="nav-menu">
                  <li className="dropdown_menu">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="dropdown_menu">
                    <Link href="/company">Company</Link>
                    <ul>
                      <li>
                        <Link href="/company/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link href="/company/about-company">About Company</Link>
                      </li>
                      <li>
                        <Link href="/company/our-services">Our Services</Link>
                      </li>
                      <li>
                        <Link href="/company/services-details">
                          Services Details
                        </Link>
                      </li>
                      <li>
                        <Link href="/company/book-a-ride">Book a Ride</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="active dropdown_menu">
                    <Link href="/our-taxi">Our Taxi</Link>
                    <ul>
                      <li>
                        <Link href="/our-taxi/taxi-lists">Taxi Lists</Link>
                      </li>
                      <li>
                        <a href="/our-taxi/taxi-details">Taxi Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown_menu">
                    <a href="/pages-details">Pages</a>
                    <ul>
                      <li>
                        <Link href="/pages-details/ourdrivers">
                          Our Drivers
                        </Link>
                      </li>
                      <li>
                        <Link href="/pages-details/driversdetails">
                          Driver Details
                        </Link>
                      </li>
                      <li>
                        <Link href="/pages-details/customerviews">
                          Customer Reviews
                        </Link>
                      </li>
                      <li>
                        <Link href="/pages-details/help-and-faqs">
                          Help &amp; Faq's
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown_menu">
                    <Link href="/blog">Blog</Link>
                    <ul>
                      <li>
                        <Link href="/blog/grid-post">Grid Posts</Link>
                      </li>
                      <li>
                        <Link href="/blog/classes-posts">Classic Posts</Link>
                      </li>
                      <li>
                        <Link href="/blog/details-blogs">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="menu-right-item">
                <div className="search-icon dl-search-icon">
                  <i className="las la-search"></i>
                </div>
                <div className="sidebox-icon dl-sidebox-icon">
                  <i className="las la-bars"></i>
                </div>
                <Link href="/compony/book-a-ride" className="menu-btn">
                  Book a Taxi
                </Link>
              </div>
              <div className="mobile-menu-icon">
                <div className="burger-menu">
                  <div className="line-menu line-half first-line"></div>
                  <div className="line-menu"></div>
                  <div className="line-menu line-half last-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
