import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const BookingForm = () => {
  const [rideDate, setRideDate] = useState("")
  const [rideTime, setRideTime] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    packageType: "standard",
    passengers: "1",
    startDest: "",
    endDest: "",
    rideDate: "",
    rideTime: "",
  });

  const [isloading, setIsLoading] = useState(false);

  const [formMessage, setFormMessage] = useState("");

  const handleChange = (e) => {
    console.log(e.target.name, "name");

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData, "formDataformDataformData");

    const completeFormData = {
      ...formData,
      rideDate,
      rideTime,
    };

    // Example of how to send the data to an API endpoint in your Next.js app
    try {
      setIsLoading(true);
      const response = await fetch("/api/book-ride", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completeFormData),
      });

      if (response.ok) {
        toast.success("Booking successful!");
        setIsLoading(false);
      } else {
        toast.error("Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
      setIsLoading(false);
    }
  };
  console.log(formData, "formData");

  return (
    <section className="booking-section ">
      <div className="container">
        <div className="row pos-relative padding">
          <div className="col-lg-4">
            <div
              className="booking-car wow fade-in-left"
              data-wow-delay="200ms"
            ></div>
          </div>
          <div className="col-lg-8">
            <div className="booking-wrap">
              <div className="section-heading mb-30">
                <h4>
                  <span></span>Online Booking
                </h4>
                <h2 className="white">Book Your Taxi Ride</h2>
              </div>
              <form onSubmit={handleSubmit} id="book-taxi-ride">
                <div className="booking-form">
                  <div className="form-field">
                    <i className="las la-user-tie"></i>
                    <input
                      type="text"
                      id="full-name"
                      name="fullName"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.fullName}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <i className="las la-tags"></i>
                    <select
                      name="packageType"
                      id="type"
                      className="niceSelect"
                      value={formData.packageType}
                      onChange={handleChange}
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
                      value={formData.passengers}
                      onChange={handleChange}
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
                      name="startDest"
                      className="form-control"
                      placeholder="Start Destination"
                      value={formData.startDest}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <i className="las la-map-marker"></i>
                    <input
                      type="text"
                      id="end-dest"
                      name="endDest"
                      className="form-control"
                      placeholder="End Destination"
                      value={formData.endDest}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    {/* <i className="las la-calendar"></i> */}
                    <input
                      type="date"
                      id="ride-date"
                      name="rideDate"
                      className=""
                      placeholder="Select Date"
                      value={rideDate}
                      onChange={(e) => setRideDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-field">
                    {/* <i className="las la-clock"></i> */}
                    <input
                      type="time"
                      id="ride-time"
                      name="rideTime"
                      className=""
                      placeholder="Select Time"
                      value={rideTime}
                      onChange={(e) => setRideTime(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-field">
                    {isloading ? (
                      <button id="submit" className="default-btn" type="submit">
                        Loading....
                      </button>
                    ) : (
                      <Link href={"/book-a-ride"}>
                        <button
                          id="submit"
                          className="default-btn"
                          type="submit"
                        >
                          Book Your Taxi
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
                {/* {formMessage && (
                  <div id="form-messages" className="alert" role="alert">
                    {formMessage}
                  </div>
                )} */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
