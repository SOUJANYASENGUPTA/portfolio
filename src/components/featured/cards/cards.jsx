import "../fpane/fpane.scss";
import { motion } from "framer-motion";
const cardVariants = {
  initial: {
    y: -500,
    opacity: 0
  },
  animate: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2, // Stagger the delay based on the index
      duration: 2,
    }
  }),
};
const Cards=(props)=>{
   return(
    <motion.div class="card" variants={cardVariants} custom={props.custom}>
      <img src={props.img}/>
      <div class="content">
        <h3>{props.name}</h3>
        <p> {props.desc}</p>
        <a href={props.links}><button>Know more...</button></a>
      </div>
      
    </motion.div>
   );
}
export default Cards;
