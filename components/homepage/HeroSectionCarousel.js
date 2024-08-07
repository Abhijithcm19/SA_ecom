import React, { useEffect, useState } from "react";
import './HeroSectionCarousel.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { assets } from "../../assets/Assets";

const CarouselProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
  
      let url = "https://dummyjson.com/products";
      const response = await fetch(url);
      const proData = await response.json();
      const data = Object.values(proData.products);
     
      setData(data);  

      console.log("datais ",data);
      
    };
    getProducts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2000, min: 1478 },
      items: 9
    },
    desktop: {
      breakpoint: { max: 1478, min: 1238 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1238, min: 980 },
      items: 6
    },
    mobile: {
      breakpoint: { max: 980, min: 748 },
      items: 4
    }
  };
  return (
    <>
    <div className="carousel-banner-display-container bg-white mt-4">
          <div className="d-flex gap-3 pt-4 ps-3">
          <h5 className="fw-bold mb-2">Minimum 40% off | Furniture, Buety, groceries & more from local stores nearby</h5>
          <a href="/" className="text-success pt-1">See all offers</a>
          </div>
      <Carousel responsive={responsive}>
          {data.map((p) =>
        <div className="card card-container"  >
           <img src={p.thumbnail}  className="" alt="img"/>
        </div>
          )}
        
        
      </Carousel>;
        </div>
    </>
  );
};

export default CarouselProduct;
