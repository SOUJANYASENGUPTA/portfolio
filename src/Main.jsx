import "./app.scss"
import Contact from "./components/contact/contact";
import Education from "./components/education/education";
import Featured from "./components/featured/fpane/fpane";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Pane from "./components/skillspane/pane/Pane";
const Main = ()=>{
    return(
     <div>
     
     <section id="Homepage">
     <Navbar/>
     <Hero/>
      </section>
     <section id="Education" style={{overflow:"hidden"}}>
      <Education/>
      </section>
      <section id="Skills" style={{overflow:"hidden"}}>
        <Pane/>
      </section>
      <section id="Featured" >
        <Parallax/>
      </section >
      <Featured/>
      <section id="Contact" style={{overflow:"hidden"}}>
        <Contact/>
      </section>
      </div>
    );
}
export default Main;
