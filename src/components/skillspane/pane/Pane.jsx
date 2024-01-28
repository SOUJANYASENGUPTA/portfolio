import CircularProgressBar from "../skills/CircularProgressBar";
import "./pane.scss";
import { useRef, useState } from "react";
import { motion , useInView } from "framer-motion";

const skills=[
  {
    name:"Java",
    percentage : 80
  },
  {
    name:"React",
    percentage : 60
  },
  {
    name:"Spring-boot",
    percentage : 50
  },
  {
    name:"JDBC",
    percentage : 60
  },
  {
    name:"HTML",
    percentage : 70
  },
  {
    name:"CSS",
    percentage : 70
  },
  {
    name:"JavaScript",
    percentage : 60
  },

]
const variants = {
  initial:{
   y: 200,
   opacity: 0,
  },
  animate: {
   y: 0,
   opacity: 1,
   transition: {
      duration: 1,
      staggerChildren:0.1,
   },

  },

};
const Pane = () => {
  
  const scrollRef = useRef(null);
  const handleScroll = (direction) => {
    const scrollAmount = 400; // You can adjust this value based on your design
    const container = scrollRef.current;

    if (container) {
      if (direction === 'left') {
        container.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth',
        });
        if (container.scrollLeft <= 0) {
          container.scrollLeft = 0;
        }
        
      } else if (direction === 'right') {
        container.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
        
    }
    
  };

  return (
    <motion.div  variants={variants} initial="initial" whileInView="animate"> 
      <motion.div className="textContainer"
        variants={variants}>
        <motion.h1 className="head" variants={variants}>Skills<span style={{color:"lightgrey"}}> I have</span>
        </motion.h1>
        <motion.p variants={variants}>I am a certified <b>OCJA SE8 Java</b> with hands-on experience as a <b>Java Fullstack Developer</b> through my internship at Virtusa. I work in technologies such as <b>JDBC, Spring Boot, ReactJS</b>, and possess strong skills in database management with <b>MySQL and SQL, along with proficiency in JavaScript, HTML, and CSS.</b></motion.p>
      </motion.div>
    <motion.div className="pane-container" 
    style={{overflowX :'hidden'}} 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{ delay:2,duration: 2}}
    >
    
      <motion.div className="arrow left-arrow" onClick={()=>{handleScroll('left')}} >
        <span></span>
        <span></span>
        <span></span>
    </motion.div>
    <motion.div
        className="scrollport"
        ref={scrollRef}
        style={{overflowX :'hidden',
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            className="skill"
            key={index}
          >
            <CircularProgressBar name={skill.name} percentage={skill.percentage} />
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="arrow right-arrow" onClick={()=>{handleScroll('right')}}>
        <span></span>
        <span></span>
        <span></span>
    </motion.div>
    </motion.div>
    </motion.div>
  );
};

export default Pane;