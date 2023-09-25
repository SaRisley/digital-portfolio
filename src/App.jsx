import "./App.css";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Joke from "./components/Joke";

function App() {
  return (
    <>
      <div className="skew-c"></div>
        <div className="colour-block">
          <AboutMe/>
        </div>
      <div className="skew-cc"></div>
        <div className="white-block">
          <Projects/>
        </div>
      <div className="skew-c"></div>
        <div className="colour-block">
          <Joke/>
        </div>
    </>
  );
}

export default App;
