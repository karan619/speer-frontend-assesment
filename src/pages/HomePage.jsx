import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Pricing from "../components/Pricing";
import ProductValue from "../components/ProductValue";
import Reviews from "../components/Reviews";

function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductValue />
      <Reviews />
      <Pricing />
      <Footer />
    </>
  );
}

export default HomePage;
