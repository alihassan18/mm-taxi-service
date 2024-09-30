// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { act } from "react";
// import { useState } from "react";
// import { useMediaQuery } from "react-responsive";

// const activeLinkColor = "#198754";

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const isMdOrAbove = useMediaQuery({ query: "(min-width: 768px)" });
//   const pathname = usePathname();

//   const isPathActive = (path) => pathname === path;
//   const isDropdownActive = (paths) =>
//     paths.some((path) => pathname.startsWith(path));

//   return (
//     <div>
//       <header className="main-header">
//         {/* Top Header */}
//         <div className="top-header">
//           <div className="container">
//             <div className="top-header-wrap">
//               <div className="top-left">
//                 <p>
//                   Reliable Umrah and Hajj Taxi Service & Transport Solutions!
//                 </p>
//               </div>
//               <div className="top-right">
//                 <ul className="top-header-nav">
//                   <li>
//                     <Link href="/pages-details/help-and-faqs"> Help</Link>
//                   </li>
//                   <li>
//                     <Link href="/contact">Support</Link>
//                   </li>
//                   <li>
//                     <Link href="/pages-details/help-and-faqs"> Help FAQ</Link>
//                   </li>
//                 </ul>
//                 <ul className="header-social-share">
//                   <li>
//                     <Link
//                       href="https://www.facebook.com/share/p/oNtAg4rV9TA665Aw/?mibextid=qi2Omg"
//                       target="_blank"
//                     >
//                       <i className="fab fa-facebook-f"></i>
//                     </Link>
//                   </li>

//                   <li>
//                     <Link
//                       href="https://www.twitter.com/@MM Taxi Service"
//                       target="_blank"
//                     >
//                       <i className="fab fa-twitter"></i>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="https://www.instagram.com/mmtaxiservice?igsh=d2piMGp2NnpsbTMw "
//                       target="_blank"
//                     >
//                       <i className="fab fa-instagram"></i>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mid Header */}
//         <div className="mid-header">
//           <div className="container">
//             <div className="mid-header-wrap">
//               <div className="site-logo">
//                 <Link href="/">
//                   <img src="/assets/img/logo-dark.png" alt="Logo" />
//                 </Link>
//               </div>

