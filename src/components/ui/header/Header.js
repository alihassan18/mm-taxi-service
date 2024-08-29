/* eslint-disable @next/next/no-img-element */
// "use client"
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";

// function Header() {

//   const pathname = usePathname()

//   return (
//     <div>
//       <header className="main-header">
//         <div className="top-header">
//           <div className="container">
//             <div className="top-header-wrap">
//               <div className="top-left">
//                 <p>Reliable Taxi Service & Transport Solutions!</p>
//               </div>
//               <div className="top-right">
//                 <ul className="top-header-nav">
//                   <li>
//                     <a href="faqs.html">Help</a>
//                   </li>
//                   <li>
//                     <a href="contact.html">Support</a>
//                   </li>
//                   <li>
//                     <a href="faqs.html">FAQ</a>
//                   </li>
//                 </ul>
//                 <ul className="header-social-share">
//                   <li>
//                     <a href="#">
//                       <i className="fab fa-facebook-f"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <i className="fab fa-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <i className="fab fa-instagram"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <i className="fab fa-linkedin"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mid-header">
//           <div className="container">
//             <div className="mid-header-wrap">
//               <div className="site-logo">
//                 <a href="index.html">
//                   <img src="/assets/img/logo-dark.png" alt="Logo" />
//                 </a>
//               </div>

//               <ul className="header-info">
//                 <li>
//                   <div className="header-info-icon">
//                     <i className="las la-phone-volume"></i>
//                   </div>
//                   <div className="header-info-text">
//                     <h3>
//                       <span>Call us now</span>
//                       <a href="tel:5267214392">5267-214-392</a>
//                     </h3>
//                   </div>
//                 </li>
//                 <li>
//                   <div className="header-info-icon">
//                     <i className="las la-envelope-open"></i>
//                   </div>
//                   <div className="header-info-text">
//                     <h3>
//                       <span>Email now</span>Info.mmtaxi@mail.com
//                     </h3>
//                   </div>
//                 </li>
//                 <li>
//                   <div className="header-info-icon">
//                     <i className="las la-map-marked-alt"></i>
//                   </div>
//                   <div className="header-info-text">
//                     <h3>
//                       <span>Halk Street</span>New York, USA - 2386
//                     </h3>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="nav-menu-wrapper">
//           <div className="container">
//             <div className="nav-menu-inner">
//               <div className="site-logo">
//                 <a href="index.html">
//                   <img src="/assets/img/logo-dark.png" alt="Logo" />
//                 </a>
//               </div>
//               <div className="header-menu-wrap">
//                 <ul className="nav-menu">
//                   <li className={pathname === "/" ? "active" : "dropdown_menu"}>
//                     <Link href="/">Home</Link>
//                   </li>
//                   <li className="dropdown_menu">
//                     <Link href="/company">Company</Link>
//                     <ul>
//                       <li>
//                         <Link href="/company/about-us">About Us</Link>
//                       </li>
//                       <li>
//                         <Link href="/company/about-company">About Company</Link>
//                       </li>
//                       <li>
//                         <Link href="/company/our-services">Our Services</Link>
//                       </li>
//                       <li>
//                         <Link href="/company/services-details">
//                           Services Details
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/company/book-a-ride">Book a Ride</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className=" dropdown_menu">
//                     <Link href="/our-taxi">Our Taxi</Link>
//                     <ul>
//                       <li>
//                         <Link href="/our-taxi/taxi-lists">Taxi Lists</Link>
//                       </li>
//                       <li>
//                         <a href="/our-taxi/taxi-details">Taxi Details</a>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="dropdown_menu">
//                     <a href="/pages-details">Pages</a>
//                     <ul>
//                       <li>
//                         <Link href="/pages-details/ourdrivers">
//                           Our Drivers
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/pages-details/driversdetails">
//                           Driver Details
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/pages-details/customerviews">
//                           Customer Reviews
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/pages-details/help-and-faqs">
//                           Help &amp; Faq&apos;s
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="dropdown_menu">
//                     <Link href="/blog">Blog</Link>
//                     <ul>
//                       <li>
//                         <Link href="/blog/grid-post">Grid Posts</Link>
//                       </li>
//                       <li>
//                         <Link href="/blog/classes-posts">Classic Posts</Link>
//                       </li>
//                       <li>
//                         <Link href="/blog/details-blogs">Blog Details</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <Link href="/contact">Contact</Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="menu-right-item">
//                 <div className="search-icon dl-search-icon">
//                   <i className="las la-search"></i>
//                 </div>
//                 <div className="sidebox-icon dl-sidebox-icon">
//                   <i className="las la-bars"></i>
//                 </div>
//                 <Link href="/company/book-a-ride" className="menu-btn">
//                   Book a Taxi
//                 </Link>
//               </div>
//               <div className="mobile-menu-icon">
//                 <div className="burger-menu">
//                   <div className="line-menu line-half first-line"></div>
//                   <div className="line-menu"></div>
//                   <div className="line-menu line-half last-line"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Header;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { act } from "react";

const activeLinkColor = "#ff9900";

