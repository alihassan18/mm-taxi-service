"use client";
import React from "react";
import Banner from "../../../components/common/banner/Banner";
import Link from "next/link";
import DynamicScriptsLoader from "../../../components/common/script/ScriptLoader";

const page = () => {
  const vehicles = [
    {
      name: "Camry Car",
      passengers: 4,
      luggage: 3,
      image: "/assets/img/pricing-car.png",
    },
    {
      name: "GMC- 2022",
      passengers: 7,
      luggage: 8,
      image: "/assets/img/pricing-car-1.png",
    },
    {
      name: "GMC- 2020",
      passengers: 7,
      luggage: 8,
      image: "/assets/img/pricing-car-2.png",
    },
    {
      name: "Hyundai Staria",
      passengers: 7,
      luggage: 10,
      image: "/assets/img/pricing-car-3.png",
    },
    {
      name: "Toyota HIACE",
      passengers: 11,
      luggage: 16,
      image: "/assets/img/toyotahiace.png",
    },
    {
      name: "Coaster Saloon",
      passengers: 15,
      luggage: 20,
      image: "/assets/img/pricing-car-5.png",
    },
  ];

  return (
    <div>
      <DynamicScriptsLoader />
      <Banner
        title="taxi list"
        headingLine1="Effortless Transportation Choices"
        headingLine2=" For Every Type of Traveler"
        descriptionLine1="Explore our range of taxi services that cater to individuals and groups alike."
        descriptionLine2="We guarantee a pleasant and efficient ride, no matter the distance."
      />

      <section className="our-taxi padding">
        <div className="container">
          <div className="row">
            {vehicles.map((item, key) => (
              <div className="col-lg-4 col-md-6 sm-padding mb-4" key={key}>
                <div className="pricing-item">
                  <div className="pricing-head-wrap">
                    <div className="pricing-car">
                      <img
                        src={item.image || "/assets/img/pricing-car-2.png"}
                        alt="car"
                      />
                      {/* <div className="price">$2.50/km</div> */}
                    </div>
                  </div>
                  <div className="pricing-head">
                    <h3>
                      {/* <a href="taxi-details.html"></a> */}
                      {item.name}
                    </h3>
                    {/* <span className="location">Chicago</span> */}
                  </div>
                  <ul className="pricing-list">
                    <li>
                      Initial Charge: <span>Negotiable</span>
                    </li>
                    <li>
                      Luggage: <span>{item.luggage}</span>
                    </li>
                    <li>
                      Passengers: <span>{item.passengers} Person</span>
                    </li>
                    <li>
                      <Link
                        href={`/company/book-a-ride?name=${item?.name}&passengers=${item?.passengers}`}
                        className="default-btn"
                      >
                        Book Taxi Now
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
