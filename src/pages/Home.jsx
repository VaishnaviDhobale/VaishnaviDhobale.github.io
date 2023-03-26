import { Box, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { MdDownload } from "react-icons/md";
import { useState } from "react";
import Resume from "../files/Vaishnavi-Dhobale-Resume.pdf"

export default function Home() {
  let [phone] = useState(true);
  let [github, setGithub] = useState(false);
  let [linkedin, setLinkedin] = useState(false);
  let [email, setEmail] = useState(false);

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
  return <Box
        id="home"
        w={{
          base : "100vh",
          sm : "100%",
          md : "80%",
          lg : "700px"
        }}
        m={{
          base : "20px",
          sm : "20px",
          md :"auto",
          lg :"auto"
        }}
        display={"flex"}
        flexDirection="column"
        alignItems="center"
      >
        <Box>
          <Text fontWeight={"600"} fontSize="43px" m={0}>
            Welcome, This is{" "}
            <span id = "user-detail-name" style={{ color: "teal" }}>Vaishnavi Dhobale</span> <br />
          </Text>
          <Text style={{ fontSize: "25px" }} m="20px 0">
            Full Stack Web Developer (MERN)
          </Text>
          <Text fontWeight={"400"} id = "user-detail-intro">
            A passionate aspiring Full Stack Web Developer Skilled in MERN
            stack. Developing websites using JavaScript, React, Node, Chakra-UI,
            MongoDB and having more than 1000+ hours of coding experience in
            above mentioned skills. Looking forward to opportunities that can
            bring challenges and learning to leverage.
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
              onMouseEnter={() => setEmail(true)}
              onMouseLeave={() => setEmail(false)}
            />
          </a>
          <AiFillPhone id="contact-phone" style={phone ? iconStyle : null} size={"30"} />
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
        <Box display={"flex"}>
          <Box mt="30px" mr={"10px"}>
            <a
              href="https://drive.google.com/file/d/1L8rsoQnuVyGMa31PXjTBClH5SnMDJ23m/view?usp=sharing"
              target="blank"
              style={{
                textDecoration: "none",
                color: "white",
                padding: "10px 15px",
                fontSize: "20px",
                backgroundColor: "teal",
                borderRadius: "5px",
              }}
              id="resume-button-1"
            >
              Resume
            </a>
          </Box>
          <Box
            backgroundColor="teal"
            mt="20px"
            p={"9px 15px"}
            borderRadius="5px"
            cursor={"pointer"}
            id="resume-button-2"
          >
            <a href={Resume} download = "Vaishnavi-Dhobale-Resume"><MdDownload color="white" size={"30px"} /></a>
          </Box>
        </Box>
      </Box>
}
