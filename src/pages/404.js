import React, { Component } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class blog extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <div>
          <h2 style={{ color: "black" }}>Ooops. Page not found</h2>
        </div>
        <Footer />
      </Layout>
    );
  }
}
