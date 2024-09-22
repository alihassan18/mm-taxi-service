// import DynamicScriptsLoader from "../components/common/script/ScriptLoader";
import HomePage from "./home/components/HomePage";

export const metadata = {
  title: 'Book Umrah and Hajj Taxi Services Online | MM Taxi Service',
  description: 'Book your Umrah and Hajj taxi services online with us. We offer reliable and affordable rides from Makkah to Madinah and other destinations. Get a quote now!',
  keywords: ['Umra taxi service', 'Saudi Arabia', 'airport transfers', 'hotel transfers', 'city tours', 'Hajj taxi services', 'Makkah to Madinah taxi fare', 'Umrah taxi booking', 'Hajj taxi booking', 'Affordable taxi services', 'Reliable taxi services', 'Umrah and Hajj taxi services'],
  author: 'MM Taxi Service',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Book Umrah and Hajj Taxi Services Online | MM Taxi Service',
    description: 'Book your Umrah and Hajj taxi services online with us. We offer reliable and affordable rides from Makkah to Madinah and other destinations. Get a quote now!',
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
    title: 'Book Umrah and Hajj Taxi Services Online | MM Taxi Service',
    description: 'Book your Umrah and Hajj taxi services online with us. We offer reliable and affordable rides from Makkah to Madinah and other destinations. Get a quote now!',
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
      {/* <DynamicScriptsLoader /> */}
      <HomePage />
    </main>
  );
}
