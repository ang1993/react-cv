//Importo state hook:
// import { useState } from "react";
// //Importo los componentes:
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import CvComponent from "./Components/CV-Component/CvComponent"
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

//Importo cv:
import { CV } from "./CV/cv";

//Importo hoja de estilo:
import './App.css';


function App() {
  //destructuring info CV:
  const { hero, work, education, experience, skills } = CV;

  return (
    <div className="App">
      <Nav hero={hero} />
      <About hero={hero} />
      <Work work={work} />
      <CvComponent education={education} experience={experience} skills={skills} />
      <Contact></Contact>
      <Footer hero={hero}></Footer>
    </div>
  );
}

export default App;