//               <ul className="header-info">
//                 <li>
//                   <div className="header-info-icon">
//                     <i className="las la-phone-volume"></i>
//                   </div>
//                   <div className="header-info-text">
//                     <h3>
//                       <span>Call us now</span>
//                       <a href="tel:+966595783153">+966595783153</a>
//                     </h3>
//                   </div>
//                 </li>
//                 <li>
//                   <div className="header-info-icon">
//                     <i className="las la-envelope-open"></i>
//                   </div>
//                   <div className="header-info-text">
//                     <h3>
//                       <span>Email now</span>mmtaxiservice95@gmail.com
//                     </h3>
//                   </div>
//                 </li>
//                 <li>
//                   <div className="header-info-icon">
//                     <i className="las la-map-marked-alt"></i>
//                   </div>
//                   <div className="header-info-text">
//                     <h3>
//                       <span>Halk Street</span>Makkah Al Mukarma KSA
//                     </h3>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Navigation Menu */}
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
//                   <li className={isPathActive("/") ? "active" : ""}>
//                     <Link href="/">Home</Link>
//                   </li>
//                   {/* <li
//                     onMouseEnter={() => setIsMenuOpen(true)}
//                     onMouseLeave={() => setIsMenuOpen(false)}
//                   >
//                     <Link href="/company">Company</Link>
//                     {(isMenuOpen || isMdOrAbove) && (
//                       <ul>
//                         <li>
//                           <Link
//                             href="/company/about-us"
//                             style={{
//                               color: isPathActive("/company/about-us")
//                                 ? activeLinkColor
//                                 : "",
//                             }}
//                           >
//                             About Us
//                           </Link>
//                         </li>
//                         <li>
//                           <Link
//                             href="/company/about-company"
//                             style={{
//                               color: isPathActive("/company/about-company")
//                                 ? activeLinkColor
//                                 : "",
//                             }}
//                           >
//                             About Company
//                           </Link>
//                         </li>
//                         <li>
//                           <Link
//                             href="/company/our-services"
//                             style={{
//                               color: isPathActive("/company/our-services")
//                                 ? activeLinkColor
//                                 : "",
//                             }}
//                           >
//                             Our Services
//                           </Link>
//                         </li>
//                         <li>
//                           <Link
//                             href="/company/services-details"
//                             style={{
//                               color: isPathActive("/company/services-details")
//                                 ? activeLinkColor
//                                 : "",
//                             }}
//                           >
//                             Services Details
//                           </Link>
//                         </li>
//                         <li>
//                           <Link
//                             href="/company/book-a-ride"
//                             style={{
//                               color: isPathActive("/company/book-a-ride")
//                                 ? activeLinkColor
//                                 : "",
//                             }}
//                           >
//                             Book a Ride
//                           </Link>
//                         </li>
//                       </ul>
//                     )}
//                   </li> */}
//                   {/* <li
//                     className={
//                       isDropdownActive(["/our-taxi"])
//                         ? "active dropdown_menu"
//                         : "dropdown_menu"
//                     }
//                   >
//                     <Link href="/our-taxi">Our Taxi</Link>
//                     <ul>
//                       <li>
//                         <Link
//                           href="/our-taxi/taxi-lists"
//                           style={{
//                             color: isPathActive("/our-taxi/taxi-lists")
//                               ? activeLinkColor
//                               : "",
//                           }}
//                         >
//                           Taxi Lists
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           href="/our-taxi/taxi-details"
//                           style={{
//                             color: isPathActive("/our-taxi/taxi-details")
//                               ? activeLinkColor
//                               : "",
//                           }}
//                         >
//                           Taxi Details
//                         </Link>
//                       </li>
//                     </ul>
//                   </li> */}
//                   <li
//                     className={
//                       isPathActive("/company/our-services") ? "active" : ""
//                     }
//                   >
//                     <Link href="/company/our-services">Services</Link>
//                   </li>
//                   <li
//                     className={
//                       isPathActive("/company/about-us") ? "active" : ""
//                     }
//                   >
//                     <Link href="/company/about-us">About Us</Link>
//                   </li>
//                   <li
//                     className={
//                       isPathActive("/our-taxi/taxi-lists") ? "active" : ""
//                     }
//                   >
//                     <Link href="/our-taxi/taxi-lists">Taxi Lists</Link>
//                   </li>

