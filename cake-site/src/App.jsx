import {About} from "./Components/Menu";
import {Contact} from "./Components/Contact";
import {Footer} from "./Components/Footer";
import {Hero} from "./Components/Hero";
import {Navbar} from "./Components/Navbar";
import {Project} from "./Components/Our-Story";
import {Skills} from "./Components/Gallary";

function App(){
  return(
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}