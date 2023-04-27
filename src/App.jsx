import "./App.css";
import Hero from "./components/Hero";
import HeroSide from "./components/HeroSide";
import Plans from "./components/Plans";
import Program from "./components/Program";
import Reason from "./components/reason";

function App() {
  return (
    <div className="App">
      <Hero />
      <HeroSide />
      <Program />
      <Reason />
      <Plans />
    </div>
  );
}

export default App;
