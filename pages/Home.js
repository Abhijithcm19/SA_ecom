import React from "react";
import "../Styles/Home.css";
import 'react-multi-carousel/lib/styles.css';
import CarouselProduct from "../components/homepage/HeroSectionCarousel";
import HeroSectionBanner from "../components/homepage/HeroSectionBanner";


const Home = () => {
  
  return (
    <>
      <div className="home-page-container my-3">
        <HeroSectionBanner />
        <CarouselProduct />
        <CarouselProduct />

      </div>
    </>
  );
};

export default Home;
