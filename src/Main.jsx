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
     <section id="Education">
      <Education/>
      </section>
      <section id="Skills">
        <Pane/>
        </section>
      <section id="Featured">
        <Parallax/>
        </section>
        <section>
        <Featured/>
        </section>
      <section id="Contact">
        <Contact/>
      </section>
      </div>
    );
}
export default Main;