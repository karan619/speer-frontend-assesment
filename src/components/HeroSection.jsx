import React from "react";
import "../style/MainPage.css";
import BubbleParticles from "./BubbleParticles";
import NavBar from "./NavBar";
const HeroSection = () => {
  return (
    <>
      <main className="mainpage__wrapper">
        {/**Navigation */}
        <NavBar />
        <section className="mainpage__subwrapper">
          <h1 className="mainpage__banner"> EPICON</h1>
          <h2 className="mainpage__title"> INTERACTIVE CONCERT EXPERIENCES</h2>

          <h3 className="mainpage__subtitle">
            Experience your favourite artists like never before and from the
            comfort of your own home.
          </h3>
          <h3 className="mainpage__subtitle">
            never before and from the comfort of your own home.
          </h3>
          <button className="mainpage__button">Try it now</button>
        </section>
      </main>
    </>
  );
};

export default HeroSection;
