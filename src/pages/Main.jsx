import { Box } from "@chakra-ui/react";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About"
import Navbar from "./Navbar";
import Skills from "./Skills";
import Contact from "./Contact";
// import Resume from "./Resume";
import Github from "./Github"
import Education from "./Education";
import { useContext } from "react";
import { Theme } from "../ThemeContest/ThemeProvider";


export default function Main() {
  let {theme}= useContext(Theme);
  return (
    <Box backgroundColor = {theme ? "white" : "#141925"} color = {theme ? "black" : "white"} boxSizing = "border-box" pb = "50px">
      <Box position="sticky" top="0px" right="0px" zIndex={1}>
        <Navbar />
      </Box>

      <Home />
      {/* <hr style={{marginTop : "50px" , marginBottom : "40px"}} /> */}

      {/* <hr style={{marginTop : "50px" , marginBottom : "40px"}} /> */}

      {/* <Resume />
      <hr style={{marginTop : "50px" , marginBottom : "40px"}} /> */}


      <About />
      {/* <hr style={{marginTop : "50px" , marginBottom : "40px"}} /> */}

      <Education />
      {/* <hr style={{marginTop : "50px" , marginBottom : "40px"}} /> */}

      <Skills />
      {/* <hr style={{marginTop : "50px" , marginBottom : "40px"}} /> */}


      <Projects />
      {/* <hr style={{marginTop : "50px" , marginBottom : "40px"}} /> */}

      <Github />
      {/* <hr style={{marginTop : "50px" , marginBottom : "40px"}} /> */}

      <Contact />

    </Box>
  );
}
