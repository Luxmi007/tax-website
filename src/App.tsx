import './App.css'

import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const [page, setPage] = useState("home");

  // Simple navigation handler
  const handleNav = (target: string) => {
    setPage(target);
    window.scrollTo(0, 0);
  };

  // Pass navigation handler to Navbar
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar onNavigate={handleNav} />
      <div className="pt-24 flex-1">
        <Header />
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "services" && <Services />}
        {page === "contact" && <Contact />}
      </div>
      <Footer />
    </div>
  );
};

export default App;