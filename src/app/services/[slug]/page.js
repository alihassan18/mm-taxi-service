import React from "react";
import Banner from "../../../components/common/banner/Banner";
import DynamicScriptsLoader from "../../../components/common/script/ScriptLoader";
import serviceDetailData from "../../../components/common/data/blogDetails.json";

export async function generateStaticParams() {
  return serviceDetailData.map((post) => ({
    slug: post.slug,
  }));
}

// export function generateMetadata({ params, searchParams }) {
//   const { slug } = params;
//   const currentIndex = serviceDetailData.findIndex(
//     (post) =>
//       post.slug === slug ||
//       post?.postDetails?.tags?.some(
//         (tag) => tag.replace(/\s+/g, "-") === slug
//       ) ||
//       post.category.replace(/\s+/g, "-").replace(/&/g, "-and-") === slug
//   );
//   const post = serviceDetailData[currentIndex];

//   console.log(post, "post");

//   return {
//     title: `${post.title} | MM Taxi Service Blog`,
//     description: post.description,
//     keywords: post.keywords,
//     author: "MM Taxi Service",
//     robots: "index, follow",
//     viewport: "width=device-width, initial-scale=1.0",
//     openGraph: {
//       title: `${post.title} | MM Taxi Service Blog`,
//       description: post.description,
//       url: `https://www.mmtaxiservice.com/blog/${post.slug}`,
//       siteName: "MM Taxi Service Blog",
//       type: "article",
//       image:
//         "https://www.mmtaxiservice.com" + post.postDetails.postThumb.imgSrc,
//       images: post.postDetails.galleryImages.map((imgSrc) => ({
//         url: "https://www.mmtaxiservice.com" + imgSrc,
//         width: 800,
//         height: 600,
//         alt: "Image",
//       })),
//     },
//     twitter: {
//       card: "summary",
//       title: `${post.postDetails.title} | MM Taxi Service Blog`,
//       description: post.postDetails.description,
//       image: post.postDetails.postThumb.imgSrc,
//     },
//     canonical: `https://www.mmtaxiservice.com/blog/${post.slug}`,
//     favicon: "https://www.mmtaxiservice.com/favicon.ico",
//     appleTouchIcon: "https://www.mmtaxiservice.com/apple-touch-icon.png",
//     msApplicationTileImage: "https://www.mmtaxiservice.com/mstile-144x144.png",
//   };
// }

export function generateMetadata({ params, searchParams }) {
  const { slug } = params;
  const currentIndex = serviceDetailData.findIndex(
    (service) => service.slug === slug
  );
  const post = serviceDetailData[currentIndex];

  console.log(post, "post");

  return {
    title: `${post.serviceDetails.title} | MM Taxi Service`,
    description: post.serviceDetails.paragraphs,
    keywords: post.tags.join(", "),
    author: "MM Taxi Service",
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0",
    openGraph: {
      title: `${post.title} | MM Taxi Service`,
      description: post.description,
      url: `https://www.mmtaxiservice.com/${post.slug}`,
      siteName: "MM Taxi Service",
      type: "article",
      image: `https://www.mmtaxiservice.com${post.imgSrc}`,
    },
    twitter: {
      card: "summary",
      title: `${post.title} | MM Taxi Service`,
      description: post.description,
      image: post.imgSrc,
    },
    canonical: `https://www.mmtaxiservice.com/${post.slug}`,
    favicon: "https://www.mmtaxiservice.com/favicon.ico",
    appleTouchIcon: "https://www.mmtaxiservice.com/apple-touch-icon.png",
    msApplicationTileImage: "https://www.mmtaxiservice.com/mstile-144x144.png",
    alternates: {
      canonical: `https://www.mmtaxiservice.com/services-details/${post.slug}`,
    },
  };
}

const page = ({ params }) => {
  // const { slug } = params;
  // const currentIndex = serviceDetailData.findIndex(
  //   (post) => post.slug === slug
  // );
  // const post = serviceDetailData[currentIndex];

  const { slug } = params;

  const currentIndex = serviceDetailData.findIndex(
    (service) => service.slug === slug
  );

  const post = serviceDetailData[currentIndex];

  if (currentIndex === -1 || !post) {
    notFound();
  }

  // Get previous and next post
  // const prevPost = serviceDetailData[currentIndex - 1];
  // const nextPost = serviceDetailData[currentIndex + 1];

  return (
    <div>
      <DynamicScriptsLoader />
      <Banner title="SERVICES DETAILS!" headingLine1={post.title} descriptionLine1={post?.serviceDetails?.concludingParagraph} />
      <section className="service-details bg-grey padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 sm-padding">
              <div className="service-details-info">
                <img src={post.serviceDetails.image} alt="img" />
                <h2>{post.title}</h2>
                <p>{post.description}</p>

                <ul className="service-features">
                  {post.serviceDetails.serviceFeatures?.map(
                    (feature, f_index) => (
                      <li key={f_index}>
                        <div>
                          <i className={feature.icon}></i>
                        </div>
                        <div>
                          <h3>{feature.title}</h3>
                          <p>{feature.description}</p>
                        </div>
                      </li>
                    )
                  )}
                </ul>
                <p>{post.serviceDetails.concludingParagraph}</p>
                <div className="service-details-list">
                  <img src={post.serviceDetails.image} alt="img" />
                  <div>
                    <h3>{post.serviceDetails.passengerBenefits.title}</h3>
                    <p>{post.serviceDetails.passengerBenefits.description}</p>
                    <ul className="service-icon-list">
                      {post.serviceDetails.passengerBenefits.benefitsList?.map(
                        (benifits, b_index) => (
                          <li key={b_index}>
                            <i className="las la-hand-point-right"></i>
                            {benifits}.
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sm-padding">
              <div className="service-sidebar sidebar-widget">
                <div className="widget-title service-widget">
                  <h3>Categories</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Regular Transport</a>
                    <i className="las la-arrow-right"></i>
                  </li>
                  <li>
                    <a href="#">City Transport</a>
                    <i className="las la-arrow-right"></i>
                  </li>
                  <li>
                    <a href="#">Airport Transport</a>
                    <i className="las la-arrow-right"></i>
                  </li>
                  <li>
                    <a href="#">Long Journey</a>
                    <i className="las la-arrow-right"></i>
                  </li>
                  <li>
                    <a href="#">Luggage Transport</a>
                    <i className="las la-arrow-right"></i>
                  </li>
                </ul>
              </div>
              <div className="sidebar-widget banner">
                <div className="banner-info">
                  <a href="index.html">
                    <img
                      className="logo"
                      src="/assets/img/logo-light.png"
                      alt="logo"
                    />
                  </a>
                  <h3>
                    Feel your journey with <span>MM!</span>
                  </h3>
                  <p>
                    MM Taxi Service – Everything You Need for Reliable Umrah &
                    Hajj Transportation!
                  </p>
                  <h2 className="discount">
                    <span>-60%</span> Off Today!
                  </h2>
                  <a href="contact.html" className="default-btn">
                    Get Your Offer Now
                  </a>
                </div>
              </div>
              <div className="sidebar-widget">
                <div className="widget-title">
                  <h3>Tags</h3>
                </div>
                <ul className="tags">
                  {post.tags.map((benifits, b_index) => (
                    <li key={b_index}>
                      <a href="#">{benifits}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <!--Tags--> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
