import { Box, Img, Text } from "@chakra-ui/react";
import { useContext } from "react";
import Pic from "../images/fully final.png";
import { Theme } from "../ThemeContest/ThemeProvider";

export default function About() {
  let {theme,setTheme}= useContext(Theme);
  // console.log(theme)
  return (
    <Box
      w={{
        base: "100%",
        sm: "100%",
        md: "80%",
        lg: "800px",
      }}
      m={{
        base: "20px",
        sm: "20px",
        md: "auto",
        lg: "auto",
      }}
      id="about"
      className="about section"
      zIndex={-1}
      textAlign="center"
      pt={"100px"}
    >
      <Text fontWeight={"600"} fontSize="40px" pb={"30px"}>
        About Me
      </Text>


      <Box display={"grid"} gridTemplateColumns= {{
        base : "",
        sm : "",
        md :"30% 1fr"
      }}>
        <Box>
          <Img margin={"auto"} src={Pic} borderRadius="50%" width={"150px"} className = "home-img"></Img>
        </Box>
        <Box textAlign={"left"} margin = "auto" width = {{
          base : "80%",
          sm : "80%",
          md : "95%"
        }}>
          <Text id = "user-detail-intro">
            Hi Everyone, My name is{" "}
            <span style={{ color: "teal" }}>Vaishnavi Dhobale</span> and I am
            from
            <span style={{ color: "teal" }}>
              {" "}
              Ahmednagar, Maharashtra (India)
            </span>
            . I have completed my Diploma in{" "}
            <span style={{ color: "teal" }}>
              Ashok polytechnic Ashoknagar(MH)
            </span>
            . Then I joined full stack web development course by{" "}
            <span style={{ color: "teal" }}>Masai School</span> a military type
            coding school. Where I learned HTML, CSS, JavaScript, React, MongoDB, Node, Express etc. 
            <span style={{ color: "teal" }}> Looking forward to work on real world project.</span>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
