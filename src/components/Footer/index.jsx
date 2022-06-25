import photo from "../../photo/5aba028cf8e6127988f1d28d863b0987.jpg";
import facebook from "../../photo/icons8-facebook.svg";
import github from "../../photo/icons8-github.svg";
import instagram from "../../photo/icons8-instagram.svg";
import youtube from "../../photo/icons8-youtube.svg";
import "./Footer.styles.css";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>Logo</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
                dignissimos animi, odit ad totam atque repellendus aperiam
                numquam autem fugit rem, harum quo. A unde libero aut!
                Provident, tempora adipisci?
              </p>
            </div>
            <div className="col-md-3">
              <h5>CONTACT US</h5>
              <ul className="contact-us">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Dhaka, Bangladesh
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                    />
                  </svg>
                  01959109322
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  anikm2283@gmail.com
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  www.test.com
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>MY ACCOUNT</h5>
              <ul className="my-account">
                <li>My Account</li>
                <li>Wishist</li>
                <li>Shoping Cart</li>
                <li>Compare</li>
                <li>Checkout</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>SIGN UP FOR NEWSLETTER</h5>

              <div className="input-group mb-5">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  Submit
                </span>
              </div>

              <h6>FOLLOW US ON</h6>
              <ul className="follow-on">
                <li>
                  <img src={facebook} alt="" />
                </li>

                <li>
                  <img src={github} alt="" />
                </li>

                <li>
                  <img src={instagram} alt="" />
                </li>

                <li>
                  <img src={youtube} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 bottom-footer-left">
              Copyright @ 2022. All right resurved By <span>E-buy</span>
            </div>
            <div className="col-md-6  footer-bottom-right">
              <div className="ms-auto">
                <ul className="">
                  <li>
                    <img src={photo} alt="" />
                  </li>

                  <li>
                    <img src={photo} alt="" />
                  </li>

                  <li>
                    <img src={photo} alt="" />
                  </li>

                  <li>
                    <img src={photo} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
