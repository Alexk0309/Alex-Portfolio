import NavBar from "./modules/components/NavBar";
import AboutMe from "./modules/main/view/AboutMe";
import Home from "./modules/main/view/Home";
import Experience from "./modules/main/view/Experience";
import Skills from "./modules/main/view/Projects";
import Footer from "./modules/main/view/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <Skills />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
