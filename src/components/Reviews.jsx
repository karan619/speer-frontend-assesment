import React, { useState } from "react";
import "../style/Reviews.css";

import Slider from "./Slider";

const Reviews = () => {
  return (
    <>
      <section className="review__section-wrapper">
        <h1 className="review-section-heading">Celebrity Review.</h1>
        <Slider />
      </section>
    </>
  );
};

export default Reviews;
