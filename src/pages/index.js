import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TechAndServices from "../components/TechAndServices";
import PersonalProjects from "../components/PersonalProjects.js";
import ClientProjects from "../components/ClientProjects";
import Contact from "../components/Contact";

const Index = () => (
  <Layout>
    <Header />
    <Hero />
    <TechAndServices />
    <PersonalProjects />
    <ClientProjects />
    <Contact />
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae officiis,
      fugit repellendus accusamus fuga voluptatum cupiditate ut hic neque in
      debitis eum ipsa consequuntur? Mollitia magni sit autem impedit a.
    </p>
  </Layout>
);

export default Index;
