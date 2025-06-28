import React from "react";
import Hero from "./components/Hero";
import GridBackground from "./components/GridBackground";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-x-hidden">
      <GridBackground/>
      
      <main>
        <Hero />
        <Footer/>
      </main>
    </div>
  );
}

export default App;