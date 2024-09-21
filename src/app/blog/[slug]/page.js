import { notFound } from "next/navigation";
import postsData from "../../../components/common/data/blog.json";
import Banner from "../../../components/common/banner/Banner";
// import Link from "next/link";

export async function generateStaticParams() {
  return postsData.map((post) => ({
    slug: post.slug,
  }));
}

// export const metadata = {
//   title:
//     "Explore Islamic History and Hajj & Umrah Guides | MM Taxi Service Blog",
//   description:
//     "Discover Islamic history, Hajj and Umrah guides, and more. Read our articles on the history of Makkah, tips for pilgrims, and detailed insights into Hajj and Umrah taxi services. Stay informed with MM Taxi Service blog.",
//   keywords: [
//     "Islamic history",
//     "Hajj and Umrah guides",
//     "Makkah history",
//     "Umrah taxi service",
//     "Saudi Arabia",
//     "Madinah travel",
//     "Hajj transportation",
//     "Umrah travel tips",
//     "Umrah taxi booking",
//     "Hajj taxi booking",
//     "Affordable taxi services",
//     "Reliable Hajj taxi services",
//     "Hajj and Umrah blog",
//     "Islamic articles",
//     "Makkah pilgrimage",
//   ],
//   author: "MM Taxi Service",
//   robots: "index, follow",
//   viewport: "width=device-width, initial-scale=1.0",
//   openGraph: {
//     title:
//       "Explore Islamic History and Hajj & Umrah Guides | MM Taxi Service Blog",
//     description:
//       "Read in-depth articles about the rich history of Makkah, Hajj & Umrah tips, and travel services provided by MM Taxi Service. Get inspired for your pilgrimage journey!",
//     url: "https://www.mmtaxiservice.com/blog",
//     siteName: "MM Taxi Service Blog",
//     type: "website",
//     image: "https://www.mmtaxiservice.com/assets/img/blog-banner.jpg",
//     images: [
//       {
//         url: "https://www.mmtaxiservice.com/assets/img/blog-history-makkah.jpg",
//         width: 800,
//         height: 600,
//         alt: "The Holy City of Makkah",
//       },
//       {
//         url: "https://www.mmtaxiservice.com/assets/img/blog-hajj-umrah-guide.jpg",
//         width: 1800,
//         height: 1600,
//         alt: "Comprehensive Hajj and Umrah Guide",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary",
//     title:
//       "Explore Islamic History and Hajj & Umrah Guides | MM Taxi Service Blog",
//     description:
//       "Discover engaging content about Islamic history, Makkah, Hajj and Umrah tips, and reliable taxi services for pilgrims.",
//     image: "https://www.mmtaxiservice.com/assets/img/blog-banner.jpg",
//   },
//   canonical: "https://www.mmtaxiservice.com/blog",
//   favicon: "https://www.mmtaxiservice.com/favicon.ico",
//   appleTouchIcon: "https://www.mmtaxiservice.com/apple-touch-icon.png",
//   msApplicationTileImage: "https://www.mmtaxiservice.com/mstile-144x144.png",
// };

// export const metadata = {
//   title: `${post.postDetails.title} | MM Taxi Service Blog`,
//   description: post.postDetails.description,
//   keywords: post.postDetails.keywords,
//   author: "MM Taxi Service",
//   robots: "index, follow",
//   viewport: "width=device-width, initial-scale=1.0",
//   openGraph: {
//     title: `${post.postDetails.title} | MM Taxi Service Blog`,
//     description: post.postDetails.description,
//     url: `https://www.mmtaxiservice.com/blog/${post.slug}`,
//     siteName: "MM Taxi Service Blog",
//     type: "article",
//     image: post.postDetails.postThumb.imgSrc,
//     images: post.postDetails.galleryImages.map((imgSrc) => ({
//       url: imgSrc,
//       width: 800,
//       height: 600,
//       alt: "Image",
//     })),
//   },
//   twitter: {
//     card: "summary",
//     title: `${post.postDetails.title} | MM Taxi Service Blog`,
//     description: post.postDetails.description,
//     image: post.postDetails.postThumb.imgSrc,
//   },
//   canonical: `https://www.mmtaxiservice.com/blog/${post.slug}`,
//   favicon: "https://www.mmtaxiservice.com/favicon.ico",
//   appleTouchIcon: "https://www.mmtaxiservice.com/apple-touch-icon.png",
//   msApplicationTileImage: "https://www.mmtaxiservice.com/mstile-144x144.png",
// };

