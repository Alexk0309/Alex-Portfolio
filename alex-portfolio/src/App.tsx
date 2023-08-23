import NavBar from "./modules/components/NavBar";
import AboutMe from "./modules/main/view/AboutMe";
import Projects from "./modules/main/view/Projects";
import Portfolio from "./modules/main/view/Skills";

function App() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <Portfolio />
      <Projects />
    </>
  );
}

export default App;
