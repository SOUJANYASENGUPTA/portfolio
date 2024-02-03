import Cards from "../cards/cards"; 
import "./fpane.scss";
import { motion } from "framer-motion";

const features=[
  {
    name:"Oracle Certified Java Associate SE8 Certification",
    desc:"Successfully cleared Oracle Certified Java Associate SE8 examination on 16th March 2023.I qualified with a percentage of 85.2%.",
    img: "https://github.com/SOUJANYASENGUPTA/portfolio/blob/main/public/OCA.jpg?raw=true",
    links:"https://catalog-education.oracle.com/pls/certview/sharebadge?id=C85D0A70445ABDF3D2CD96B9819E0D4650316A503A7CAE1FCE9B038713CA2CD2",
  },
  {
    name:"Hospital Management System Internship Virtusa(May 2023 - Aug 2023)",
    desc:"Responsible for handling Pharmacy Management,integrating frontend components and implementing authentication Firebase.",
    img: "\Virtusa.png",
    links:"https://www.linkedin.com/in/soujanya-s-2a9729165/details/experience/",
  },
  {
    name:"Product Price Comparision",
    desc:"A Java Application which uses JSoup to scrape the names and prices of products from E-Commerce websites like EBay ,Amazon & Shopclues and displays them so the user can compare.",
    img: "https://github.com/SOUJANYASENGUPTA/portfolio/blob/main/public/java.jpg?raw=true",
    links:"https://github.com/SOUJANYASENGUPTA/Product-Price-Comparision",
  },
  {
    name:"CodePen Clone",
    desc:"A simple CodePen clone using React and CodeMirror(a text editor component of JavaScript) demonstrating basic understanding of state, props, hooks and react components",
    img: "https://github.com/SOUJANYASENGUPTA/portfolio/blob/main/public/Codepen.jpg?raw=true",
    links:"https://soujanyasengupta.github.io/codepenClone/",
  },
  
  {
    name:"Pedestrian Crossing System for Visually Impaired",
    desc:"Utilizes TCS230 Color sensor along with HC 05 bluetooth module and Arduino Uno R3 to transmit the detected traffic light color.",
    img:"https://github.com/SOUJANYASENGUPTA/portfolio/blob/main/public/ped.png?raw=true",
    links:"https://drive.google.com/file/d/1jX4DnKKVCSHvW1gxxnlFWsd3CIYa4Y1G/view?usp=drive_link",
  },
  
]
const variants={
  initial:{
      y: -500,
      opacity: 0
  },
  animate:{
      y:0,
      opacity:1,
      transition:{
        
          duration: 2,
          staggerChildren: 0.2,
      }
  },
};
const Featured= () =>{
  
  return(
    <section className="fpane" >
      
     <motion.div className="card-container" variants={variants}  initial="initial" whileInView="animate">
      
     {features.map((feature, index) => (
          <Cards
            key={index} // Ensure each child has a unique key
            name={feature.name}
            desc={feature.desc}
            img={feature.img}
            links={feature.links}
            custom={index}
          />
        ))}
     </motion.div>
     </section>
  );
}
export default Featured;
