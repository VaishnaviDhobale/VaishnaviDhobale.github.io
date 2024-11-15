import { Box, Img, Text } from "@chakra-ui/react";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandReact } from "react-icons/tb";
import { SiChakraui } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import Proj1 from "../images/proj-1.png";
import Proj2 from "../images/proj-2.png";
import Proj3 from "../images/proj-3.png";
import Proj4 from "../images/proj-4.png";
import Proj5 from "../images/Proj5.png";

export default function Projects() {
  const techArr = [
    <IoLogoHtml5 color="teal" size="30px" />,
    <IoLogoCss3 color="teal" size="30px" />,
    <IoLogoJavascript color="teal" size="30px" />,
  ];

  const reactProjTech = [
    <IoLogoJavascript color="teal" size="30px" />,
    <TbBrandReact color="teal" size="30px" />,
    <SiChakraui color="teal" size="30px" />,
  ];

  const fullstackTech = [
    ...reactProjTech,
    <SiExpress color="teal" size="30px" />,
    <SiMongodb color="teal" size="30px" />,
  ];

  const achorStyle = {
    padding: "10px 20px",
    backgroundColor: "teal",
    color: "white",
    fontWeight: "600",
  };
  const projectsArr = [
    {
      img: Proj5,
      title: "Defence Post",
      desc: "DefencePost delivers unparalleled study materials, offering the most comprehensive and effective notes to empower CDS students on their path to success.",
      tech_stack: fullstackTech,
      gitHub: "https://github.com/VaishnaviDhobale/NewDefencePost",
      deploy: "https://defencepost.in/",
      type: "INDIVIDUAL",
    },
    {
      img: Proj4,
      title: "Amazon Website Clone",
      desc: "Amazon is the world's largest online retailer and a prominent cloud service provider.",
      tech_stack: fullstackTech,
      gitHub: "https://github.com/aniketgarole/plum-push-2647",
      deploy: "https://peaceful-liger-051912.netlify.app/",
      type: "COLLABORATIVE",
    },
    {
      img: Proj1,
      title: "The Book Bridge",
      desc: "EngageBay is an integrated marketing, sales, support and CRM solution designed to help small to midsize.",
      tech_stack: techArr,
      gitHub: "https://github.com/VaishnaviDhobale/wakeful-bushes-4379",
      deploy: "https://vaishnavidhobale.github.io/step-up/",
      type: "COLLABORATIVE",
    },
    {
      img: Proj2,
      title: "Lose It! Website Clone",
      desc: "Lose It! helps the User to adjust their weight according to user height, & helps the user to stay fit and healthy.",
      tech_stack: techArr,
      gitHub: "https://github.com/VaishnaviDhobale/short-whip-5406",
      deploy: "https://spontaneous-cuchufli-e48ffa.netlify.app/",
      type: "INDIVIDUAL",
    },

    {
      img: Proj3,
      title: "Myglamm Website Clone",
      desc: "Myglamm provides all types of beauty products to the user.",
      tech_stack: reactProjTech,
      gitHub:
        "https://github.com/VaishnaviDhobale/windy-picture-8509-/tree/main/cwproject",
      deploy: "https://chipper-elf-94f061.netlify.app/",
      type: "INDIVIDUAL",
    },

    
  ];
  return (
    <Box
      id={"projects"}
      w="80%"
      margin={"auto"}
      textAlign="center"
      pt={"100px"}
    >
      <Text fontWeight={"600"} fontSize="40px" pb={"30px"}>
        Projects
      </Text>

      <Box
        // border="2px solid yellow"
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
        }}
        gap="40px"
      >
        {projectsArr.map((el) => {
          return (
            <Box
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              w="95%"
              p="20px"
              className="project-card"
              margin={"auto"}
            >
              <Text
                fontWeight={"Bold"}
                color="teal"
                fontSize={"20px"}
                textDecoration="underline"
                textAlign={"right"}
                pr="10px"
                pb="10px"
              >
                {el.type}
              </Text>
              <Img
                src={el.img}
                h="250px"
                w="100%"
                border="3px solid teal"
                borderRadius={"20px"}
                marginBottom="20px"
              />
              <Text
                className="project-title"
                fontWeight={"bold"}
                fontSize="30px"
                color="teal"
              >
                {el.title}
              </Text>
              <Text className="project-description" m="20px 0px">
                {el.desc}
              </Text>
              <Box display={"flex"} justifyContent="center" mb="20px">
                {el.tech_stack.map((el) => {
                  return (
                    <Text className="project-tech-stack" p="0px 10px">
                      {el}
                    </Text>
                  );
                })}
              </Box>
              <Box display={"flex"} justifyContent="space-around" mt="20px">
                <a
                  className="project-deployed-link"
                  href={el.deploy}
                  target="_blank"
                  style={achorStyle}
                >
                  View Live
                </a>
                <a
                  className="project-github-link"
                  target={"_blank"}
                  href={el.gitHub}
                  style={achorStyle}
                >
                  View Code
                </a>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
