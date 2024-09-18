import { notFound } from "next/navigation";
import postsData from "../../../components/common/data/blog.json";
import Banner from "../../../components/common/banner/Banner";
import Link from "next/link";

export async function generateStaticParams() {
  return postsData.map((post) => ({
    slug: post.slug,
  }));
}
export default function BlogDetails({ params }) {
  const { slug } = params;

  // Find the post based on the slug
  const currentIndex = postsData.findIndex((post) => post.slug === slug);
  const post = postsData[currentIndex];

  // Handle not found
  if (currentIndex === -1 || !post) {
    notFound();
  }

  // Get previous and next post
  const prevPost = postsData[currentIndex - 1];
  const nextPost = postsData[currentIndex + 1];

  return (
    <div>
      <Banner title="BLOG DETAILS!" />
      <section className="blog-section blog-page bg-grey padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="post-details">
                <div className="post-thumb">
                  <img src={post.imgSrc} alt="img" />
                </div>
                <p>
                  Makkah, the holiest city in Islam, holds immense religious
                  importance for Muslims worldwide. It is home to the Kaaba, the
                  sacred structure towards which Muslims face during prayer. The
                  city’s significance dates back to the time of Prophet Ibrahim
                  (Abraham), who, with his son Ismail, is believed to have built
                  the Kaaba. Over the centuries, Makkah has evolved into the
                  focal point of Islamic devotion, especially during the Hajj
                  pilgrimage.
                </p>

                <p>
                  Millions of Muslims from every corner of the world visit
                  annually to perform Hajj and Umrah, following in the footsteps
                  of the Prophet Muhammad (PBUH), who was born in Makkah and
                  received the first revelations of the Quran in the nearby Cave
                  of Hira.
                </p>

                <blockquote>
                  <i className="fas fa-quote-right"></i>
                  Madinah, the second holiest city in Islam, is where the
                  Prophet Muhammad (PBUH) migrated to from Makkah in 622 CE,
                  marking the beginning of the Islamic calendar (Hijra).
                  <span>- Winston Churchill.</span>
                </blockquote>

                <p>
                  . Known as the "City of the Prophet," it is the site of the
                  Prophet’s Mosque (Masjid an-Nabawi), which holds immense
                  spiritual value as the resting place of Prophet Muhammad
                  (PBUH). Historically, Madinah was the first city to embrace
                  Islam and became the political and spiritual center of the
                  Muslim community. The city's peaceful atmosphere and its role
                  in the growth of Islam make it a cherished destination for
                  Muslims, particularly for those who visit during Hajj and
                  Umrah.
                </p>

                <ul className="post-details-gallery ">
                  <li>
                    <img src="/assets/img/post-4.jpg" alt="img" />
                  </li>
                  <li>
                    <img src="/assets/img/post-2.jpg" alt="img" />
                  </li>
                </ul>

                <h3>The Spiritual Journey of Hajj: Makkah and Madinah</h3>
                <p>
                  Makkah and Madinah are central to the Islamic rituals of Hajj
                  and Umrah, drawing millions of Muslims annually. While Makkah
                  hosts the Kaaba, which is circled during the Tawaf, and the
                  Mount Arafat, where pilgrims stand in prayer on the Day of
                  Arafah, Madinah offers a serene reflection of the Prophet’s
                  life and mission. Pilgrims often visit Masjid an-Nabawi in
                  Madinah to pay respects at the Prophet’s grave.
                </p>
                <p>
                  Both Makkah and Madinah are known for their breathtaking
                  Islamic architecture that seamlessly blends tradition with
                  modernity. In Makkah, the Masjid al-Haram, or the Grand
                  Mosque, is the largest mosque in the world and houses the
                  Kaaba
                </p>

                <ul className="tags">
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <a href="#">Startup</a>
                  </li>
                  <li>
                    <a href="#">Design</a>
                  </li>
                </ul>
                <ul className="post-navigation">
                  <li>
                    {prevPost && (
                      <Link href={`/blog/${prevPost.slug}`}>
                        <span>
                          <i className="las la-angle-left"></i> Previous
                        </span>
                      </Link>
                    )}
                  </li>
                  <li className="next">
                    {nextPost && (
                      <Link href={`/blog/${nextPost.slug}`}>
                        <span>
                          Next <i className="las la-angle-right"></i>
                        </span>
                      </Link>
                    )}
                  </li>
                </ul>

                {/* <div className="author-box">
                <div className="author-thumb">
                  <img src="/assets/img/auhtor.png" alt="img" />
                </div>
                <div className="author-info">
                  <h3>Elliot Alderson</h3>
                  <p>
                    Our versatile team is built of designers, developers and
                    digital marketers who all bring unique experience.
                  </p>
                  <ul className="social-icon">
                    <li>
                      <a href="#">
                        <i className="lab la-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lab la-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lab la-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lab la-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}

                {/* <h3 className="comment-title">Post Comments</h3>
              <ul className="comments-box">
                <li className="comment">
                  <div className="comment-inner">
                    <div className="comment-thumb">
                      <img src="/assets/img/comment-1.png" alt="img" />
                    </div>
                    <div className="comment-wrap">
                      <div className="comments-meta">
                        <h4>
                          Ashton Porter <span>Jan 01, 2022 at 8:00</span>
                        </h4>
                      </div>
                      <div className="comment-area">
                        <p>
                          You guys have put so much work, effort, and time
                          while designing this awesome theme I can see that
                          passion when I incorporated it into my website.
                        </p>
                        <a href="#" className="reply">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                  <ul className="children">
                    <li className="comment">
                      <div className="comment-inner">
                        <div className="comment-thumb">
                          <img src="/assets/img/comment-2.png" alt="img" />
                        </div>
                        <div className="comment-wrap">
                          <div className="comments-meta">
                            <h4>
                              Melania Trump <span>Jan 01, 2022 at 8:00</span>
                            </h4>
                          </div>
                          <div className="comment-area">
                            <p>
                              The only thing I LOVE more than this theme and
                              it’s incredible options is the support team!
                              They are freaking amazable!
                            </p>
                            <a href="#" className="reply">
                              Reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="comment">
                  <div className="comment-inner">
                    <div className="comment-thumb">
                      <img src="/assets/img/comment-3.png" alt="img" />
                    </div>
                    <div className="comment-wrap">
                      <div className="comments-meta">
                        <h4>
                          Elliot Alderson <span>Jan 01, 2022 at 8:00</span>
                        </h4>
                      </div>
                      <div className="comment-area">
                        <p>
                          Outstanding quality in this theme, brilliant Effects
                          and perfect crafted Code. We absolutely love it and
                          can highly recommend DynamicLayers!
                        </p>
                        <a href="#" className="reply">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul> */}

                {/* <h3 className="comment-title">Leave a Comment</h3>
              <form
                action="#"
                method="post"
                className="comment-form form-horizontal"
              >
                <div className="form-group row">
                  <div className="col-sm-6 padding-15">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Name*"
                      required
                    />
                  </div>
                  <div className="col-sm-6 padding-15">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email*"
                      required
                    />
                  </div>
                  <div className="col-md-12 padding-15">
                    <textarea
                      id="comment"
                      name="comment"
                      cols="30"
                      rows="5"
                      className="form-control comment"
                      placeholder="Your Comment*"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12 padding-15">
                    <button id="submit" className="default-btn" type="submit">
                      Submit Comment<span></span>
                    </button>
                    <div
                      id="form-messages"
                      className="alert"
                      role="alert"
                    ></div>
                  </div>
                </div>
              </form> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
