import React from "react";
import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddClientModel from "../components/AddClientModel";
import AddProjectModal from "../components/AddProjectModal";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModel />
        <AddProjectModal />
      </div>

      <Projects />
      <Clients />
    </>
  );
};

export default Home;
