import React from "react";
import "../style/ProductValue.css";
import video from "../images/IndieBand.mp4";
import appleMusic from "../images/applemusic.jpg";
import concert from "../images/img1.jpg";

const ProductValue = () => {
  return (
    <>
      <section className="product__section">
        <section className="video__section-wrapper">
          <p className="video__section-text">
            “Experience concerts up close and personal. Experience real close up
            fan interactions with your favourite artists.”
          </p>
          <section className="section__video">
            <video autoPlay loop muted>
              <source src={video} type="video/mp4" />
              <p></p>
            </video>
          </section>
        </section>

        <section className="product__apple-section-wrapper">
          <section>
            <img
              className="product__image"
              src={appleMusic}
              alt="Dolby Sound"
            />
          </section>
          <p className="product__imgae-text">
            “Experience live versions of your favourite songs. We have partnered
            with Apple Music to provide you with Dolby audio quality.”
          </p>
        </section>

        <section className="product__section-wrapper">
          <p className="product__imgae-text">
            “Watch artists live from the front row without floor seat prices!
            Choose the best payment option for you.”
          </p>
          <section>
            <img className="product__image" src={concert} alt="Dolby Sound" />
          </section>
        </section>
      </section>
    </>
  );
};

export default ProductValue;
