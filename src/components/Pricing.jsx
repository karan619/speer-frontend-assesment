import React from "react";
import "../style/Pricing.css";
import Card from "react-bootstrap/Card";

const Pricing = () => {
  return (
    <>
      <section style={{ backgroundColor: "#F5F5F7", padding: "40px" }}>
        <section className="pricing__titlewrapper">
          <h1>Choose the plan that's right for you</h1>
          <h4>No commitment. Cancel anytime without penality. </h4>
          <p>We can always unpause your account when you're ready.</p>
        </section>
        <section className="pricing__wrapper">
          <Card className="text-center single__price ">
            <h1>Basic Plan</h1>

            <Card.Body>
              <h2 className="price">$ 9 monthly</h2>

              <div className="card-body pricing__deals">
                <ul>
                  <li>10 downloads per month</li>
                  <li>Access to 50+ experiences</li>
                  <li>Good audio quality</li>
                  <li>1080 video quality</li>
                </ul>
              </div>
            </Card.Body>

            <button className="pricing__button">Try it now</button>
          </Card>
          <Card className="text-center single__price ">
            <h1>Advanced Plan</h1>

            <Card.Body>
              <h2 className="price">$ 99 per year</h2>

              <div className="card-body pricing__deals">
                <ul>
                  <li>20 downloads per month</li>
                  <li>Access to 100+ experiences</li>
                  <li>Superior Dolby audio quality</li>
                  <li>Ultra HD video quality</li>
                </ul>
              </div>
            </Card.Body>

            <button className="pricing__button">Try it now</button>
          </Card>

          <Card className="text-center single__price ">
            <h1>Pro Plan</h1>

            <Card.Body>
              <h2 className="price">$150 per year</h2>

              <div className="card-body pricing__deals">
                <ul>
                  <li>Unlimited downloads</li>
                  <li>Access to all digital experiences</li>
                  <li>Exclusive access to behind the scenes content</li>
                  <li>Superior Dolby audio quality</li>
                  <li>Ultra HD video quality</li>
                  <li>Access Oculus VR experiences</li>
                </ul>
              </div>
            </Card.Body>

            <button className="pricing__button">Try it now</button>
          </Card>
        </section>
      </section>
    </>
  );
};

export default Pricing;
