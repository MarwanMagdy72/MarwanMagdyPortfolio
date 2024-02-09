import React from "react";
import Hero from "../components/Hero/Hero";
import MainContent from "../components/MainContent/MainContent";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="projects">
        <MainContent />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
