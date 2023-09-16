import NavBar from "./modules/components/NavBar";
import AboutMe from "./modules/main/view/AboutMe";
import Home from "./modules/main/view/Home";
import Experience from "./modules/main/view/Experience";
import Skills from "./modules/main/view/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <Skills />
      <Experience />
    </>
  );
}

export default App;
