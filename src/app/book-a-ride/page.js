import React from "react";
import Banner from "../../components/common/banner/Banner";
import DynamicScriptsLoader from "../../components/common/script/ScriptLoader";
import BookARide from './componenets/Book-a-ride'

const page = () => {
  return (
    <div>
      <DynamicScriptsLoader />
      <Banner title="GET YOUR CAB!" />
      <div className="taxi-booking bg-grey padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <BookARide />
              {/* <!-- Booking Form --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const metadata = {
  title: 'Book Umrah Ride | MM Taxi Service',
  description: 'Easily book your Umra taxi ride with MM Taxi Service. Enjoy reliable and safe transportation in Saudi Arabia with just a few clicks.',
  keywords: ['Book a ride', 'Umra taxi service', 'Saudi Arabia', 'taxi booking', 'MM Taxi Service'],
  author: 'MM Taxi Service',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Book Umrah Ride | MM Taxi Service',
    description: 'Easily book your Umra taxi ride with MM Taxi Service. Enjoy reliable and safe transportation in Saudi Arabia with just a few clicks.',
    url: 'https://www.mmtaxiservice.com/book-a-ride',
    siteName: 'MM Taxi Service',
    type: 'website',
    image: 'https://www.mmtaxiservice.com/assets/img/logo-dark.png',
    images: [
      {
        url: 'https://www.mmtaxiservice.com/assets/img/car-2.png', // Replace with an appropriate image URL
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Book Umrah Ride | MM Taxi Service',
    description: 'Easily book your Umra taxi ride with MM Taxi Service. Enjoy reliable and safe transportation in Saudi Arabia with just a few clicks.',
    image: 'https://www.mmtaxiservice.com/assets/img/logo-dark.png',
  },
  canonical: 'https://www.mmtaxiservice.com/book-a-ride',
  favicon: 'https://www.mmtaxiservice.com/favicon.ico',
  appleTouchIcon: 'https://www.mmtaxiservice.com/apple-touch-icon.png',
  msApplicationTileImage: 'https://www.mmtaxiservice.com/mstile-144x144.png',
};


export default page;
