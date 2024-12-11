import { Box, Img, Text } from "@chakra-ui/react";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandReact } from "react-icons/tb";
import { SiChakraui } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { SiVercel } from "react-icons/si";
import { SiNetlify } from "react-icons/si";




import ArtifyAI from "../images/ArtifyAI.png"
import EngageBay from "../images/proj-1.png";
import LoseIt from "../images/proj-2.png";
import Proj3 from "../images/proj-3.png";
import Amazon from "../images/proj-4.png";
import DefencePost from "../images/Proj5.png";
import RCTravels from "../images/RCTravels.png";
import TheBookBridge from "../images/TheBookBridge.png"
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";



export default function Projects() {
  const techArr = [
    <IoLogoHtml5 color="teal" size="30px" />,
    <IoLogoCss3 color="teal" size="30px" />,
    <IoLogoJavascript color="teal" size="30px" />,
    <BsGithub color="teal" size="30px"/>,
    <SiNetlify color="teal" size="30px"/>
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
    <BsGithub color="teal" size="30px"/>,
    <SiVercel color="teal" size="30px"/>

  ];

  const Rc_tech = [
    <TbBrandReact color="teal" size="30px" />,
    <SiTailwindcss color="teal" size="30px"  />,
    <SiPhp color="teal" size="30px" />,
    <SiMysql color="teal" size="30px" />
  ]

  const TheBookBridgeTech = [
    <IoLogoJavascript color="teal" size="30px" />,
    <TbBrandReact color="teal" size="30px" />,
    <SiTailwindcss color="teal" size="30px"  />,
    <SiExpress color="teal" size="30px" />,
    <SiMongodb color="teal" size="30px" />,
  ]

  const achorStyle = {
    padding: "10px 20px",
    backgroundColor: "teal",
    color: "white",
    fontWeight: "600",
  };


  const projectsArr = [
    {
      img: ArtifyAI,
      title: "ArtifyAI",
      desc: "ArtifyAI is a responsive MERN stack application that generates AI-powered art from user input. It features secure login/signup, payment integration, and a modern design for a seamless user experience across all devices.",
      tech_stack: fullstackTech,
      gitHub: "https://github.com/VaishnaviDhobale/ArtifyAI",
      deploy: "https://artify-ai-azure.vercel.app/",
      type: "INDIVIDUAL",
    },
    {
      img: DefencePost,
      title: "Defence Post",
      desc: "DefencePost delivers unparalleled study materials, offering the most comprehensive and effective notes to empower CDS students on their path to success.",
      tech_stack: fullstackTech,
      gitHub: "https://github.com/VaishnaviDhobale/DefencePost-User",
      deploy: "https://defence-post-user.vercel.app/",
      type: "INDIVIDUAL",
    },
    {
      img: RCTravels,
      title: "RC Travels",
      desc: "Developed a responsive travel agency website, RC Travels, using React, PHP, and MySQL, showcasing travel packages, features, and customer feedback to provide a user-friendly experience for exploring travel solutions",
      tech_stack: Rc_tech,
      gitHub: "https://github.com/omkar-pd/RC-Travels",
      deploy: "https://rc-travels.com/",
      type: "COLLABORATIVE",
    },
    {
      img: TheBookBridge,
      title: "The Book Bridge",
      desc: "Developed a full-stack MERN app where authors manage and publish books, and readers explore, filter, and review titles. The platform offers dashboards, search, and sorting, creating an interactive space for book enthusiasts.",
      tech_stack: TheBookBridgeTech,
      gitHub: "https://github.com/VaishnaviDhobale/TheBookBridge",
      deploy: "https://66b49440be40e5d3e40156bf--jazzy-smakager-22fd33.netlify.app/?page=1&pageLimit=10&sortOrder=asc",
      type: "INDIVIDUAL",
    },
    {
      img: Amazon,
      title: "Buyify",
      desc: "Developed an Amazon clone using the MERN stack, featuring product browsing, search, and filtering for an enhanced e-commerce experience. I was responsible for building and managing the backend functionalities.",
      tech_stack: fullstackTech,
      gitHub: "https://github.com/aniketgarole/plum-push-2647",
      deploy: "https://peaceful-liger-051912.netlify.app/",
      type: "COLLABORATIVE",
    },
    
    {
      img: LoseIt,
      title: "Cut The Fat",
      desc: "Lose It! is a responsive design project that inspires users to maintain fitness and health by aligning their weight with their height. The project highlights a clean and engaging design concept.",
      tech_stack: techArr,
      gitHub: "https://github.com/VaishnaviDhobale/short-whip-5406",
      deploy: "https://spontaneous-cuchufli-e48ffa.netlify.app/",
      type: "INDIVIDUAL",
    }    
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
