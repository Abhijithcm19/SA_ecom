import React from "react";
import "../Styles/AboutUs.css";
import { assets } from "../assets/Assets";

const AboutUs = () => {
  return (
    <>
      <div className="  aboutUs-container">
      <div className="container about pt-5  ">
        <h2 className="heading-about d-block display-5 fw-bold text-uppercase text-center py-2 ">ABOUT OUR APZ MART COMPANY</h2>
        <p className="para-about-details d-block text-center px-5 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
          asperiores ut, placeat corporis sit deserunt corrupti quaerat porro
          odio nisi veniam sint et labore! Adipisci Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Dolore asperiores ut, placeat corporis
          sit deserunt corrupti quaerat porro odio nisi veniam sint et labore!
        </p>
        <div className="container about-us-content mt-5">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="img-about">
                <img src={assets.AboutUsImg1} alt="img" className="img-fluid imgage-content rounded-4" />
              </div>
            </div>

            <div className="col-lg-6 col-md-10">
              <div className="content-about">
                <h4 className="heading-content fs-1 fw-bold text-center text-primary px-4 py-2 ">About Us</h4>
                <p className="para-content-about text-center fw-medium px-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolore asperiores ut, placeat corporis sit deserunt corrupti
                  quaerat porro Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Dolore asperiores ut, placeat corporis sit
                  deserunt corrupti quaerat porro odio nisi veniam sint et
                  labore! Adipisci Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Dolore asperiores ut, placeat corporis sit
                  deserunt corrupti quaerat porro odio nisi veniam sint et
                  labore!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-10">
              <div className="img-about">
                <img src={assets.AboutUsImg2} alt="img" className="img-fluid imgage-content rounded-4" />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="services py-5 px-0 text-center mt-5">
        <h4 className=" text-uppercase text-success fs-2 fw-bolder">Services</h4>
        <h2 className="fs-1 fw-bold my-4 mx-0">Online Shopping & Delivery Services</h2>

        <div className="container container-services mt-5">
          <div className="row">

            <div className="col-lg-3 col-md-6 px-lg-2">
              <div className="content-services d-flex justify-content-center align-items-center flex-column px-2 py-5 rounded-5 shadow">
                <div className="img-continer">
                  <img src={assets.servicesImg1} alt="img" width={180} height={180} className="img-fluid mb-3" />
                </div>
                <h3 className="heading-shopping fs-5 fw-semibold my-1">Lorem ipsum dolor</h3>
                <p className="para-shopping fs-6 fw-normal text-secondary my-1 px-4"> 
                  Lorem ipsum dolor sit, amet consectetur 
                  placeat corporis sit
                </p>
                <button className="btn-services btn btn-outline-success d-inline-block my-1">Read More</button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 px-lg-2">
              <div className="content-services d-flex justify-content-center align-items-center flex-column px-2 py-5 rounded-5 shadow">
                <div className="img-continer">
                  <img src={assets.servicesImg2} alt="img" width={180} height={180} className="img-fluid mb-3" />
                </div>
                <h3 className="heading-shopping fs-5 fw-semibold my-1">Lorem ipsum dolor</h3>
                <p className="para-shopping fs-6 fw-normal text-secondary my-1 px-4"> 
                  Lorem ipsum dolor sit, amet consectetur 
                  placeat corporis sit
                </p>
                <button className="btn-services btn btn-outline-success d-inline-block my-1">Read More</button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 px-lg-2">
              <div className="content-services d-flex justify-content-center align-items-center flex-column px-2 py-5 rounded-5 shadow">
                <div className="img-continer">
                  <img src={assets.servicesImg3} alt="img" width={180} height={180} className="img-fluid mb-3" />
                </div>
                <h3 className="heading-shopping fs-5 fw-semibold my-1">Lorem ipsum dolor</h3>
                <p className="para-shopping fs-6 fw-normal text-secondary my-1 px-4"> 
                  Lorem ipsum dolor sit, amet consectetur 
                  placeat corporis sit
                </p>
                <button className="btn-services btn btn-outline-success d-inline-block my-1">Read More</button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 px-lg-2">
              <div className="content-services d-flex justify-content-center align-items-center flex-column px-2 py-5 rounded-5 shadow">
                <div className="img-continer">
                  <img src={assets.servicesImg4} alt="img" width={180} height={180} className="img-fluid mb-3" />
                </div>
                <h3 className="heading-shopping fs-5 fw-semibold my-1">Lorem ipsum dolor</h3>
                <p className="para-shopping fs-6 fw-normal text-secondary my-1 px-4"> 
                  Lorem ipsum dolor sit, amet consectetur 
                  placeat corporis sit
                </p>
                <button className="btn-services btn btn-outline-success d-inline-block my-1">Read More</button>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutUs;
