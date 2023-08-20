import React from "react";
import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddClientModel from "../components/AddClientModel";

const Home = () => {
  return (
    <>
      <AddClientModel />
      <Projects />
      <Clients />
    </>
  );
};

export default Home;
