import React, { useContext,useEffect,useState } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/FirstHero.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import FirstHero from "../../img/FirstHero.png";
import SecondHero from "../../img/SecondHero.png";
import ThirdHero from "../../img/ThirdHero.png";
import FourthHero from "../../img/FourthHero.png";

const Intro = () => {
  const [currentImage, setCurrentImage] = useState(FirstHero);

  const images = [FirstHero,SecondHero,ThirdHero,FourthHero];

  useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentImage(images[Math.floor(Math.random() * images.length )]);
    }, 3000)
    
    return () => clearInterval(intervalId);
},)

  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>Vishu Kumar</span>
          <span>
          I'm an experienced React Native developer adept at crafting intuitive mobile applications. With a portfolio showcasing impactful projects, I specialize in creating seamless user experiences and robust functionalities. Let's collaborate on bringing your app ideas to life.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">

          <img src={Github} style={{width:'100px'}} alt="" onClick={()=> window.open("https://github.com/vishuk570", "_blank")} />
          <img src={LinkedIn} style={{width:'90px'}} alt=""  onClick={()=> window.open("https://www.linkedin.com/in/vishu-kumar/", "_blank")} />
          <img src={Instagram} style={{width:'90px'}} alt="" onClick={()=> window.open("https://www.instagram.com/mr._vishu_saini/", "_blank")}/>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="vector images" />
        <img src={Vector2} alt="vector images" />
        <img src={currentImage} alt="img" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Mobile App" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >

        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
