import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <div className="max-w-screen-xl m-auto">
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
        <footer className="text-center py-5">&copy; 2024, Proudly made by Jonathan Wambua</footer>
      </div>
    </main>
  );
}
