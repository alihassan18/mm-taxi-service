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
  },
  twitter: {
    card: 'summary',
    title: 'Reliable Umra Taxi Service for Pilgrims | MM Taxi Service',
    description: 'Book our trusted Umra taxi service for convenient and safe transportation in Saudi Arabia. Get airport transfers, hotel transfers, and city tours with our experienced drivers.',
    image: 'https://www.mmtaxiservice.com/assets/img/logo-dark.png',
  },
};


export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
