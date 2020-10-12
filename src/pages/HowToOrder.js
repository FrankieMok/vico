import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import aboutsustainable from "../images/aboutsustainable.jpg";

export default function HowToOrder() {
  return (
    <>
      <Hero hero="orderHero">
        <Banner title="Our services" subtitle="Providing what you need!">
          <br />
          <Link to="/contact" className="btn-primary">
            Contact us
          </Link>
        </Banner>
      </Hero>
      <div className="about-container">
        <img src={aboutsustainable} alt="about" className="about-img" />
        <div className="about-text">
          <h4>Our service is about providing what you need.</h4>
          <p>
            Our products are fully customisable and made to order. Any size,
            shape, colour, printing, or anything else that you may require, we
            are able to work with you to meet your needs.
          </p>
          <p>
            To find out more, contact us with your requirements and we will get
            back to you with a quote.
          </p>
        </div>
      </div>
    </>
  );
}
