import React, { useContext } from "react";
import "./Works.css";
import react from "../../img/react-ls.png";
import node from "../../img/node js2.jpg";
import javascript from "../../img/js.png";
import reactNative from "../../img/reactNative.png";
import express from "../../img/express.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Currently working on 
          </span>
          <span>these technologies</span>
          <p style={{width:"70%"}}>
            Mastering React Native for mobile app development, with complementary expertise in ReactJS for frontend web development, I specialize in crafting robust and scalable applications. Employing Node.js/Express for backend solutions and leveraging MongoDB/MySQL for database management, I ensure seamless integration and optimal performance across platforms. Trust me to deliver high-quality solutions that leverage cutting-edge technologies for your project's success.
          </p>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={react} alt="React.js" style={{width:"100%", height:"100%"}}/>
          </div>
          <div className="w-secCircle">
            <img src={reactNative} alt="React-Native" style={{width:"100%", height:"100%"}}/>
          </div>
          <div className="w-secCircle">
            <img src={javascript} alt="Core Javascript" style={{width:"100%", height:"100%"}}/>
          </div>{" "}
          <div className="w-secCircle">
            <img src={node} alt="Node.js" style={{width:"100%", height:"100%"}}/>
          </div>
          <div className="w-secCircle">
            <img src={express} alt="Express.js" style={{width:"100%", height:"100%"}} />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
