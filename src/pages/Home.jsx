import { Box, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { useContext, useState } from "react";
// import { MdDownload } from "react-icons/md";
import MyResume from "../files/Vaishnavi-Dhobale-Resume.pdf";
import { Theme } from "../ThemeContest/ThemeProvider";

export default function Home() {
  let [phone] = useState(true);
  let [github, setGithub] = useState(false);
  let [linkedin, setLinkedin] = useState(false);
  let [email, setEmail] = useState(false);

  let { theme } = useContext(Theme);

  const openLink = (url) => {
    window.open(url);
  };

  let iconStyle = {
    borderBottom: "3px solid red",
    color: "teal",
  };

  let phoneStyle = {
    boxShadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    width: "150px",
    margin: "auto",
    padding: "10px",
  };
  return (
    <Box
      id="home"
      w={{
        base: "80%",
        sm: "90%",
        md: "80%",
        lg: "700px",
      }}
      m="auto"
      ml={{
        base: "50px",
        sm: "50px",
        md: "auto",
      }}
      display={"flex"}
      flexDirection="column"
      alignItems="center"
      // border = "1px solid red"
    >
      <Box>
        <Text fontWeight={"600"} fontSize="43px" m={0}>
          Welcome, This is{" "}
          <span id="user-detail-name" style={{ color: "teal" }}>
            Vaishnavi Dhobale
          </span>{" "}
          <br />
        </Text>
        <Text style={{ fontSize: "25px" }} m="20px 0">
          Full Stack Web Developer (MERN)
        </Text>
        <Text fontWeight={"400"} id="user-detail-intro">
          A passionate aspiring Full Stack Web Developer Skilled in MERN stack.
          Developing websites using JavaScript, React, Node, Chakra-UI, MongoDB
          and having more than 1000+ hours of coding experience in above
          mentioned skills. Looking forward to opportunities that can bring
          challenges and learning to leverage.
        </Text>
      </Box>

      <Box
        display={"flex"}
        w="200px"
        m={"auto"}
        justifyContent={"space-around"}
        mt={"50px"}
      >
        {" "}
        <a
          style={{ color: "black" }}
          href={"https://github.com/VaishnaviDhobale"}
          target="blank"
          id="contact-github"
        >
          <AiFillGithub
            size={"30"}
            color={theme ? "black" : "white"}
            style={github ? iconStyle : null}
            onMouseEnter={() => setGithub(true)}
            onMouseLeave={() => setGithub(false)}
          />
        </a>
        <a
          style={{ color: "black" }}
          href={"https://www.linkedin.com/in/vaishnavi-dhobale-89243022b/"}
          target="blank"
          id="contact-linkedin"
        >
          <AiFillLinkedin
            style={linkedin ? iconStyle : null}
            size={"30"}
            color={theme ? "black" : "white"}
            onMouseEnter={() => setLinkedin(true)}
            onMouseLeave={() => setLinkedin(false)}
          />
        </a>
        <a
          style={{ color: "black" }}
          href={"https://mail.google.com/mail/u/0/#inbox"}
          target="blank"
          id="contact-email"
        >
          <AiFillMail
            style={email ? iconStyle : null}
            size={"30"}
            color={theme ? "black" : "white"}
            onMouseEnter={() => setEmail(true)}
            onMouseLeave={() => setEmail(false)}
          />
        </a>
        <AiFillPhone
          id="contact-phone"
          style={phone ? iconStyle : null}
          size={"30"}
        />
      </Box>

      {/* phone  */}
      <Box
        p={"20px"}
        // border="2px solid red"
        width="300px"
        m="auto"
      >
        <Text style={phone ? phoneStyle : null}>
          {phone ? "+91 7499718585" : null}
        </Text>
      </Box>



      {/* Resume  */}
      <Box display={"flex"} justifyContent="center">
      <Box
        backgroundColor="teal"
        mt="20px"
        p={"9px 15px"}
        borderRadius="5px"
        cursor={"pointer"}
        >
          <a
            href= {MyResume}
            className="nav-link resume"
            id="resume-link-2"
            download="Vaishnavi-Dhobale-Resume"
            target="blank"
          >
            <Box
              onClick={() =>
                openLink(
                  "https://drive.google.com/file/d/1G6FYINHjgiVK0EmTnYDmX7fkx7GtdQpZ/view?usp=sharing"
                )
              }
              className="navbar-resume"
              style = {{fontSize : "29px"}}
              id="resume-button-2"
            >
              Resume
            </Box>
          </a>
        </Box>
      </Box>
    </Box>
  );
}
