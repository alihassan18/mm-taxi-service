"use client";
import { useState } from "react";
import CamrySonata from "./CamrySonata";
import Hyundai from "./Hyundai";

import Gmc22Modal from "./Gmc22Modal";
import Hiace from "./Hiace";
import Coaster from "./Coaster";
import Bus from "./Bus";
import Banner from "../../components/common/banner/Banner";
import Gmc from "./Gmc";

const Route = () => {
  const tabsData = [
    {
      id: "CAMRY SONATA",
      label: "CAMRY SONATA",
      content: <CamrySonata />,
    },
    {
      id: "H1 HYUNDAI",
      label: "H1 HYUNDAI",
      content: <Hyundai />,
    },
    {
      id: "GMC 2016 to 2020 model",
      label: " GMC 2016 to 2020 mode",
      content: <Gmc />,
    },
    {
      id: "GMC 2022 model",
      label: "GMC 2022 model",
      content: <Gmc22Modal />,
    },
    { id: "HIACE", label: "HIACE", content: <Hiace /> },
    { id: "COASTER", label: "COASTER", content: <Coaster /> },
    { id: "BUS", label: "BUS", content: <Bus /> },
  ];
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  return (
    <div>
      <Banner title="OUR DRIVERS!" />
      <section className="our-taxi padding">
        <div className="container">
          <div className="row shadow-md AtScrollHide">
            <div className="tabs-container">
              <div className="tabs-nav  AtScrollHide">
                {tabsData.map((tab) => (
                  <button
                    key={tab.id}
                    className={`tab-button ${activeTab === tab.id ? "active" : ""
                      }`}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="tabs-content AtScrollHide nowrap ">
                {tabsData.find((tab) => tab.id === activeTab)?.content}
              </div>
            </div>
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
  themeColor: '#333',
  appleTouchIcon: 'https://www.mmtaxiservice.com/apple-touch-icon.png',
  msApplicationTileImage: 'https://www.mmtaxiservice.com/mstile-144x144.png',
};


export default Route;
