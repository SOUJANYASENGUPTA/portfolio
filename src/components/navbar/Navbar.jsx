import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
const Navbar = () =>{
    //const[out , setOut] = useState(false);
    return(
        <div className = "navbar">
        {/*Sidebar*/}
         <Sidebar/>
        <div className="wrapper">
        
            <span>Soujanya Sengupta</span>
            <div className="socials">
                <a href="https://drive.google.com/uc?export=download&id=1Kq-RoWhLZ02DxT6ydJD4mmUJSszI5sTx" target="_blank" rel="noopener nonreferrer"><button className="butt"> Resume</button></a>
                <a href="https://github.com/SOUJANYASENGUPTA"><img src = "https://cdn-icons-png.flaticon.com/128/270/270798.png"/></a>
                <a href="https://www.instagram.com/soujanya_sengupta_/"><img src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png"/></a>
                <a href="https://www.linkedin.com/in/soujanya-s-2a9729165/"><img src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png"/></a>
            </div>            
        </div>
        </div>
    )
}
export default Navbar