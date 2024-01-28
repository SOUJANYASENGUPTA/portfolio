import Cards from "../cards/cards"; 
import "./fpane.scss";
import { motion } from "framer-motion";

const features=[
  {
    name:"Oracle Certified Java Associate SE8 Certification",
    desc:"Successfully cleared Oracle Certified Java Associate SE8 examination on 16th March 2023.I qualified with a percentage of 85.2%.",
    img: "\OCA.jpg",
    links:"https://catalog-education.oracle.com/pls/certview/sharebadge?id=C85D0A70445ABDF3D2CD96B9819E0D4650316A503A7CAE1FCE9B038713CA2CD2",
  },
  {
    name:"Hospital Management System Internship Virtusa(May 2023 - Aug 2023)",
    desc:"Responsible for handling Pharmacy Management,integrating frontend components and implementing authentication Firebase.",
    img: "https://media.licdn.com/dms/image/D4D2DAQHC2QZ6qIUYUw/profile-treasury-image-shrink_1280_1280/0/1696314837786?e=1706878800&v=beta&t=Oioc1WmVKgV3TU5-hQtiWP0BRsAeM0ng8vVHKAVcygk",
    links:"https://www.linkedin.com/in/soujanya-s-2a9729165/details/experience/",
  },
  {
    name:"Product Price Comparision",
    desc:"A Java Application which uses JSoup to scrape the names and prices of products from E-Commerce websites like EBay ,Amazon & Shopclues and displays them so the user can compare.",
    img: "\java.jpg",
    links:"https://github.com/SOUJANYASENGUPTA/Product-Price-Comparision",
  },
  {
    name:"CodePen Clone",
    desc:"A simple CodePen clone using React and CodeMirror(a text editor component of JavaScript) demonstrating basic understanding of state, props, hooks and react components",
    img: "\Codepen.jpg",
    links:"https://soujanyasengupta.github.io/codepenClone/",
  },
  
  {
    name:"Pedestrian Crossing System for Visually Impaired",
    desc:"Utilizes TCS230 Color sensor along with HC 05 bluetooth module and Arduino Uno R3 to transmit the detected traffic light color.",
    img:"\ped.png",
    links:"https://drive.google.com/file/d/1jX4DnKKVCSHvW1gxxnlFWsd3CIYa4Y1G/view?usp=drive_link",
  },
  
]
const variants={
  initial:{
      x: -500,
      opacity: 0
  },
  animate:{
      x:0,
      opacity:1,
      transition:{
          
          duration: 2,
          staggerChildren: 0.5,
      }
  },
};
const Featured= () =>{
  
  return(
    <div className="fpane" >
      
     <motion.div className="card-container" variants={variants} variants={variants} initial="initial" whileInView="animate">
      
     {features.map((feature, index) => (
          <Cards
            key={index} // Ensure each child has a unique key
            name={feature.name}
            desc={feature.desc}
            img={feature.img}
            links={feature.links}
          />
        ))}
     </motion.div>
     </div>
  );
}
export default Featured;