export function generateMetadata({ params, searchParams }) {
  const { slug } = params
  const currentIndex = postsData.findIndex(
    (post) =>
      post.slug === slug ||
      post?.postDetails?.tags?.some(
        (tag) => tag.replace(/\s+/g, "-") === slug
      ) ||
      post.category.replace(/\s+/g, "-").replace(/&/g, "-and-") === slug
  );
  const post = postsData[currentIndex];

  return {
    title: `${post.title} | MM Taxi Service Blog`,
    description: post.description,
    keywords: post.keywords,
    author: "MM Taxi Service",
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0",
    openGraph: {
      title: `${post.title} | MM Taxi Service Blog`,
      description: post.description,
      url: `https://www.mmtaxiservice.com/blog/${post.slug}`,
      siteName: "MM Taxi Service Blog",
      type: "article",
      image: "https://www.mmtaxiservice.com" + post.postDetails.postThumb.imgSrc,
      images: post.postDetails.galleryImages.map((imgSrc) => ({
        url: "https://www.mmtaxiservice.com" + imgSrc,
        width: 800,
        height: 600,
        alt: "Image",
      })),
    },
    twitter: {
      card: "summary",
      title: `${post.postDetails.title} | MM Taxi Service Blog`,
      description: post.postDetails.description,
      image: post.postDetails.postThumb.imgSrc,
    },
    canonical: `https://www.mmtaxiservice.com/blog/${post.slug}`,
    favicon: "https://www.mmtaxiservice.com/favicon.ico",
    appleTouchIcon: "https://www.mmtaxiservice.com/apple-touch-icon.png",
    msApplicationTileImage: "https://www.mmtaxiservice.com/mstile-144x144.png",
  };
}

export default function BlogDetails({ params }) {
  const { slug } = params;

  // Find the post based on the slug;
  const currentIndex = postsData.findIndex(
    (post) =>
      post.slug === slug ||
      post?.postDetails?.tags?.some(
        (tag) => tag.replace(/\s+/g, "-") === slug
      ) ||
      post.category.replace(/\s+/g, "-").replace(/&/g, "-and-") === slug
  );
  const post = postsData[currentIndex];
  // const metadata = generateMetadata(post);
  // // Handle not found
  if (currentIndex === -1 || !post) {
    notFound();
  }

  // Get previous and next post
  // const prevPost = postsData[currentIndex - 1];
  // const nextPost = postsData[currentIndex + 1];

  return (
    <div>
      <Banner title="BLOG DETAILS!" />
      <section className="blog-section blog-page bg-grey padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="post-details">
                <div className="post-thumb">
                  <img
                    src={post.postDetails.postThumb.imgSrc}
                    alt={post.postDetails.postThumb.altText}
                  />
                </div>
                {post.postDetails.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <blockquote>
                  <i className="fas fa-quote-right"></i>
                  {post.postDetails.blockquote.quote}
                  <span> - {post.postDetails.blockquote.author}</span>
                </blockquote>
                {post.postDetails.moreParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <ul className="post-details-gallery">
                  {post.postDetails.galleryImages.map((imgSrc, index) => (
                    <li key={index}>
                      <img src={imgSrc} alt="img" />
                    </li>
                  ))}
                </ul>
                <h3>{post.postDetails.heading}</h3>
                <ul className="tags">
                  {post.postDetails.tags.map((tag, index) => (
                    <li key={index}>
                      <a href="#">{tag}</a>
                    </li>
                  ))}
                </ul>
                <ul className="post-navigation">
                  <li>
                    {post.postDetails.postNavigation.prevPost && (
                      <a
                        href={`/blog/${post.postDetails.postNavigation.prevPost.slug}`}
                      >
                        <span>
                          <i className="las la-angle-left"></i>{" "}
                          {post.postDetails.postNavigation.prevPost.text}
                        </span>
                      </a>
                    )}
                  </li>
                  <li className="next">
                    {post.postDetails.postNavigation.nextPost && (
                      <a
                        href={`/blog/${post.postDetails.postNavigation.nextPost.slug}`}
                      >
                        <span>
                          {post.postDetails.postNavigation.nextPost.text}{" "}
                          <i className="las la-angle-right"></i>
                        </span>
                      </a>
                    )}
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
