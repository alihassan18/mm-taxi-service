import DynamicScriptsLoader from "../components/common/script/ScriptLoader";
import HomePage from "./home/components/page";

export const metadata = {
  title: 'Reliable Umra Taxi Service for Pilgrims | MM Taxi Service',
  description: 'Book our trusted Umra taxi service for convenient and safe transportation in Saudi Arabia. Get airport transfers, hotel transfers, and city tours with our experienced drivers.',
  keywords: ['Umra taxi service', 'Saudi Arabia', 'airport transfers', 'hotel transfers', 'city tours'],
  author: 'MM Taxi Service',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Reliable Umra Taxi Service for Pilgrims | MM Taxi Service',
    description: 'Book our trusted Umra taxi service for convenient and safe transportation in Saudi Arabia. Get airport transfers, hotel transfers, and city tours with our experienced drivers.',
    url: 'https://www.mmtaxiservice.com',
    siteName: 'MM Taxi Service',
    type: 'website',
    image: 'https://www.mmtaxiservice.com/assets/img/logo-dark.png',
    images: [
      {
        url: 'https://www.mmtaxiservice.com/assets/img/car-2.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://www.mmtaxiservice.com/assets/img/car-2.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Reliable Umra Taxi Service for Pilgrims | MM Taxi Service',
    description: 'Book our trusted Umra taxi service for convenient and safe transportation in Saudi Arabia. Get airport transfers, hotel transfers, and city tours with our experienced drivers.',
    image: 'https://www.mmtaxiservice.com/assets/img/logo-dark.png',
  },
  canonical: 'https://www.mmtaxiservice.com', // canonical URL
  favicon: 'https://www.mmtaxiservice.com/favicon.ico', // favicon URL
  appleTouchIcon: 'https://www.mmtaxiservice.com/apple-touch-icon.png', // Apple touch icon
  msApplicationTileImage: 'https://www.mmtaxiservice.com/mstile-144x144.png', // Microsoft tile image
};


export default function Home() {
  return (
    <main>
      <DynamicScriptsLoader />
      <HomePage />
    </main>
  );
}
