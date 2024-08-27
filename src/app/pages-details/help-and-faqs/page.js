import React from "react";
import Banner from "../../../components/common/banner/Banner";

function page() {
  return (
    <div>
      <Banner title="HELP & FAQS!" />
      <section className="blog-section blog-page bg-grey padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 sm-padding">
              <div className="accordion faq-accordion" id="faq-accordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What makes a good taxi service?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        The restaurants in Hangzhou also catered to many
                        northern Chinese who had fled south from Kaifeng during
                        the Jurchen invasion of the 1120s, while it is also
                        known that many restaurants were run by families. The
                        restaurants in Hangzhou also catered to many northern
                        Chinese who had fled south from Kaifeng during the
                        Jurchen invasion.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What is the purpose of a taxi service?{" "}
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        The restaurants in Hangzhou also catered to many
                        northern Chinese who had fled south from Kaifeng during
                        the Jurchen invasion of the 1120s, while it is also
                        known that many restaurants were run by families. The
                        restaurants in Hangzhou also catered to many northern
                        Chinese who had fled south from Kaifeng during the
                        Jurchen invasion.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      {" "}
                      How to download the mmtaxi taxi app online?{" "}
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        The restaurants in Hangzhou also catered to many
                        northern Chinese who had fled south from Kaifeng during
                        the Jurchen invasion of the 1120s, while it is also
                        known that many restaurants were run by families. The
                        restaurants in Hangzhou also catered to many northern
                        Chinese who had fled south from Kaifeng during the
                        Jurchen invasion.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      {" "}
                      What Should I be Asking For first ride?{" "}
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        The restaurants in Hangzhou also catered to many
                        northern Chinese who had fled south from Kaifeng during
                        the Jurchen invasion of the 1120s, while it is also
                        known that many restaurants were run by families. The
                        restaurants in Hangzhou also catered to many northern
                        Chinese who had fled south from Kaifeng during the
                        Jurchen invasion.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      {" "}
                      How Many cars does mmtaxi taxi service Have?{" "}
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        The restaurants in Hangzhou also catered to many
                        northern Chinese who had fled south from Kaifeng during
                        the Jurchen invasion of the 1120s, while it is also
                        known that many restaurants were run by families. The
                        restaurants in Hangzhou also catered to many northern
                        Chinese who had fled south from Kaifeng during the
                        Jurchen invasion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sm-padding">
              <div className="sidebar-widget">
                <form action="" className="search-form">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <button className="search-btn" type="button">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="sidebar-widget">
                <div className="widget-title">
                  <h3>Categories</h3>
                </div>
                <ul className="category-list">
                  <li>
                    <a href="blog-grid.html">Business Strategy</a>
                    <span>23</span>
                  </li>
                  <li>
                    <a href="blog-grid.html">Project Management</a>
                    <span>05</span>
                  </li>
                  <li>
                    <a href="blog-grid.html">Digital Marketing</a>
                    <span>18</span>
                  </li>
                  <li>
                    <a href="blog-grid.html">Customer Experience</a>
                    <span>04</span>
                  </li>
                  <li>
                    <a href="blog-grid.html">Partnership System</a>
                    <span>15</span>
                  </li>
                </ul>
              </div>
              <div className="sidebar-widget">
                <div className="widget-title">
                  <h3>Recent Articles</h3>
                </div>
                <ul className="thumb-post">
                  <li>
                    <div className="thumb">
                      <img src="/assets/img/post-thumb-1.jpg" alt="thumb" />
                    </div>
                    <div className="thumb-post-info">
                      <h3>
                        <a href="blog-details.html">
                          How To Go About Initiating An Startup In Few Days.
                        </a>
                      </h3>
                      <a href="#" className="date">
                        Jan 01 2022
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb">
                      <img src="/assets/img/post-thumb-2.jpg" alt="thumb" />
                    </div>
                    <div className="thumb-post-info">
                      <h3>
                        <a href="blog-details.html">
                          Financial Experts Support Help You To Find Out.
                        </a>
                      </h3>
                      <a href="#" className="date">
                        Jan 01 2022
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb">
                      <img src="/assets/img/post-thumb-3.jpg" alt="thumb" />
                    </div>
                    <div className="thumb-post-info">
                      <h3>
                        <a href="blog-details.html">
                          Innovative Helping Business All Over The World.
                        </a>
                      </h3>
                      <a href="#" className="date">
                        Jan 01 2022
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="sidebar-widget">
                <div className="widget-title">
                  <h3>Tags</h3>
                </div>
                <ul className="tags">
                  <li>
                    <a href="#">business</a>
                  </li>
                  <li>
                    <a href="#">marketing</a>
                  </li>
                  <li>
                    <a href="#">startup</a>
                  </li>
                  <li>
                    <a href="#">design</a>
                  </li>
                  <li>
                    <a href="#">consulting</a>
                  </li>
                  <li>
                    <a href="#">strategy</a>
                  </li>
                  <li>
                    <a href="#">development</a>
                  </li>
                  <li>
                    <a href="#">tips</a>
                  </li>
                  <li>
                    <a href="#">Seo</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
