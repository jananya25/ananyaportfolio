import Hero from "./components/Hero";
import GridBackground from "./components/GridBackground";
import Footer from "./components/Footer";
import ProjectsShowcase from "./components/Project";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-x-hidden">
      <GridBackground/>
      
      <main>
        <Hero />
        <Experience/>
        <ProjectsShowcase/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;