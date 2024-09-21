import React from "react";
import Banner from "../../components/common/banner/Banner";
import NoData from "../../components/ui/noData/NoData";
import DynamicScriptsLoader from "../../components/common/script/ScriptLoader";
import blogs from "../../components/common/data/blog.json";
import Link from "next/link";

function page() {
  // const [search, setSearch] = useState("");
  // const [blogData, setBlogData] = useState(blogs || []);

  const allTags = blogs.flatMap((post) => post.postDetails.tags);
  const uniqueTags = [...new Set(allTags)];

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   const findItem = blogs.filter((item) =>
  //     item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  //   );
  //   setBlogData(findItem);
  // };

  // useEffect(() => {
  //   if (search.trim() === "") {
  //     setBlogData(blogs);
  //   }
  // }, [search]);

  return (
    <div>
      <DynamicScriptsLoader />
      <Banner title="BLOG GRID!" />
      <section className="blog-section blog-page bg-grey padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 sm-padding">
              <div className="row grid-post">
                {blogs?.length > 0 ? (
                  blogs.map((post) => (
                    <div className="col-md-6 padding-15" key={post.id}>
                      <div className="post-card">
                        <div className="post-thumb">
                          <img src={post.imgSrc} alt="post" />
                          <a href={post.link} className="post-category">
                            {post.category}
                          </a>
                        </div>
                        <div className="post-content-wrap">
                          <ul className="post-meta">
                            <li>
                              <i className="las la-calendar"></i>
                              {post.date}
                            </li>
                            <li>
                              <i className="las la-user"></i>
                              {post.author}
                            </li>
                          </ul>
                          <div className="post-content">
                            <h3>
                              <Link
                                href={`/blog/${post.slug}`}
                                className="read-more hover"
                              >
                                {post.title}
                              </Link>
                            </h3>
                            <p>{post.description}</p>
                            <Link
                              href={`/blog/${post.slug}`}
                              className="read-more"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <NoData title={"No Blogs Found"} />
                )}
              </div>
              {/* <ul className="pagination-wrap text-left mt-30">
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
              </ul> */}
            </div>
            <div className="col-lg-4 sm-padding">
              <div className="sidebar-widget">
                <form className="search-form">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <button className="search-btn" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="sidebar-widget">
                <div className="widget-title">
                  <h3>Categories</h3>
                </div>
                <ul className="category-list">
                  {Object.entries(
                    blogs.reduce((acc, post) => {
                      acc[post.category] = (acc[post.category] || 0) + 1;
                      return acc;
                    }, {})
                  ).map(([category, count], cat_index) => (
                    <li key={cat_index}>
                      {/* <a href="blog-grid.html">{category}</a> */}
                      <Link
                        href={`/blog/${category
                          .replace(/\s+/g, "-")
                          .replace(/&/g, "-and-")}`}
                        className="read-more hover"
                      >
                        {category}
                      </Link>
                      <span>{count || 0}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-widget">
                <div className="widget-title">
                  <h3>Recent Articles</h3>
                </div>
                <ul className="thumb-post">
                  {blogs.map((item, i) => (
                    <li key={i}>
                      <div className="thumb">
                        <img src={item?.imgSrc_artical} alt="thumb" />
                      </div>
                      <div className="thumb-post-info">
                        <h3>
                          <Link
                            href={`/blog/${item.slug}`}
                            className="read-more hover"
                          >
                            {item.title}
                          </Link>
                        </h3>
                        <a href="#" className="date">
                          {item?.date}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-widget">
                <div className="widget-title">
                  <h3>Tags</h3>
                </div>
                <ul className="tags">
                  {uniqueTags.map((tag, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/${tag.replace(/\s+/g, "-")}`}
                        className="read-more hover"
                      >
                        {tag}
                      </Link>
                    </li>
                  ))}
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
