//import React from "react";
import { motion } from "framer-motion";
import "./hero.scss";
const textVariants={
    initial:{
        x: -500,
        opacity: 0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton:{
       opacity:0,
       y:10,
       transition:{
        duration:2,
        repeat:Infinity,
       },
    },
}
const sliderVariants={
    initial:{
        x: 0,
        
    },
    animate:{
        x:"-220%" ,
       
        transition:{
            repeat: Infinity,
            repeatType:"mirror",
            duration: 10,
            
        }
    },
    
}
const Hero=()=>{
    return(
        <div className="hero">
            <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>SOUJANYA SENGUPTA</motion.h2>
            <motion.h1 variants={textVariants}>Java FullStack Web Developer</motion.h1>
            <motion.div className="buttons" variants={textVariants}>
            <motion.a href={`#Featured`} variants={textVariants}><motion.button variants={textVariants} >See Portfolio</motion.button></motion.a>
            <motion.a href={`#Contact`} variants={textVariants}><motion.button variants={textVariants} >Contact Me</motion.button></motion.a>

            </ motion.div>
            <motion.a href={`#Education`} variants={textVariants} animate="scrollButton">
            <motion.img variants={textVariants} src="https://cdn-icons-png.flaticon.com/128/13517/13517870.png" alt="" />
            </motion.a>
            </motion.div> 
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                FullStack Developer OCJA 
            </motion.div>
            <div className ="imageContainer">
                <img src="/Me2.png" alt="" />
            </div>
        </div>
    );
}
export default Hero;