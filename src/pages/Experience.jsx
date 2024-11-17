import { Box, Text, Img, Button } from "@chakra-ui/react";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandReact } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { SiChakraui } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import Leeds4NeedsLogo from "../images/Leeds4NeedsLogo.png";

export default function Experience() {
  const expArr = [
    {
      companyName: "Leeds4Needs",
      duration: "3 Months",
      desription:
        "Worked at Leads4Needs for 3 months as a Full-Stack Developer, contributing to MERN stack projects. Gained hands-on experience in building and maintaining web applications, optimizing backend processes, and implementing responsive user interfaces for seamless user experiences.",
      certificate:
        "https://drive.google.com/file/d/1ips86RApzhESJJYXKyLOG5rTjMYgrVNh/view?usp=sharing",
      logo: Leeds4NeedsLogo,
      skills: [
        <IoLogoHtml5 color="teal" size="30px" />,
        <IoLogoCss3 color="teal" size="30px" />,
        <IoLogoJavascript color="teal" size="30px" />,
        <TbBrandReact color="teal" size="30px" />,
        <TbBrandRedux color="teal" size="30px" />,
        <SiChakraui color="teal" size="30px" />,
        <SiTailwindcss color="teal" size="30px" />,
        <SiExpress color="teal" size="30px" />,
        <SiMongodb color="teal" size="30px" />,
        <BsGithub color="teal" size="30px" />,
        <SiNetlify color="teal" size="30px" />,
      ],
    },
  ];

  const achorStyle = {
    padding: "10px 20px",
    backgroundColor: "teal",
    color: "white",
    fontWeight: "600",
    margin: "220px 10px",
    fontSize: "18px",
  };
  return (
    <>
      <Box
        id="experience"
        w="80%"
        margin={"auto"}
        textAlign="center"
        pt={"100px"}
      >
        <Text fontWeight={"600"} fontSize="40px" pb={"30px"}>
          Experience
        </Text>
        <Box
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(1,1fr)",
          }}
          gap="40px"
        >
          {expArr.map((exp, index) => {
            return (
              <Box p={"20px"} boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
                <Box
                  display="flex"
                  flexDirection={{
                    base:"column",
                    sm:"column",
                    md:"row"
                  }}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box display={"flex"}>
                    <Img
                      h={"40px"}
                      src={exp.logo}
                      position={"relative"}
                      right="20px"
                    />
                    <Text
                      fontSize={"25px"}
                      fontWeight={"bold"}
                      position={"relative"}
                      right="30px"
                    >
                      {exp.companyName}
                    </Text>
                  </Box>
                  <Text textAlign={"left"}>{exp.duration}</Text>
                </Box>
                <Text textAlign={"left"} mt={"10px"}>
                  {exp.desription}
                </Text>
                <Box
                  mt={"25px"}
                  mb="40px"
                  display={{
                    base: "grid",
                    sm: "grid",
                    md: "flex",
                  }}
                  gridTemplateColumns={{
                    base: "repeat(5,1fr)",
                    sm: "repeat(4,1fr)",
                    md: "repeat(1,1fr)",
                  }}
                  gap={"15px"}
                >
                  {exp?.skills?.map((skill, index) => {
                    return (
                      <Text
                        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                        p="5px"
                      >
                        {skill}
                      </Text>
                    );
                  })}
                </Box>
                <Box>
                  <a
                    className="project-github-link"
                    target={"_blank"}
                    href={exp.certificate}
                    style={achorStyle}
                  >
                    View Certificate
                  </a>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
