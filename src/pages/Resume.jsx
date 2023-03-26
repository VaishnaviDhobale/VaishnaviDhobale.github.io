import { Box, Text } from "@chakra-ui/react";
import "iframe-resizer/js/iframeResizer.contentWindow";
import { MdDownload } from "react-icons/md";
import MyResume from "../files/Vaishnavi-Dhobale-Resume.pdf"

export default function Resume() {
  return (
    <Box w="80%" margin={"auto"} textAlign="center">
      {/* <Text fontWeight={"600"} fontSize="40px" pb={"30px"}>
        Resume
      </Text> */}
      <Box display={"flex"} justifyContent = "center">
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
            <a href={MyResume} download = "Vaishnavi-Dhobale-Resume"><MdDownload color="white" size={"30px"} /></a>
          </Box>
        </Box>
    </Box>
  );
}
