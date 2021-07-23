import React, { useState, useRef, useEffect } from "react";
//components
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import MyStack from "../components/MyStack/MyStack";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";

function IndexPage() {
  return (
    <main>
      <Hero />
      <MyStack />
      <Projects />
      <AboutMe />
      <GetInTouch />
      <Footer />
    </main>
  );
}

export default IndexPage;
