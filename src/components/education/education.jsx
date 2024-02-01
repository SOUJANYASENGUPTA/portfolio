import "./education.scss";
import { motion } from "framer-motion";
const history=[
    {
        name: "B.tech in ECE (2019-2023)",
        body: "Graduated from Maulana Abul Kalam Azad University of Technology specialising in Electronics and Communications Engineering with a CGPA of 9.26.",
    },
    {
        name:"AISSCE (2019)",
        body:"Passed with a percentage of 9.26 from CBSE Board."
    },
    {
        name:"AISSE (2017)",
        body:"Passed with a CGPA of 10 from CBSE"
    }
]
const Education=()=>{
    return(
        <div className="education">
            <motion.div className="textContainer" initial={{opacity:0,y:500}} whileInView={{opacity:1,y:0}} transition={{delay:1,duration:1,staggerChildren:0.1}}>
                <motion.h1>
                    Education
                </motion.h1>
                <motion.h2>
                I pursued a Bachelor of Technology <b>(BTech) in Electronics and Communications Engineering</b> from 2019 to 2023, achieving a <b>CGPA of 9.26</b>. Prior to this, I completed my secondary and senior secondary education at DAV Public School Asansol, securing a <b>CGPA of 10 and a grade of 85.9%</b>, respectively. Throughout my academic journey, I actively participated in various extracurricular activities, and served as <b>Co-Convenor for the IEI</b> Student Chapter at my college. I have also completed an <b>internship on Java FullStack development at & successfully played an integral part in developing a Hospital Management system</b>, and simultaneously secured the <b>OCJA SE8 Certification</b> 
                </motion.h2>
            </motion.div>
    <motion.div className="timelineContainer" initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:10}} transition={{delay:1,duration:1,staggerChildren:0.1}}>
    <motion.div className="timelineColumn">
    <motion.div class="timeline">
    <motion.div class="outer">
    {
    history.map(history=>(
     <motion.div class="card" key={history}>
      <motion.div class="info" initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{delay:3,duration:1}}>
        <h3 class="title">{history.name}</h3>
        <p>{history.body}</p>
      </motion.div>
    </motion.div>
          ))
    }   
    </motion.div>
   </motion.div>
  </motion.div>
  </motion.div>          
 </div>
);
};
export default Education;
