import React from "react";
import Banner from "../../../components/common/banner/Banner";
function page() {
  return (
    <div>
      <Banner title="SERVICES DETAILS!" />
      <section class="driver-details-section bd-bottom padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="section-heading mb-40">
                <h4>
                  <span></span>About The Driver!
                </h4>
                <h2>Mauricio Fernández</h2>
                <p>
                  We successfully cope with tasks of varying complexity, provide
                  long-term guarantees and regularly master new technologies.
                  Our portfolio includes dozens of successfully completed
                  projects of houses of different storeys, with high–quality
                  finishes and good repairs. Book your taxi from anywhare today!
                </p>
              </div>
              <ul class="about-info">
                <li>
                  <img
                    class="owner-thumb"
                    src="/assets/img/comment-1.png"
                    alt="thumb"
                  />
                  <div class="owner">
                    <h4>Founder - CEO</h4>
                    <img
                      class="signature"
                      src="/assets/img/signature.png"
                      alt="signature"
                    />
                  </div>
                </li>
                <li>
                  <h2>
                    <span>Call For Taxi</span>
                    <a href="tel:5267214392">5267-214-392</a>
                  </h2>
                </li>
              </ul>
            </div>
            <div class="col-lg-6">
              <div class="driver-details">
                <img src="/assets/img/team-details.jpg" alt="img" />
                <div class="experience-box">
                  <h3>
                    <span>12+</span>Years Of <br /> Experiences!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonial-section-2 bg-grey padding">
        <div class="container">
          <div class="section-heading text-center mb-40">
            <h4>
              <span></span>Clients Testimonial
            </h4>
            <h2>Ridek Passenger Reviews...</h2>
            <p>
              We successfully cope with tasks of varying complexity, provide
              long-term <br /> guarantees and regularly master technologies.
            </p>
          </div>
          <div class="swiper-outside testi-pagination">
            <div class="testimonial-carousel-2 swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="testi-item">
                    <div class="quote-icon">
                      <i class="las la-quote-right"></i>
                    </div>
                    <p>
                      Good to have transportation available in places and times
                      it is otherwise hard to find, but the app has always been
                      a bit difficult to use especially how it works or doesnt
                      with large font phone settings.
                    </p>
                    <div class="testi-author">
                      <div class="author-thumb">
                        <img src="/assets/img/comment-1.png" alt="author" />
                      </div>
                      <div class="author-info">
                        <h3>
                          Eredrik Johanson <span>Financial .INC</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="testi-item">
                    <div class="quote-icon">
                      <i class="las la-quote-right"></i>
                    </div>
                    <p>
                      Good to have transportation available in places and times
                      it is otherwise hard to find, but the app has always been
                      a bit difficult to use especially how it works or doesnt
                      with large font phone settings.
                    </p>
                    <div class="testi-author">
                      <div class="author-thumb">
                        <img src="/assets/img/comment-2.png" alt="author" />
                      </div>
                      <div class="author-info">
                        <h3>
                          Mauricio Fernández <span>Financial .INC</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="testi-item">
                    <div class="quote-icon">
                      <i class="las la-quote-right"></i>
                    </div>
                    <p>
                      Good to have transportation available in places and times
                      it is otherwise hard to find, but the app has always been
                      a bit difficult to use especially how it works or doesnt
                      with large font phone settings.
                    </p>
                    <div class="testi-author">
                      <div class="author-thumb">
                        <img src="/assets/img/comment-3.png" alt="author" />
                      </div>
                      <div class="author-info">
                        <h3>
                          Javier F. Arébalo <span>Financial .INC</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination text-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
