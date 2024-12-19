import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <About />
      <Contact />
    </div>
  );
}

export default App;
