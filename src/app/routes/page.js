
import Banner from "../../components/common/banner/Banner";
import DynamicScriptsLoader from "../../components/common/script/ScriptLoader";
import Tabs from "./Tabs";

const Route = () => {

  return (
    <div>
      <DynamicScriptsLoader />
      <Banner title="OUR DRIVERS!" />
      <section className="our-taxi padding">
        <div className="container">
          <div className="row shadow-md AtScrollHide">
            <Tabs />
          </div>
        </div>
      </section>
    </div>
  );
};

export const metadata = {
  title: 'Umra Taxi Service Routes and Pricing | MM Taxi Service',
  description: 'Explore our affordable and transparent pricing for various routes including Jeddah, Makkah, Madina, and more. Choose from a range of vehicles to suit your needs for Umra transportation.',
  keywords: [
    'Umra taxi routes',
    'taxi pricing Saudi Arabia',
    'Jeddah to Makkah taxi',
    'Makkah to Madina taxi',
    'Umra transportation rates',
    'Jeddah to Madina taxi rates',
    'MM Taxi Service'
  ],
  author: 'MM Taxi Service',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Umra Taxi Service Routes and Pricing | MM Taxi Service',
    description: 'Check out our detailed route and pricing list for all your Umra transportation needs. We offer competitive rates for all major routes including Jeddah, Makkah, Madina, and more.',
    url: 'https://www.mmtaxiservice.com/routes',
    siteName: 'MM Taxi Service',
    type: 'website',
    image: 'https://www.mmtaxiservice.com/assets/img/pricing-chart.jpg', // Replace with an image of the pricing chart
    images: [
      {
        url: 'https://www.mmtaxiservice.com/assets/img/pricing-chart.jpg', // Replace with an appropriate image URL
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Umra Taxi Service Routes and Pricing | MM Taxi Service',
    description: 'Explore competitive pricing for all Umra taxi routes. Choose the best option for your travel needs with MM Taxi Service.',
    image: 'https://www.mmtaxiservice.com/assets/img/pricing-chart.jpg',
  },
  canonical: 'https://www.mmtaxiservice.com/routes',
  favicon: 'https://www.mmtaxiservice.com/favicon.ico',
  appleTouchIcon: 'https://www.mmtaxiservice.com/apple-touch-icon.png',
  msApplicationTileImage: 'https://www.mmtaxiservice.com/mstile-144x144.png',
};


export default Route;
