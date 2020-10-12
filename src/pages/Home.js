import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import Promote from "../components/Promote";
import Member from "../components/Member";

const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title="Vico" subtitle="GO GREEN BEFORE THE GREEN GOES">
          <br />
          <Link to="/contact" className="btn-primary">
            Contact us
          </Link>
        </Banner>
      </Hero>
      <Services />
      <Promote />
      <Member />
    </>
  );
};

export default Home;
