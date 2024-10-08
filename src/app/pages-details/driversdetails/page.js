import React from "react";
import Banner from "../../../components/common/banner/Banner";
import DynamicScriptsLoader from "../../../components/common/script/ScriptLoader";
function page() {
  return (
    <div>
      <DynamicScriptsLoader />
      <Banner title="SERVICES DETAILS!" />
      <section className="driver-details-section bd-bottom padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading mb-40">
                <h4>
                  <span></span>About The Driver!
                </h4>
                <h2>Mauricio Fernández</h2>
                <p>
                  At MM Taxi Service, we specialize in providing reliable and
                  efficient transportation for Umrah and Hajj pilgrims. Whether
                  it's short trips or long journeys, we ensure a seamless and
                  comfortable experience. Our team is committed to delivering
                  top-quality service with modern vehicles, ensuring your travel
                  is smooth and stress-free. Trust us for safe, timely, and
                  professional transportation during your sacred journey. Book
                  your Umrah or Hajj taxi from anywhere today!
                </p>
              </div>
              <ul className="about-info">
                <li>
                  <img
                    className="owner-thumb"
                    src="/assets/img/comment-1.jpg"
                    alt="thumb"
                  />
                  <div className="owner">
                    <h4>Founder - CEO</h4>
                    <p>Samiullah</p>
                  </div>
                </li>
                <li>
                  <h2>
                    <span>Call For Taxi</span>
                    <a href="tel:+966595783153">+966595783153</a>
                  </h2>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="driver-details">
                <img src="/assets/img/team-details.jpg" alt="img" />
                <div className="experience-box">
                  <h3>
                    <span>12+</span>Years Of <br /> Experiences!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section-2 bg-grey padding">
        <div className="container">
          <div className="section-heading text-center mb-40">
            <h4>
              <span></span>Clients Testimonial
            </h4>
            <h2>MM Passenger Reviews...</h2>
            <p>
              MM Taxi Service handles trips of all complexities, provide
              long-term <br /> offering long-term reliability for Umrah and
              Hajj.
            </p>
          </div>
          <div className="swiper-outside testi-pagination">
            <div className="testimonial-carousel-2 swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testi-item">
                    <div className="quote-icon">
                      <i className="las la-quote-right"></i>
                    </div>
                    <p>
                      Good to have transportation available in places and times
                      it is otherwise hard to find, but the app has always been
                      a bit difficult to use especially how it works or doesnt
                      with large font phone settings.
                    </p>
                    <div className="testi-author">
                      <div className="author-thumb">
                        <img src="/assets/img/comment-1.jpg" alt="author" />
                      </div>
                      <div className="author-info">
                        <h3>
                          Eredrik Johanson <span>Financial .INC</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-item">
                    <div className="quote-icon">
                      <i className="las la-quote-right"></i>
                    </div>
                    <p>
                      Good to have transportation available in places and times
                      it is otherwise hard to find, but the app has always been
                      a bit difficult to use especially how it works or doesnt
                      with large font phone settings.
                    </p>
                    <div className="testi-author">
                      <div className="author-thumb">
                        <img src="/assets/img/comment-2.png" alt="author" />
                      </div>
                      <div className="author-info">
                        <h3>
                          Mauricio Fernández <span>Financial .INC</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-item">
                    <div className="quote-icon">
                      <i className="las la-quote-right"></i>
                    </div>
                    <p>
                      Good to have transportation available in places and times
                      it is otherwise hard to find, but the app has always been
                      a bit difficult to use especially how it works or doesnt
                      with large font phone settings.
                    </p>
                    <div className="testi-author">
                      <div className="author-thumb">
                        <img src="/assets/img/comment-3.png" alt="author" />
                      </div>
                      <div className="author-info">
                        <h3>
                          Javier F. Arébalo <span>Financial .INC</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination text-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
