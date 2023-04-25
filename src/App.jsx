/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import "./styles.css";

import About from "./Components/About";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import React from "react";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Shadrack Bentil",
  title: "Full Stack Developer & Technical Writer",
  email: "bentilshadrack72@gmail.com",
  gitHub: "qbentil",
  instagram: "qbentil",
  linkedIn: "bentil",
  medium: "",
  twitter: "themanbentil",
  youTube: "Code with Bentil",
};

const primaryColor = "#001FA0";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Education />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
