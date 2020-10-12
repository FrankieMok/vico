import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import aboutImg from "../images/abouttext.jpg";
import "./about.css";

export default function About() {
  return (
    <>
      <Hero hero="aboutHero">
        <Banner title="About us" subtitle="Pride in green products!">
          <br />
          <Link to="/contact" className="btn-primary">
            Contact us
          </Link>
        </Banner>
      </Hero>
      <div className="about-container">
        <img src={aboutImg} alt="about" className="about-img" />
        <div className="about-text">
          <h4>PRIDE IN GREEN PRODUCTS</h4>
          <p>
            Vico is a well established, successful international company that
            has been in operation for over ten years.
          </p>
          <p>
            Our catering products are eco-friendly and both biodegradable and
            compostable, are thoughtfully sourced with every care taken to
            ensure they adhere to our very high company standards. We are able
            to offer these innovative goods at competitive prices with an
            efficient delivery service.
          </p>
          <p>
            Our customers are important to us and we ensure you that every
            endeavour will be made to meet your requirements.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
