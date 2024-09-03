import React from "react";

function page() {
  return (
    <div>
      <div className="map-wrapper pt-90">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234301.31831330296!2d39.59558905124113!3d21.42248725872801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204a883b84f6d%3A0x6b2bc91c0a791fd7!2sMecca%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1693315134853!5m2!1sen!2sus"
          width="100%"
          height="400"
          frameborder="0"
          style={{ border: 0 }}
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
                    <i className="fas fa-map-marker-alt"></i>Makkah Al Mukarma
                    <br /> kingdom saudi Arabia
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>{" "}
                    mmtaxiservice95@gmail.com
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>+966595783153
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

export const metadata = {
  title: 'Contact Us | MM Taxi Service',
  description: 'Get in touch with MM Taxi Service for any inquiries, bookings, or feedback. We are here to assist you with our reliable Umra taxi services.',
  keywords: ['Contact MM Taxi Service', 'Umra taxi service', 'Saudi Arabia', 'customer support'],
  author: 'MM Taxi Service',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Contact Us | MM Taxi Service',
    description: 'Get in touch with MM Taxi Service for any inquiries, bookings, or feedback. We are here to assist you with our reliable Umra taxi services.',
    url: 'https://www.mmtaxiservice.com/contact',
    siteName: 'MM Taxi Service',
    type: 'website',
    image: 'https://www.mmtaxiservice.com/assets/img/logo-dark.png',
    images: [
      {
        url: 'https://www.mmtaxiservice.com/assets/img/contact-page-image.png',
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us | MM Taxi Service',
    description: 'Get in touch with MM Taxi Service for any inquiries, bookings, or feedback. We are here to assist you with our reliable Umra taxi services.',
    image: 'https://www.mmtaxiservice.com/assets/img/logo-dark.png',
  },
  canonical: 'https://www.mmtaxiservice.com/contact',
  favicon: 'https://www.mmtaxiservice.com/favicon.ico',
  appleTouchIcon: 'https://www.mmtaxiservice.com/apple-touch-icon.png',
  msApplicationTileImage: 'https://www.mmtaxiservice.com/mstile-144x144.png',
};

export default page;
