import React from 'react';
import './HeroSectionBanner.css'
import { assets } from '../../assets/Assets'

const HeroSectionBanner = () => {
  return (
    <div>
        <div className="position-relative">
         <div id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel">
          <div className="carousel-inner ">
            <div className="carousel-item active "  data-bs-interval="1000">
              <img src={assets.boatNoise} className="d-block w-100" alt="img" />
            </div>
            
            <div className="carousel-item " data-bs-interval="500">
              <img src={assets.BsportsShoe} className="d-block w-100" alt="img" />
            </div>
            
            <div className="carousel-item ">
              <img src={assets.BHomeKitechen} className="d-block w-100" alt="img" />
            </div>
            
            <div className="carousel-item ">
              <img src={assets.BKitechen} className="d-block w-100" alt="img" />
            </div>
            
            <div className="carousel-item ">
              <img src={assets.Bsarees} className="d-block w-100" alt="img" />
            </div>
            
            <div className="carousel-item ">
              <img src={assets.BSprots} className="d-block w-100" alt="img" />
            </div>
            
            <div className="carousel-item ">
              <img src={assets.Bkids} className="d-block w-100" alt="img" />
            </div>
            
            <div className="carousel-item active">
              <img src={assets.boatNoise} className="d-block w-100" alt="img" />
            </div>
            
          </div>
          <button
            className="left-arrow carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon text-black" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="right-arrow carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span className="carousel-control-next-icon  " aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionBanner