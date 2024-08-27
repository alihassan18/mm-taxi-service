import React from "react";
import Banner from "../../../components/common/banner/banner";

const page = () => {
  return (
    <div>
      <Banner title="GET YOUR CAB!" />
      <div class="taxi-booking bg-grey padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <form action="book-ride.php" id="book-taxi-ride">
                <div class="taxi-booking-form">
                  <div class="form-field">
                    <i class="las la-user-tie"></i>
                    <input
                      type="text"
                      id="full-name"
                      name="full-name"
                      class="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="form-field">
                    <i class="las la-envelope-open"></i>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div class="form-field">
                    <i class="las la-tags"></i>
                    <select
                      name="package-type"
                      id="package-type"
                      class="niceSelect"
                    >
                      <option value="standard">Standard</option>
                      <option value="business">Business</option>
                      <option value="economy">Economy</option>
                      <option value="vip-spacial">VIP Spacial</option>
                      <option value="comfort">Comfort</option>
                    </select>
                  </div>
                  <div class="form-field">
                    <i class="las la-user-friends"></i>
                    <select
                      name="passengers"
                      id="passengers"
                      class="niceSelect"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Person</option>
                      <option value="3">3 Person</option>
                      <option value="4">4 Person</option>
                      <option value="5">5 Person</option>
                    </select>
                  </div>
                  <div class="form-field">
                    <i class="las la-map-marker"></i>
                    <input
                      type="text"
                      id="start-dest"
                      name="start-dest"
                      class="form-control"
                      placeholder="Start Destination"
                      required
                    />
                  </div>
                  <div class="form-field">
                    <i class="las la-map-marker"></i>
                    <input
                      type="text"
                      id="end-dest"
                      name="end-dest"
                      class="form-control"
                      placeholder="End Destination"
                      required
                    />
                  </div>
                  <div class="form-field">
                    <i class="las la-calendar"></i>
                    <input
                      type="text"
                      id="ride-date"
                      name="ride-date"
                      class="form-control date-picker"
                      placeholder="Select Date"
                      required
                    />
                  </div>
                  <div class="form-field">
                    <i class="las la-clock"></i>
                    <input
                      type="text"
                      id="ride-time"
                      name="ride-time"
                      class="form-control time-picker"
                      placeholder="Select Time"
                      required
                    />
                  </div>
                  <div class="form-field">
                    <button id="submit" class="default-btn" type="submit">
                      Book Your Taxi
                    </button>
                  </div>
                </div>
                <div id="form-messages" class="alert" role="alert"></div>
              </form>
              {/* <!-- Booking Form --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
