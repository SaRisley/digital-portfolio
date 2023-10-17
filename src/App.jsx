import "./App.css";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Joke from "./components/Joke";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";

function App() {
  return (
    <>
      <ScrollToTop/>
      <header><Header/></header>
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
