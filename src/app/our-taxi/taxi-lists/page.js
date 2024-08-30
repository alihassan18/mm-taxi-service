"use client";
import React from "react";
import Banner from "../../../components/common/banner/Banner";
import Tabs from "../../../components/ui/Tabs";
import { useState } from "react";
import CamrySonata from "../../route/CamrySonata";

// const pricingData = [
//   {
//     title: "CAMRY SONATA",
//     location: "Jeddah Airport to Makkah Hotel",
//     initialCharge: "250/SAR",
//   },
//   {
//     title: "H1 HYUNDAI",
//     location: "Jeddah Airport to Makkah Hotel",
//     initialCharge: "350/SAR",
//   },
//   {
//     title: "GMC 2016 to 2020 model",
//     location: "Jeddah Airport to Makkah Hotel",
//     initialCharge: "400/SAR",
//   },
//   {
//     title: "GMC 2022 model",
//     location: "Jeddah Airport to Makkah Hotel",
//     initialCharge: "550/SAR",
//   },
//   {
//     title: "HIACE",
//     location: "Jeddah Airport to Makkah Hotel",
//     initialCharge: "400/SAR",
//   },
//   {
//     title: "COASTER",
//     location: "Jeddah Airport to Makkah Hotel",
//     initialCharge: "800/SAR",
//   },
//   {
//     title: "BUS",
//     location: "Jeddah Airport to Makkah Hotel",
//     initialCharge: "800/SAR",
//   },
//   {
//     title: "CAMRY SONATA",
//     location: "Makkah Hotel to Jeddah Airport",
//     initialCharge: "200/SAR",
//   },
//   {
//     title: "H1 HYUNDAI",
//     location: "Makkah Hotel to Jeddah Airport",
//     initialCharge: "300/SAR",
//   },
//   {
//     title: "GMC 2016 to 2020 model",
//     location: "Makkah Hotel to Jeddah Airport",
//     initialCharge: "400/SAR",
//   },
//   {
//     title: "GMC 2022 model",
//     location: "Makkah Hotel to Jeddah Airport",
//     initialCharge: "500/SAR",
//   },
//   {
//     title: "HIACE",
//     location: "Makkah Hotel to Jeddah Airport",
//     initialCharge: "400/SAR",
//   },
//   {
//     title: "COASTER",
//     location: "Makkah Hotel to Jeddah Airport",
//     initialCharge: "700/SAR",
//   },
//   {
//     title: "BUS",
//     location: "Makkah Hotel to Jeddah Airport",
//     initialCharge: "800/SAR",
//   },
//   {
//     title: "CAMRY SONATA",
//     location: "Makkah Hotel to Madina Hotel",
//     initialCharge: "450/SAR",
//   },
//   {
//     title: "H1 HYUNDAI",
//     location: "Makkah Hotel to Madina Hotel",
//     initialCharge: "550/SAR",
//   },
//   {
//     title: "GMC 2016 to 2020 model",
//     location: "Makkah Hotel to Madina Hotel",
//     initialCharge: "800/SAR",
//   },
//   {
//     title: "GMC 2022 model",
//     location: "Makkah Hotel to Madina Hotel",
//     initialCharge: "1000/SAR",
//   },
//   {
//     title: "HIACE",
//     location: "Makkah Hotel to Madina Hotel",
//     initialCharge: "650/SAR",
//   },
//   {
//     title: "COASTER",
//     location: "Makkah Hotel to Madina Hotel",
//     initialCharge: "1100/SAR",
//   },
//   {
//     title: "BUS",
//     location: "Makkah Hotel to Madina Hotel",
//     initialCharge: "1400/SAR",
//   },
//   {
//     title: "CAMRY SONATA",
//     location: "Madina Hotel to Makkah Hotel",
//     initialCharge: "450/SAR",
//   },
//   {
//     title: "H1 HYUNDAI",
//     location: "Madina Hotel to Makkah Hotel",
//     initialCharge: "550/SAR",
//   },
//   {
//     title: "GMC 2016 to 2020 model",
//     location: "Madina Hotel to Makkah Hotel",
//     initialCharge: "800/SAR",
//   },
//   {
//     title: "GMC 2022 model",
//     location: "Madina Hotel to Makkah Hotel",
//     initialCharge: "1000/SAR",
//   },
//   {
//     title: "HIACE",
//     location: "Madina Hotel to Makkah Hotel",
//     initialCharge: "650/SAR",
//   },
//   {
//     title: "COASTER",
//     location: "Madina Hotel to Makkah Hotel",
//     initialCharge: "1100/SAR",
//   },
//   {
//     title: "BUS",
//     location: "Madina Hotel to Makkah Hotel",
//     initialCharge: "1400/SAR",
//   },
//   {
//     title: "CAMRY SONATA",
//     location: "Madina Airport to Madina Hotel",
//     initialCharge: "150/SAR",
//   },
//   {
//     title: "H1 HYUNDAI",
//     location: "Madina Airport to Madina Hotel",
//     initialCharge: "200/SAR",
//   },
//   {
//     title: "GMC 2016 to 2020 model",
//     location: "Madina Airport to Madina Hotel",
//     initialCharge: "300/SAR",
//   },
//   {
//     title: "GMC 2022 model",
//     location: "Madina Airport to Madina Hotel",
//     initialCharge: "400/SAR",
//   },
//   {
//     title: "HIACE",
//     location: "Madina Airport to Madina Hotel",
//     initialCharge: "300/SAR",
//   },
//   {
//     title: "COASTER",
//     location: "Madina Airport to Madina Hotel",
//     initialCharge: "500/SAR",
//   },
//   {
//     title: "BUS",
//     location: "Madina Airport to Madina Hotel",
//     initialCharge: "700/SAR",
//   },
//   {
//     title: "CAMRY SONATA",
//     location: "Madina Hotel to Madina Airport",
//     initialCharge: "120/SAR",
//   },
//   {
//     title: "H1 HYUNDAI",
//     location: "Madina Hotel to Madina Airport",
//     initialCharge: "150/SAR",
//   },
//   {
//     title: "GMC 2016 to 2020 model",
//     location: "Madina Hotel to Madina Airport",
//     initialCharge: "250/SAR",
//   },
//   {
//     title: "GMC 2022 model",
//     location: "Madina Hotel to Madina Airport",
//     initialCharge: "300/SAR",
//   },
//   {
//     title: "HIACE",
//     location: "Madina Hotel to Madina Airport",
//     initialCharge: "300/SAR",
//   },
//   {
//     title: "COASTER",
//     location: "Madina Hotel to Madina Airport",
//     initialCharge: "500/SAR",
//   },
//   {
//     title: "BUS",
//     location: "Madina Hotel to Madina Airport",
//     initialCharge: "700/SAR",
//   },
//   {
//     title: "CAMRY SONATA",
//     location: "Makkah Ziyarat",
//     initialCharge: "200/SAR",
//   },
//   {
//     title: "H1 HYUNDAI",
//     location: "Makkah Ziyarat",
//     initialCharge: "300/SAR",
//   },
//   {
//     title: "GMC 2016 to 2020 model",
//     location: "Makkah Ziyarat",
//     initialCharge: "350/SAR",
//   },
//   {
//     title: "GMC 2022 model",
//     location: "Makkah Ziyarat",
//     initialCharge: "500/SAR",
//   },
//   {
//     title: "HIACE",
//     location: "Makkah Ziyarat",
//     initialCharge: "400/SAR",
//   },
//   {
//     title: "COASTER",
//     location: "Makkah Ziyarat",
//     initialCharge: "600/SAR",
//   },
//   {
//     title: "BUS",
//     location: "Makkah Ziyarat",
//     initialCharge: "700/SAR",
//   },
//   {
//     title: "CAMRY SONATA",
//     location: "Madina Ziyarat",
//     initialCharge: "200/SAR",
//   },
//   {
//     title: "H1 HYUNDAI",
//     location: "Madina Ziyarat",
//     initialCharge: "250/SAR",
//   },
//   {
//     title: "GMC 2016 to 2020 model",
//     location: "Madina Ziyarat",
//     initialCharge: "350/SAR",
//   },
//   {
//     title: "GMC 2022 model",
//     location: "Madina Ziyarat",
//     initialCharge: "500/SAR",
//   },
//   {
//     title: "HIACE",
//     location: "Madina Ziyarat",
//     initialCharge: "400/SAR",
//   },
//   {
//     title: "COASTER",
//     location: "Madina Ziyarat",
//     initialCharge: "600/SAR",
//   },
//   {
//     title: "BUS",
//     location: "Madina Ziyarat",
//     initialCharge: "700/SAR",
//   },
//   {
//     title: "CAMRY SONATA",
//     location: "Jeddah Airport to Madina Hotel",
//     initialCharge: "500/SAR",
//   },
//   {
//     title: "H1 HYUNDAI",
//     location: "Jeddah Airport to Madina Hotel",
//     initialCharge: "600/SAR",
//   },
//   {
//     title: "GMC 2016 to 2020 model",
//     location: "Jeddah Airport to Madina Hotel",
//     initialCharge: "800/SAR",
//   },
//   {
//     title: "GMC 2022 model",
//     location: "Jeddah Airport to Madina Hotel",
//     initialCharge: "1000/SAR",
//   },
//   {
//     title: "HIACE",
//     location: "Jeddah Airport to Madina Hotel",
//     initialCharge: "650/SAR",
//   },
//   {
//     title: "COASTER",
//     location: "Jeddah Airport to Madina Hotel",
//     initialCharge: "1100/SAR",
//   },
//   {
//     title: "BUS",
//     location: "Jeddah Airport to Madina Hotel",
//     initialCharge: "1400/SAR",
//   },
// ];

const page = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  return (
    <div>
      <Banner title="OUR DRIVERS!" />
      <section className="our-taxi padding">
        <div className="container">
          <div className="row ">
            {/* {pricingData.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 sm-padding mb-4">
                <div className="pricing-item">
                  <div className="pricing-head-wrap">
                    <div className="pricing-car">
                      <img src="/assets/img/pricing-car.png" alt="car" />
                      <div className="price">{item.initialCharge}</div>
                    </div>
                  </div>
                  <div className="pricing-head">
                    <h3>
                      <a href="taxi-details.html">{item.title}</a>
                    </h3>
                    <span className="location">{item.location}</span>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      Initial Charge: <span>{item.initialCharge}</span>
                    </li>
                    <li>
                      Per Mile/KM: <span>$4.20</span>
                    </li>
                    <li>
                      Per Stopped Traffic: <span>$1.50</span>
                    </li>
                    <li>
                      Passengers: <span>4 Person</span>
                    </li>
                    <li>
                      <a href="book-taxi.html" className="default-btn">
                        Book Taxi Now
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