//                   <li
//                     className={
//                       isDropdownActive(["/routes"])
//                         ? "active dropdown_menu"
//                         : "dropdown_menu"
//                     }
//                   >
//                     <Link href="/routes">Routes</Link>
//                   </li>
//                   {/* <li
//                     className={
//                       isDropdownActive(["/pages-details"])
//                         ? "active dropdown_menu"
//                         : "dropdown_menu"
//                     }
//                   >
//                     <Link href="/pages-details">Pages</Link>
//                     <ul>
//                       <li>
//                         <Link
//                           href="/pages-details/ourdrivers"
//                           style={{
//                             color: isPathActive("/pages-details/ourdrivers")
//                               ? activeLinkColor
//                               : "",
//                           }}
//                         >
//                           Our Drivers
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           href="/pages-details/driversdetails"
//                           style={{
//                             color: isPathActive("/pages-details/driversdetails")
//                               ? activeLinkColor
//                               : "",
//                           }}
//                         >
//                           Driver Details
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           href="/pages-details/customerviews"
//                           style={{
//                             color: isPathActive("/pages-details/customerviews")
//                               ? activeLinkColor
//                               : "",
//                           }}
//                         >
//                           Customer Reviews
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           href="/pages-details/help-and-faqs"
//                           style={{
//                             color: isPathActive("/pages-details/help-and-faqs")
//                               ? activeLinkColor
//                               : "",
//                           }}
//                         >
//                           Help & Faq&apos;s
//                         </Link>
//                       </li>
//                     </ul>
//                   </li> */}
//                   {/* <li
//                     className={
//                       isDropdownActive(["/blog"])
//                         ? "active dropdown_menu"
//                         : "dropdown_menu"
//                     }
//                   >
//                     <Link href="/blog">Blog</Link>
//                     <ul>
//                       <li>
//                         <Link
//                           href="/blog/grid-post"
//                           style={{
//                             color: isPathActive("/blog/grid-post")
//                               ? activeLinkColor
//                               : "",
//                           }}
//                         >
//                           Grid Posts
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           href="/blog/classes-posts"
//                           style={{
//                             color: isPathActive("/blog/classes-posts")
//                               ? activeLinkColor
//                               : "",
//                           }}
//                         >
//                           Classic Posts
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           href="/blog/details-blogs"
//                           style={{
//                             color: isPathActive("/blog/details-blogs")
//                               ? activeLinkColor
//                               : "",
//                           }}
//                         >
//                           Blog Details
//                         </Link>
//                       </li>
//                     </ul>
//                   </li> */}
//                   <li className={isPathActive("/contact") ? "active" : ""}>
//                     <Link href="/contact">Contact</Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="menu-right-item">
//                 {/* <div className="search-icon dl-search-icon">
//                   <i className="las la-search"></i>
//                 </div> */}
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
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const activeLinkColor = "#198754";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const isMdOrAbove = useMediaQuery({ query: "(min-width: 768px)" });
  const pathname = usePathname();

  const isPathActive = (path) => pathname === path;
  const isDropdownActive = (paths) =>
    paths.some((path) => pathname.startsWith(path));

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev); // Toggle mobile menu visibility
  };

  return (
    <div>
      <header className="main-header">
        {/* Top Header */}
        <div className="top-header">
          <div className="container">
            <div className="top-header-wrap">
              <div className="top-left">
                <p>
                  Reliable Umrah and Hajj Taxi Service & Transport Solutions!
                </p>
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
                    <Link
                      href="https://www.facebook.com/profile.php?id=61557116788383"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://x.com/MMTaxiService"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/mmtaxiservice?igsh=d2piMGp2NnpsbTMw "
                      target="_blank"
                    >
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
                      <a href="tel:+966595783153">+966595783153</a>
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
                      <span>Halk Street</span>Makkah Al Mukarma KSA
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
                <Link href="/">
                  <img src="/assets/img/logo-dark.png" alt="Logo" />
                </Link>
              </div>
              <div className="header-menu-wrap">
                <ul
                  className={`nav-menu ${isMdOrAbove ? "" : "hide-on-mobile"}`}
                >
                  <li className={isPathActive("/") ? "active" : ""}>
                    <Link href="/">Home</Link>
                  </li>
                  <li
                    className={
                      isPathActive("/company/our-services") ? "active" : ""
                    }
                  >
                    <Link href="/company/our-services">Services</Link>
                  </li>
                  <li
                    className={
                      isPathActive("/company/about-us") ? "active" : ""
                    }
                  >
                    <Link href="/company/about-us">About Us</Link>
                  </li>
                  <li
                    className={
                      isPathActive("/our-taxi/taxi-lists") ? "active" : ""
                    }
                  >
                    <Link href="/our-taxi/taxi-lists">Taxi Lists</Link>
                  </li>
                  <li
                    className={
                      isDropdownActive(["/routes"])
                        ? "active dropdown_menu"
                        : "dropdown_menu"
                    }
                  >
                    <Link href="/routes">Routes</Link>
                  </li>
                  <li className={isPathActive("/contact") ? "active" : ""}>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              <div className="menu-right-item">
                <div className="sidebox-icon dl-sidebox-icon">
                  <i className="las la-bars"></i>
                </div>
                <Link href="/company/book-a-ride" className="menu-btn">
                  Book a Taxi
                </Link>
              </div>

              {/* Mobile Menu Icon */}
              <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                <div
                  className={`burger-menu ${isMobileMenuOpen ? "open" : ""}`}
                >
                  <div className="line-menu line-half first-line"></div>
                  <div className="line-menu"></div>
                  <div className="line-menu line-half last-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="container">
            <ul className="mobile-nav">
              <li className={isPathActive("/") ? "active" : ""}>
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li
                className={
                  isPathActive("/company/our-services") ? "active" : ""
                }
              >
                <Link
                  href="/company/our-services"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li className={isPathActive("/company/about-us") ? "active" : ""}>
                <Link
                  href="/company/about-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li
                className={isPathActive("/our-taxi/taxi-lists") ? "active" : ""}
              >
                <Link
                  href="/our-taxi/taxi-lists"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Taxi Lists
                </Link>
              </li>
              <li className={isDropdownActive(["/routes"]) ? "active" : ""}>
                <Link href="/routes" onClick={() => setIsMobileMenuOpen(false)}>
                  Routes
                </Link>
              </li>
              <li className={isPathActive("/contact") ? "active" : ""}>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
