import { Box, Button } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { HashLink as Link } from "react-router-hash-link";
import { MdDehaze } from "react-icons/md";
import { useState } from "react";
import { useContext } from "react";
import { Theme } from "../ThemeContest/ThemeProvider";
import {IoMdMoon} from "react-icons/io";
import MyResume from "../files/Vaishnavi-Dhobale-Resume.pdf";


export default function Navbar() {
  let [show, setShow] = useState(false);

  let {theme,setTheme}= useContext(Theme);
  console.log(theme);

  const openLink = (url) => {
    window.open(url);
  };

  let navArr = [
    { to: "#home", className: "nav-link home", text: "Home" },
    { to: "#about", className: "nav-link about", text: "About" },
    { to: "#education", className: "nav-link education", text: "Education" },
    { to: "#skills", className: "nav-link skills", text: "Skills" },
    { to: "#projects", className: "nav-link projects", text: "Projects" },
    { to: "#experience", className: "nav-link projects", text: "Experience" },
    { to: "#github", className: "", text: "github" },
    { to: "#contact", className: "nav-link contact", text: "Contact" },
  ];

  const navStyle = {
    marginRight: "30px",
    textDecoration: "none",
    color: theme? "black" : "white",
    fontSize: "19px",
    marginBottom : "20px"
  };

  const navbarResStyle = {
    base: show ? "grid" : "none",
    sm: show ? "grid" : "none",
    md: "flex",
  };

  return (
    <>
    {/* responsive Button  */}
      <Box
        display={{
          base: "block",
          sm: "block",
          md: "none",
        }}
        mr="300px"
        width= {show ? "200px" : "50px"}
        backgroundColor={theme ? "white" : "#141925"}
        cursor = "pointer"
        // position="sticky" top="0px" left="0px" zIndex={1}
      >
        <IconContext.Provider value={{ size: 40 }} >
          <MdDehaze
            style={{ backgroundColor: show ? "#f4f4f4" : "teal", padding: "5px",borderRadius : "5px"}}
            onClick={() => setShow((prev) => !prev)}

          />
        </IconContext.Provider>
      </Box>



      {/* navbar */}
      <Box
        display={navbarResStyle}
        justifyContent={{
          base: "center",
          sm: "flex-start",
          md: "flex-end",
        }}
        p="5px"
        pt = "20px"
        pl = {{
          base : "20px",
          sm : "20px"
        }}
        mb="50px"
        pb={{
          base: "70px",
          sm: "70px",
          md: "20px",
        }}
        boxShadow={{
          base: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
          sm: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
          md: "none",
        }}
        backgroundColor={ theme ? "white" : "#141925"}
        id="nav-menu"
        w={{
          base: "200px",
          sm: "200px",
          md: "auto",
        }}
        position={{
          base: "absolute",
          sm: "absolute",
          md: "sticky",
        }}
      >
        {navArr.map((el) => {
          return (
            <Link to={el.to}  style={navStyle} className={el.className} smooth>
              {el.text}
            </Link>
          );
        })}

        {/* resume in navbar  */}
        <Box>
          <a
            href= {MyResume}
            className="nav-link resume"
            id="resume-link-1"
            download="Vaishnavi-Dhobale-Resume"
            target="blank"
            style = {{fontSize : "19px"}}

          >
            <Box
              onClick={() =>
                openLink(
                  "https://drive.google.com/file/d/1G6FYINHjgiVK0EmTnYDmX7fkx7GtdQpZ/view?usp=sharing"
                )
              }
              className="navbar-resume"
              id="resume-button-1"
              mr = "30px"
            >
              Resume
            </Box>
          </a>
        </Box>
      </Box>
      
      {/* Theam change btn  */}
     <Box  width = "100%">
     <Button onClick = {()=>{
        setTheme((prev)=> !prev)
      }} position={{
        base : "absolute",
        sm : "absolute",
        md : "fixed"
      }} top = {{
        base : "0px",
        sm : "0px",
        md : "11px"
      }} 
        right = {{
          base : "0px",
          sm : "0px",
          md : "1200px",
          lg : "none"
        }}
        backgroundColor = {"teal"}
      ><IoMdMoon size= {"20px"}></IoMdMoon></Button>
     </Box>
    </>
  );
}
