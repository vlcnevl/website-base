import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
  
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
