import { Box, Text, Img } from "@chakra-ui/react";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandReact } from "react-icons/tb";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { SiChakraui } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { SiPhp } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

export default function Skills() {

  const iconStyle = {
    color: "teal",
  };

//   const hoverStyle = {
//     border: "1px solid red",
//   };


  let skillsArr = [
    { skill: "HTML", logo: <IoLogoHtml5 style={iconStyle} size="60px" /> },
    { skill: "CSS", logo: <IoLogoCss3 style={iconStyle} size="60px" /> },
    {
      skill: "JavaScript",
      logo: <IoLogoJavascript style={iconStyle} size="60px" />,
    },
    { skill: "React", logo: <TbBrandReact style={iconStyle} size="60px" /> },
    { skill: "Redux", logo: <TbBrandRedux style={iconStyle} size="60px" /> },
    {
      skill: "Bootstrap",
      logo: <BsFillBootstrapFill style={iconStyle} size="60px" />,
    },
    { skill: "Nodejs", logo: <IoLogoNodejs style={iconStyle} size="60px" /> },
    { skill: "Mongodb", logo: <SiMongodb style={iconStyle} size="60px" /> },
    { skill: "Express", logo: <SiExpress style={iconStyle} size="60px" /> },
    { skill: "PHP", logo: <SiPhp style={iconStyle} size="60px" /> },
    { skill: "C++", logo: <TbBrandCpp style={iconStyle} size="60px" /> },
    { skill: "Chakra-UI", logo: <SiChakraui style={iconStyle} size="60px" /> },
    { skill: "Tailwind", logo: <SiTailwindcss style={iconStyle} size="60px" /> },
    { skill: "Github", logo: <BsGithub style={iconStyle} size="60px" /> },
    { skill: "Netlify", logo: <SiNetlify style={iconStyle} size="60px" /> },
    { skill: "Vscode", logo: <TbBrandVscode style={iconStyle} size="60px" /> },
  ];

  return (
    <Box id="skills" w="80%" margin={"auto"} textAlign="center" pt={"100px"}>
      <Text fontWeight={"600"} fontSize="40px" pb={"30px"}>
        Technical Skills & Tools
      </Text>

      <Box display={"grid"} gridTemplateColumns= {{
        base : "repeat(2,1fr)",
        sm : "repeat(3,1fr)",
        md : "repeat(4,1fr)",
        lg : "repeat(6,1fr)"
      }} gap="40px"
      >
        {skillsArr.map((el) => {
          return (
            <Box
              textAlign="center"
              p="5px"
              border="1px solid teal"
              borderRadius={"10px"}
              className="skills-card"
            >
              <Box
                className="skills-card-img"
                display={"flex"}
                justifyContent="center"
              >
                {el.logo}
              </Box>
              <Text
                className="skills-card-name"
                fontWeight={"600"}
                fontSize="20px"
                pt="10px"
              >
                {el.skill}
              </Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
