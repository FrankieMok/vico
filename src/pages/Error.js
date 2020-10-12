import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Hero hero="errorHero">
        <Banner
          title=" 404 "
          subtitle="We couldn't find the page you were looking for."
        >
          <br />

          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
    </>
  );
};

export default Error;
