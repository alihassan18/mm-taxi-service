import React from "react";
import Banner from "../../components/common/banner/Banner";

function page() {
  return (
    <div>
      <Banner title="BLOG GRID!" />
      <section className="blog-section blog-page bg-grey padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 sm-padding">
              <div className="row grid-post">
                <div className="col-md-6 padding-15">
                  <div className="post-card">
                    <div className="post-thumb">
                      <img src="/assets/img/post-1.jpg" alt="post" />
                      <a href="blog-details.html" className="post-category">
                        Business
                      </a>
                    </div>
                    <div className="post-content-wrap">
                      <ul className="post-meta">
                        <li>
                          <i className="las la-calendar"></i>Jan 01 2022
                        </li>
                        <li>
                          <i className="las la-user"></i>Elliot Alderson
                        </li>
                      </ul>
                      <div className="post-content">
                        <h3>
                          <a href="blog-details.html" className="hover">
                            How to Start initiating an startup in few days.
                          </a>
                        </h3>
                        <p>
                          Financial experts support or help you to to find out
                          which way you can raise your funds more...
                        </p>
                        <a href="blog-details.html" className="read-more">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 padding-15">
                  <div className="post-card">
                    <div className="post-thumb">
                      <img src="/assets/img/post-2.jpg" alt="post" />
                      <a href="blog-details.html" className="post-category">
                        Startup
                      </a>
                    </div>
                    <div className="post-content-wrap">
                      <ul className="post-meta">
                        <li>
                          <i className="las la-calendar"></i>Jan 01 2022
                        </li>
                        <li>
                          <i className="las la-user"></i>Elliot Alderson
                        </li>
                      </ul>
                      <div className="post-content">
                        <h3>
                          <a href="blog-details.html">
                            Financial experts support help you to find out.
                          </a>
                        </h3>
                        <p>
                          Financial experts support or help you to to find out
                          which way you can raise your funds more...
                        </p>
                        <a href="blog-details.html" className="read-more">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 padding-15">
                  <div className="post-card">
                    <div className="post-thumb">
                      <img src="/assets/img/post-3.jpg" alt="post" />
                      <a href="blog-details.html" className="post-category">
                        Finance
                      </a>
                    </div>
                    <div className="post-content-wrap">
                      <ul className="post-meta">
                        <li>
                          <i className="las la-calendar"></i>Jan 01 2022
                        </li>
                        <li>
                          <i className="las la-user"></i>Elliot Alderson
                        </li>
                      </ul>
                      <div className="post-content">
                        <h3>
                          <a href="blog-details.html">
                            Innovative business all over the world.
                          </a>
                        </h3>
                        <p>
                          Financial experts support or help you to to find out
                          which way you can raise your funds more...
                        </p>
                        <a href="blog-details.html" className="read-more">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 padding-15">
                  <div className="post-card">
                    <div className="post-thumb">
                      <img src="/assets/img/post-4.jpg" alt="post" />
                      <a href="blog-details.html" className="post-category">
                        Consulting
                      </a>
                    </div>
                    <div className="post-content-wrap">
                      <ul className="post-meta">
                        <li>
                          <i className="las la-calendar"></i>Jan 01 2022
                        </li>
                        <li>
                          <i className="las la-user"></i>Elliot Alderson
                        </li>
                      </ul>
                      <div className="post-content">
                        <h3>
                          <a href="blog-details.html">
                            Fresh startup ideas for digital business
                          </a>
                        </h3>
                        <p>
                          Financial experts support or help you to to find out
                          which way you can raise your funds more...
                        </p>
                        <a href="blog-details.html" className="read-more">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="pagination-wrap text-left mt-30">
                <li>
                  <a href="#">
                    <i className="las la-arrow-left"></i>
                  </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#" className="active">
                    2
                  </a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">
                    <i className="las la-arrow-right"></i>
                  </a>
                </li>
              </ul>
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
