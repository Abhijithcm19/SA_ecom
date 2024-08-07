import React from "react";
import { assets } from "../assets/Assets";
import "../Styles/ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileButton,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <>
      <div className="container-fluid contact-container">
        <div className="contact-bg text-center text-white d-flex flex-column justify-content-center align-items-center">
          <h3 className="fs-3 fw-light">Get in Touch with Us</h3>
          <h2 className="display-3 fw-medium py-1">Contact Us</h2>
          <p className="contact-text fw-light mx-md-5 mx-sm-4 mb-sm-5 d-none d-sm-block">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            asperiores ut, placeat corporis sit deserunt corrupti quaerat porro
            odio nisi veniam sint et labore! Adipisci Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Dolore asperiores ut, placeat
            corporis sit deserunt corrupti quaerat porro odio nisi veniam sint
            et labore! Adipisci ea nobis culpa laboriosam? Rerum! Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Dolore asperiores ut,
            placeat corporis sit deserunt corrupti quaerat porro odio nisi
            veniam sint et labore! Adipisci ea nobis culpa laboriosam? Rerum!
          </p>
        </div>

        <div className="row contact-body mx-auto mt-5">
          <div className="col-7 col-lg-7 col-md-12 col-sm-12 px-4">
            <div className="contact-form ">
              <form>
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="First Name"
                  />
                  <label for="floatingInput">First Name</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Last Name"
                  />
                  <label for="floatingInput">Last Name</label>
                </div>

                <div>
                  <div className="form-floating mb-4">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Mail Address"
                    />
                    <label for="floatingInput">Mail Address</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Last Name"
                    />
                    <label for="floatingInput">Phone</label>
                  </div>
                </div>

                <div className="form-floating mb-4">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                  ></textarea>
                  <label for="floatingTextarea">Message</label>
                </div>
                <input
                  type="submit"
                  className="btn btn-success send-btn mt-2"
                  value="Send message"
                />
              </form>

              <div className="d-sm-none d-md-block">
                <img
                  src={assets.ContactUs}
                  width={900}
                  height={350}
                  alt="img"
                />
              </div>
            </div>
          </div>

          <div className="col-5 col-lg-5 col-md-12 col-sm-12 mt-3">
            <div className="contact-info  text-center">
              <div>
                <span>
                  <FontAwesomeIcon icon={faMobileButton} size="xl" />
                </span>
                <span>Phone No.</span>
                <span className="text">1-39843-XXXXX</span>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} size="xl" />
                </span>
                <span>E-mail</span>
                <span className="text">ApsMart@company.com</span>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} size="xl" />
                </span>
                <span>Address.</span>
                <span className="text text-center px-5">
                  Shopping Co. Private Limited Buildings xyz, Corver Xyz Tech
                  Village, Kannur road, xyz village Kannur, 5602XXXX Kerala,
                  India CIN : U34XXXXXXXXXXXXX Telephone: 034-34XXXXXX /
                  034-43XXXXXXXXXX
                </span>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faClock} size="xl" />
                </span>
                <span>Opening Hours</span>
                <span className="text">Monday - Friday (9:00 AM to 10 PM)</span>
              </div>
              <div className="pt-5 ps-5">
                <h6 className="mb-4">Social </h6>
                <img
                  src={assets.X}
                  alt="img"
                  width={40}
                  height={40}
                  className="me-3 bg-dark p-2 rounded-5"
                />
                <img
                  src={assets.Fb}
                  alt="img"
                  width={40}
                  height={40}
                  className="me-3 bg-dark p-2 rounded-5"
                />
                <img
                  src={assets.YT}
                  alt="img"
                  width={40}
                  height={40}
                  className="me-3 bg-dark p-2 rounded-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
