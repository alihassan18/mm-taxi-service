"use client";
import React from "react";

function page() {
  return (
    <div>
      <div className="map-wrapper pt-90">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8826.923787362664!2d-118.27754354757262!3d34.03471770929568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1566525118697!5m2!1svi!2s"
          width="100%"
          height="400"
          frameborder="0"
          // style="border:0;"
          allowfullscreen=""
        ></iframe>
      </div>

      <section className="contact-section bd-bottom padding">
        <div className="map"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-details-wrap">
                <div className="contact-title">
                  <h2>
                    Have Any <span>Questions?</span>
                  </h2>
                  <p>
                    Get in touch to discuss your employee wellbeing needs today.
                    Please give us a call, drop us an email or fill out the
                    contact form.
                  </p>
                </div>
                <ul className="contact-details">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>962 Fifth Avenue,
                    <br /> New York, NY10022
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>hello@themeaster.net <br />
                    Yourmail@gmail.com
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>(+123) 456 789 101 <br />
                    +1-302-123-4567
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-form">
                <form
                  action="contact.php"
                  method="post"
                  id="ajax_contact"
                  className="form-horizontal"
                >
                  <div className="contact-title">
                    <h2>
                      Contact With Us! <span></span>
                    </h2>
                  </div>
                  <div className="contact-form-group">
                    <div className="form-field">
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-field">
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="form-field">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-field">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="form-field message">
                      <textarea
                        id="message"
                        name="message"
                        cols="30"
                        rows="4"
                        className="form-control"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="form-field">
                      <button id="submit" className="default-btn" type="submit">
                        Send Massage
                      </button>
                    </div>
                  </div>
                  <div id="form-messages" className="alert" role="alert"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
