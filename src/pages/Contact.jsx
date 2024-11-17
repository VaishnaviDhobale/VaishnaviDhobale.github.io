import { Box, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";

export default function Contact() {
  return (
    <Box id="contact" pt={"100px"} w={{
      base : "100%",
      sm : "100%",
      md : "90%",
      lg: "85%"
    }
    } margin={"auto"} textAlign="center">
      <Text fontWeight={"600"} fontSize="40px" pb={"30px"}>
        Contact
      </Text>
      <Box
        width={{
          base : "100%",
          sm : "100%",
          md : "100%",
          lg : "500px"
        }}
        m="auto"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
        p="20px"
      >
        <Box display={"flex"}>
          <AiFillMail size="40px" color="teal" />
          <Text
            id="contact-email"
            position={"relative"}
            left="10px"
            fontWeight={"600"}
            fontSize="20px"
          >
            vaishnavidhobale5@gmail.com
          </Text>
        </Box>

        <Box display={"flex"}>
          <AiFillGithub size="40px" color="teal" />
          <a
            id="contact-github"
            target={"_black"}
            href="https://github.com/VaishnaviDhobale"
          >
            <Text
              textDecoration={"underline"}
              position={"relative"}
              left="10px"
              fontWeight={"600"}
              fontSize="20px"
            >
              VaishnaviDhobale
            </Text>
          </a>
        </Box>

        <Box display={"flex"}>
          <AiFillLinkedin size="40px" color="teal" />
          <a
            id="contact-linkedin"
            target={"_black"}
            href="https://www.linkedin.com/in/vaishnavi-dhobale-89243022b/"
          >
            <Text
              textDecoration={"underline"}
              position={"relative"}
              left="10px"
              fontWeight={"600"}
              fontSize="20px"
            >
              VaishnaviDhobale
            </Text>
          </a>
        </Box>

        <Box display={"flex"}>
          <AiFillPhone size="40px" color="teal" />
          <Text
            id="contact-phone"
            position={"relative"}
            left="10px"
            fontWeight={"600"}
            fontSize="20px"
          >
            +91 7499718585
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