function Header() {
  const pathname = usePathname();

  const isPathActive = (path) => pathname === path;
  const isDropdownActive = (paths) =>
    paths.some((path) => pathname.startsWith(path));

  return (
    <div>
      <header className="main-header">
        {/* Top Header */}
        <div className="top-header">
          <div className="container">
            <div className="top-header-wrap">
              <div className="top-left">
                <p>Reliable Taxi Service & Transport Solutions!</p>
              </div>
              <div className="top-right">
                <ul className="top-header-nav">
                  <li>
                    <Link href="/pages-details/help-and-faqs"> Help</Link>
                  </li>
                  <li>
                    <Link href="/contact">Support</Link>
                  </li>
                  <li>
                    <Link href="/pages-details/help-and-faqs"> Help FAQ</Link>
                  </li>
                </ul>
                <ul className="header-social-share">
                  <li>
                    <Link href="https://www.facebook.com/MMTaxiService">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>

                  <li>
                    <Link href="https://www.twitter.com/@MM Taxi Service">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/@mmtaxiservice">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mid Header */}
        <div className="mid-header">
          <div className="container">
            <div className="mid-header-wrap">
              <div className="site-logo">
                <Link href="/">
                  <img src="/assets/img/logo-dark.png" alt="Logo" />
                </Link>
              </div>

              <ul className="header-info">
                <li>
                  <div className="header-info-icon">
                    <i className="las la-phone-volume"></i>
                  </div>
                  <div className="header-info-text">
                    <h3>
                      <span>Call us now</span>
                      <a href="tel:5267214392">+966595783153</a>
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="header-info-icon">
                    <i className="las la-envelope-open"></i>
                  </div>
                  <div className="header-info-text">
                    <h3>
                      <span>Email now</span>mmtaxiservice95@gmail.com
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="header-info-icon">
                    <i className="las la-map-marked-alt"></i>
                  </div>
                  <div className="header-info-text">
                    <h3>
                      <span>Halk Street</span>Makkah Al Mukarma kingdom saudi
                      Arabia
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
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
                  <li className={isPathActive("/") ? "active" : ""}>
                    <Link href="/">Home</Link>
                  </li>
                  <li
                    className={
                      isDropdownActive(["/company"])
                        ? "active dropdown_menu"
                        : "dropdown_menu"
                    }
                  >
                    <Link href="/company">Company</Link>
                    <ul>
                      <li>
                        <Link
                          href="/company/about-us"
                          style={{
                            color: isPathActive("/company/about-us")
                              ? activeLinkColor
                              : "",
                          }}
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/company/about-company"
                          style={{
                            color: isPathActive("/company/about-company")
                              ? activeLinkColor
                              : "",
                          }}
                        >
                          About Company
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/company/our-services"
                          style={{
                            color: isPathActive("/company/our-services")
                              ? activeLinkColor
                              : "",
                          }}
                        >
                          Our Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/company/services-details"
                          style={{
                            color: isPathActive("/company/services-details")
                              ? activeLinkColor
                              : "",
                          }}
                        >
                          Services Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/company/book-a-ride"
                          style={{
                            color: isPathActive("/company/book-a-ride")
                              ? activeLinkColor
                              : "",
                          }}
                        >
                          Book a Ride
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={
                      isDropdownActive(["/our-taxi"])
                        ? "active dropdown_menu"
                        : "dropdown_menu"
                    }
                  >
                    <Link href="/our-taxi">Our Taxi</Link>
                    <ul>
                      <li>
                        <Link
                          href="/our-taxi/taxi-lists"
                          style={{
                            color: isPathActive("/our-taxi/taxi-lists")
                              ? activeLinkColor
                              : "",
                          }}
                        >
                          Taxi Lists
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/our-taxi/taxi-details"
                          style={{
                            color: isPathActive("/our-taxi/taxi-details")
                              ? activeLinkColor
                              : "",
                          }}
                        >
                          Taxi Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={
                      isDropdownActive(["/pages-details"])
                        ? "active dropdown_menu"
                        : "dropdown_menu"
                    }
                  >
                    <Link href="/pages-details">Pages</Link>
                    <ul>
                      <li>
                        <Link
                          href="/pages-details/ourdrivers"
                          style={{
                            color: isPathActive("/pages-details/ourdrivers")
                              ? activeLinkColor
                              : "",
                          }}
                        >
                          Our Drivers
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/pages-details/driversdetails"
                          style={{
                            color: isPathActive("/pages-details/driversdetails")
                              ? activeLinkColor
                              : "",
                          }}
                        >
                          Driver Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/pages-details/customerviews"
                          style={{
                            color: isPathActive("/pages-details/customerviews")
                              ? activeLinkColor
                              : "",
                          }}
                        >
                          Customer Reviews
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/pages-details/help-and-faqs"
                          style={{
                            color: isPathActive("/pages-details/help-and-faqs")
                              ? activeLinkColor
                              : "",
                          }}
                        >
                          Help & Faq&apos;s
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={
                      isDropdownActive(["/blog"])
                        ? "active dropdown_menu"
                        : "dropdown_menu"
                    }
                  >
                    <Link href="/blog">Blog</Link>
                    <ul>
                      <li>
                        <Link
                          href="/blog/grid-post"
                          style={{
                            color: isPathActive("/blog/grid-post")
                              ? activeLinkColor
                              : "",
                          }}
                        >
                          Grid Posts
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/classes-posts"
                          style={{
                            color: isPathActive("/blog/classes-posts")
                              ? activeLinkColor
                              : "",
                          }}
                        >
                          Classic Posts
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/details-blogs"
                          style={{
                            color: isPathActive("/blog/details-blogs")
                              ? activeLinkColor
                              : "",
                          }}
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={isPathActive("/contact") ? "active" : ""}>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="menu-right-item">
                {/* <div className="search-icon dl-search-icon">
                  <i className="las la-search"></i>
                </div> */}
                <div className="sidebox-icon dl-sidebox-icon">
                  <i className="las la-bars"></i>
                </div>
                <Link href="/company/book-a-ride" className="menu-btn">
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
