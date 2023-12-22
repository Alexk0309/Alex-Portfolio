import NavBar from "./modules/components/NavBar";
import AboutMe from "./modules/main/view/AboutMe";
import Experience from "./modules/main/view/Experience";
import Skills from "./modules/main/view/Projects";
import Footer from "./modules/main/view/Footer";
import Contact from "./modules/main/view/Contact";

function App() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
