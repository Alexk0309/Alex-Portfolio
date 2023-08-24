import NavBar from "./modules/components/NavBar";
import AboutMe from "./modules/main/view/AboutMe";
import Home from "./modules/main/view/Home";
import Projects from "./modules/main/view/Projects";
import Portfolio from "./modules/main/view/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <Portfolio />
      <Projects />
    </>
  );
}

export default App;
