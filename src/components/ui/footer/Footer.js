import React from "react";

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
                      We successfully cope with tasks of varying complexity,
                      provide long-term guarantees and regularly master new
                      technologies.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer-call">
                    <i className="las la-phone-volume" />
                    <p>
                      <span>Call For Taxi</span>
                      <a href="tel:5267214392">5267-214-392</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/.footer-top-wrap*/}
        <div className="footer-mid-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 sm-padding">
                <div className="footer-item">
                  <div className="widget-title">
                    <h3>Working Hours</h3>
                  </div>
                  <ul className="footer-contact">
                    <li>
                      <span>Monday - Friday:</span>9.00am To 8.00pm
                    </li>
                    <li>
                      <span>Saturday:</span>10.00am To 7.30pm
                    </li>
                    <li>
                      <span>Sunday:</span>Close Day!
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 sm-padding">
                <div className="footer-item footer-list">
                  <div className="widget-title">
                    <h3>Usefull Links</h3>
                  </div>
                  <ul className="footer-links">
                    <li>
                      <a href="book-taxi.html">Taxi Booking</a>
                    </li>
                    <li>
                      <a href="faqs.html">Help Center</a>
                    </li>
                    <li>
                      <a href="about-us.html">Privacy and Policy</a>
                    </li>
                    <li>
                      <a href="about-company.html">Terms of Use</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 sm-padding">
                <div className="footer-item">
                  <div className="widget-title">
                    <h3>Head Office</h3>
                  </div>
                  <ul className="footer-contact">
                    <li>
                      <span>Location:</span>153 Williamson Plaza, Maggieberg, MT
                      09514
                    </li>
                    <li>
                      <span>Join Us:</span>Info@YourGmail24.com
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 sm-padding">
                <div className="footer-item subscribe-wrap">
                  <div className="widget-title">
                    <h3>Newsletter Signup</h3>
                  </div>
                  <form action="#" className="subscribe-form">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required=""
                    />
                    <input
                      type="hidden"
                      name="action"
                      defaultValue="mailchimpsubscribe"
                    />
                    <button className="submit">Subscribe Now</button>
                    <div className="clearfix" />
                    <div id="subscribe-result">
                      <div className="subscription-success" />
                      <div className="subscription-error" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="running-taxi">
            <div className="taxi" />
            <div className="taxi-2" />
            <div className="taxi-3" />
          </div>
        </div>
        {/*/.footer-mid-wrap*/}
        <div className="copyright-wrap">
          <div className="container">
            <p>
              © <span id="currentYear" /> DynamicLayers All Rights Reserved.
            </p>
          </div>
        </div>
        {/*/.copyright-wrap*/}
      </footer>
    </div>
  );
}

export default Footer;
