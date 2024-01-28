import { useRef } from "react";
import "./parallax.scss";
import{motion, useScroll, useTransform} from "framer-motion";

const Parallax=()=>{
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start" , "end start"]
    })

    const yText = useTransform(scrollYProgress,[0,1],["0%","100%"]);
    const yBg=useTransform(scrollYProgress,[0,1],["0%","100%"]);

    return(
       <motion.div className="parallax" ref={ref}>
        <motion.h1 style={{y:yText}}>Featured</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets" style={{y:yBg,}}></motion.div>
        <motion.div className="stars" style={{x:yBg}}></motion.div>
       </motion.div>
    );
};
export default Parallax;