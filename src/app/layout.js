import { Inter } from "next/font/google";
import "./globals.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/fontawesome.min.css";
import "../../public/assets/css/line-awesome.min.css";
import "../../public/assets/css/keyframe-animation.css";
import "../../public/assets/css/jquery.datetimepicker.min.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/venobox.min.css";
import "../../public/assets/css/swiper.min.css";
import "../../public/assets/css/elements.css";
import "../../public/assets/css/header.css";
import "../../public/assets/css/slider.css";
import "../../public/assets/css/blog.css";
import "../../public/assets/css/main.css";
import "../../public/assets/css/responsive.css";
import Header from "../components/ui/header/Header";
import Footer from "../components/ui/footer/Footer";
import Script from "next/script";
import Head from "next/head";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

{
  /* <link rel="stylesheet" href="assets/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/animate.min.css">
<link rel="stylesheet" href="assets/css/fontawesome.min.css">
<link rel="stylesheet" href="assets/css/line-awesome.min.css">
<link rel="stylesheet" href="assets/css/keyframe-animation.css">
<link rel="stylesheet" href="assets/css/jquery.datetimepicker.min.css">
<link rel="stylesheet" href="assets/css/nice-select.css">
<link rel="stylesheet" href="assets/css/venobox.min.css">
<link rel="stylesheet" href="assets/css/swiper.min.css">
<link rel="stylesheet" href="assets/css/elements.css">
<link rel="stylesheet" href="assets/css/header.css">
<link rel="stylesheet" href="assets/css/slider.css">
<link rel="stylesheet" href="assets/css/blog.css">
<link rel="stylesheet" href="assets/css/main.css">
<link rel="stylesheet" href="assets/css/responsive.css"> */
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'MM Taxi Service',
  description: 'Reliable Umra taxi service in Saudi Arabia',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            title="google tag manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-WPHGK9HC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}



        <Header />
        {children}
        <Footer />
        <div id="popup-sidebox" className="popup-sidebox">
          <div className="sidebox-content">
            <div className="site-logo">
              <a href="index.html">
                <img src="/assets/img/logo-light.png" alt="logo" />
              </a>
            </div>
            <p>
              Everything your taxi business needs is already here! Ridek, a
              theme made for taxi service companies.
            </p>
            <ul className="sidebox-list">
              <li className="call">
                <span>Call for ride:</span>+966595783153
              </li>
              <li>
                <span>You can find us at:</span>Makkah Al Mukarma KSA
              </li>
              <li>
                <span>Email now:</span>mmtaxiservice95@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div id="sidebox-overlay"></div>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WPHGK9HC');
            `,
          }}
        />
        {/* End Google Tag Manager */}


        {/* <Script
          src="/assets/js/vendor/jquary-3.6.0.min.js"
          // strategy="lazyOnload"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/vendor/bootstrap.min.js"
          // strategy="lazyOnload"
          strategy="afterInteractive"
        ></Script>
        <Script src="/assets/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></Script>
        <Script
          src="/assets/js/vendor/jquery.ajaxchimp.min.js"
          strategy="afterInteractive"
        ></Script>
        <Script src="/assets/js/vendor/popper.min.js"></Script>
        <Script src="/assets/js/vendor/swiper.min.js"></Script>
        <Script
          src="/assets/js/vendor/jquery.datetimepicker.full.js"
          strategy="afterInteractive"
        ></Script>
        <Script src="/assets/js/vendor/jquery.nice-select.min.js"></Script>
        <Script src="/assets/js/vendor/venobox.min.js"></Script>
        <Script src="/assets/js/vendor/smooth-scroll.js"></Script>
        <Script src="/assets/js/vendor/wow.min.js"></Script>
        <Script src="/assets/js/book-ride.js"></Script>
        <Script src="/assets/js/main.js"></Script> */}
      </body>

    </html>
  );
}
