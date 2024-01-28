import { motion } from "framer-motion";
const ToggleButton=({setOpen})=>{
    const handleClick = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        setOpen((prev) => !prev);
      };
    return(
        <button onClick={handleClick}>
         <svg>
           <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          initial={false}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
    );
}
export default ToggleButton