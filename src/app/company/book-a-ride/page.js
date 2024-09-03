import React from "react";
import Banner from "../../../components/common/banner/Banner";

const page = () => {
  return (
    <div>
      <Banner title="GET YOUR CAB!" />
      <div className="taxi-booking bg-grey padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <form action="book-ride.php" id="book-taxi-ride">
                <div className="taxi-booking-form">
                  <div className="form-field">
                    <i className="las la-user-tie"></i>
                    <input
                      type="text"
                      id="full-name"
                      name="full-name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <i className="las la-envelope-open"></i>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <i className="las la-tags"></i>
                    <select
                      name="package-type"
                      id="package-type"
                      className="niceSelect"
                    >
                      <option value="standard">Standard</option>
                      <option value="business">Business</option>
                      <option value="economy">Economy</option>
                      <option value="vip-spacial">VIP Spacial</option>
                      <option value="comfort">Comfort</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <i className="las la-user-friends"></i>
                    <select
                      name="passengers"
                      id="passengers"
                      className="niceSelect"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Person</option>
                      <option value="3">3 Person</option>
                      <option value="4">4 Person</option>
                      <option value="5">5 Person</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <i className="las la-map-marker"></i>
                    <input
                      type="text"
                      id="start-dest"
                      name="start-dest"
                      className="form-control"
                      placeholder="Start Destination"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <i className="las la-map-marker"></i>
                    <input
                      type="text"
                      id="end-dest"
                      name="end-dest"
                      className="form-control"
                      placeholder="End Destination"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <i className="las la-calendar"></i>
                    <input
                      type="text"
                      id="ride-date"
                      name="ride-date"
                      className="form-control date-picker"
                      placeholder="Select Date"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <i className="las la-clock"></i>
                    <input
                      type="text"
                      id="ride-time"
                      name="ride-time"
                      className="form-control time-picker"
                      placeholder="Select Time"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <button id="submit" className="default-btn" type="submit">
                      Book Your Taxi
                    </button>
                  </div>
                </div>
                <div id="form-messages" className="alert" role="alert"></div>
              </form>
              {/* <!-- Booking Form --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const metadata = {
  title: 'Book a Ride | MM Taxi Service',
  description: 'Easily book your Umra taxi ride with MM Taxi Service. Enjoy reliable and safe transportation in Saudi Arabia with just a few clicks. Our experienced drivers are ready to assist you.',
  keywords: ['Book a ride', 'Umra taxi service', 'Saudi Arabia', 'taxi booking', 'MM Taxi Service'],
  author: 'MM Taxi Service',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Book a Ride | MM Taxi Service',
    description: 'Easily book your Umra taxi ride with MM Taxi Service. Enjoy reliable and safe transportation in Saudi Arabia with just a few clicks. Our experienced drivers are ready to assist you.',
    url: 'https://www.mmtaxiservice.com/book-a-ride',
    siteName: 'MM Taxi Service',
    type: 'website',
    image: 'https://www.mmtaxiservice.com/assets/img/logo-dark.png',
    images: [
      {
        url: 'https://www.mmtaxiservice.com/assets/img/book-ride-image.png', // Replace with an appropriate image URL
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Book a Ride | MM Taxi Service',
    description: 'Easily book your Umra taxi ride with MM Taxi Service. Enjoy reliable and safe transportation in Saudi Arabia with just a few clicks. Our experienced drivers are ready to assist you.',
    image: 'https://www.mmtaxiservice.com/assets/img/logo-dark.png',
  },
  canonical: 'https://www.mmtaxiservice.com/book-a-ride',
  favicon: 'https://www.mmtaxiservice.com/favicon.ico',
  themeColor: '#333',
  appleTouchIcon: 'https://www.mmtaxiservice.com/apple-touch-icon.png',
  msApplicationTileImage: 'https://www.mmtaxiservice.com/mstile-144x144.png',
};


export default page;
