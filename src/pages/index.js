import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TechAndServices from "../components/TechAndServices";
import PersonalProjects from "../components/PersonalProjects.js";
import ClientProjects from "../components/ClientProjects";

export default () => (
  <Layout>
    <Header />
    <Hero />
    <TechAndServices />
    <PersonalProjects />
    <ClientProjects />
    <form method="POST" action="https://formspree.io/braynbrigoli24@gmail.com">
      <input type="text" name="name" />>
      <input type="email" name="_replyto" />
      <input type="submit" value="Send" />
    </form>
  </Layout>
);
