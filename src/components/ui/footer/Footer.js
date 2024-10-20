import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className="footer-section">
        <div className="footer-top-wrap bg-grey">
          <div className="container">
            <div className="footer-top">
              <div className="row align-items-end">
                <div className="col-lg-8">
                  <div className="brand">
                    <a className="footer-logo" href="index.html">
                      <img src="/assets/img/logo-light.png" alt="logo" />
                    </a>
                    <p>
                      MM Taxi Service handles trips of all complexities,
                      providing long-term reliability for Umrah and Hajj.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer-call">
                    <i className="las la-phone-volume" />
                    <p>
                      <span>Call For Taxi</span>
                      <a href="tel:+966595783153">+966595783153</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Middle Wrap */}
        <div className="footer-mid-wrap">
          <div className="container">
            <div className="row">
              {/* Working Hours */}
              <div className="col-lg-3 col-sm-6 col-6 sm-padding">
                <div className="footer-item">
                  <div className="widget-title">
                    <h3>Quick Links</h3>
                  </div>
                  <ul className="footer-links">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/company/our-services">Services</a>
                    </li>
                    <li>
                      <a href="/company/about-us">About Us</a>
                    </li>
                    <li>
                      <a href="/our-taxi/taxi-lists">Taxi List</a>
                    </li>
                    <li>
                      <a href="/routes">Routes</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Useful Links */}
              <div className="col-lg-3 col-sm-6 col-6 sm-padding ">
                <div className="footer-item footer-list">
                  <div className="widget-title">
                    <h3>Services</h3>
                  </div>
                  <ul className="footer-links">
                    <li>
                      <a href="/services-details/role-of-makkah-and-madinah-in-hajj-and-umrah">
                        Makkah Taxi
                      </a>
                    </li>
                    <li>
                      <a href="/services-details/madina-taxi">Madina Taxi</a>
                    </li>
                    <li>
                      <a href="/services-details/jeddah-taxi">Jeddah Taxi</a>
                    </li>
                    <li>
                      <a href="/services-details/city-transport">
                        City Transport
                      </a>
                    </li>
                    <li>
                      <a href="/services-details/riyadh-taxi">Riyadh Taxi</a>
                    </li>
                    <li>
                      <a href="/services-details/dammam-taxi">Dammam Taxi</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Head Office */}
              <div className="col-lg-3 col-sm-12 sm-padding ">
                <div className="footer-item">
                  <div className="widget-title">
                    <h3>Head Office</h3>
                  </div>
                  <ul className="footer-contact">
                    <li>
                      <span>Location:</span> Makkah Al Mukarma, Saudi Arabia
                    </li>
                    <li>
                      <span>Join Us:</span> mmtaxiservice95@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
              {/* Newsletter Signup */}
              <div className="col-lg-3 col-sm-12 sm-padding">
                <div className="footer-item subscribe-wrap">
                  <div className="widget-title">
                    <h3>Follow Us</h3>
                  </div>
                  <ul class="icon-list">
                    <li>
                      <Link
                        href="https://www.linkedin.com/in/mmtaxiservice"
                        target="_blank"
                      >
                        <IoLogoLinkedin />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.facebook.com/profile.php?id=61557116788383"
                        target="_blank"
                      >
                        <IoLogoFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://x.com/MMTaxiService" target="_blank">
                        <AiFillTwitterCircle />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/mmtaxiservice?igsh=d2piMGp2NnpsbTMw "
                        target="_blank"
                      >
                        <RiInstagramFill />
                      </Link>
                    </li>
                  </ul>
                  <ul className="footer-contact">
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright-wrap">
          <div className="container">
            <p>
              © {new Date().getFullYear()} DynamicLayers All Rights Reserved.
            </p>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+966595783153"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="whatsapp-button" id="whatsapp-button">
            <img
              src="/assets/img/WSimages-removebg-preview.png"
              alt="WhatsApp Icon"
              className="whatsapp-icon"
            />
          </div>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
