import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import AllInOne from "./components/AllInOne";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero /> 
      <About />
      <AllInOne />
      <Footer />
    </div>
  );
}

export default App;