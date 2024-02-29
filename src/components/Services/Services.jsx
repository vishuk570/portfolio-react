import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import Resume from './Vishu_CV.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <p style={{width:"70%"}}>
          With 3 years of React Native mobile app development expertise complemented by a solid foundation in MERN stack, I offer full-stack solutions for seamless functionality. Utilizing Azure DevOps for version control, branching strategies, and task assignment, I ensure efficient collaboration and project management. Furthermore, my proficiency in UI/UX design enhances brand presence with visually appealing and user-friendly interfaces.
        </p>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <Card
          emoji={HeartEmoji}
          heading={"Design"}
          detail={"Figma, native-base, CSS3, BootStrap"}
        />
        {/* second card */}
        <Card
          emoji={Glasses}
          heading={"Development"}
          detail={"React-Native, Android, iOS, JavaScript, ReactJs, NodeJs, ExpressJs"}
        />
        {/* 3rd */}
        <Card
          emoji={Humble}
          heading={"Deployment"}
          detail={
            "Git, Github, Play Store, App Store, App Center, Firebase, Azure-DevOps,"
          }
          color="rgba(252, 166, 31, 0.45)"
        />
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
