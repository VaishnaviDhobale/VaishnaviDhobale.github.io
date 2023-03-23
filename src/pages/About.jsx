import { Box, Img, Text } from "@chakra-ui/react";
import Pic from "../images/fully final.png";

export default function About() {
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
      zIndex={-1}
    >
      <Text fontWeight={"600"} fontSize="40px" pt="100px" pb={"30px"}>
        About Me
      </Text>


      <Box display={"grid"} gridTemplateColumns="30% 1fr">
        <Box>
          <Img src={Pic} borderRadius="50%" width={"150px"}></Img>
        </Box>
        <Box position={"relative"} top = "20px">
          <Text>
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
            coding school.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
