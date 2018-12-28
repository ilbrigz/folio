import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TechAndServices from "../components/TechAndServices";
import PersonalProjects from "../components/PersonalProjects.js";
import ClientProjects from "../components/ClientProjects";
import Contact from "../components/Contact";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
        <Hero />
        <TechAndServices />
        <PersonalProjects />
        <ClientProjects />
        <AboutMe />
        <Contact />
        <Footer />
      </Layout>
    );
  }
}

export default Index;
