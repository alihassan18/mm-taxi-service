import React from "react";
import Banner from "../../../components/common/banner/Banner";
import DynamicScriptsLoader from "../../../components/common/script/ScriptLoader";

function page() {
  return (
    <div>
      <DynamicScriptsLoader />
      <Banner title="TESTIMONIAL!" />;
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
