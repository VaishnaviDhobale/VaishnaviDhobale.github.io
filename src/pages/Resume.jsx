import { Box, Text } from "@chakra-ui/react";
import 'iframe-resizer/js/iframeResizer.contentWindow';
export default function Resume() {
  return (
    <Box w="80%" margin={"auto"} textAlign="center">
      <Text fontWeight={"600"} fontSize="40px" pb={"30px"}>
        Resume
      </Text>
      <Box width = {{
        base : "90%",
        sm : "90%",
        md : "90%",
        lg : "73%"
      }} h = {{
        base : "550",
        sm :"550",
        md : "550",
        lg : "1150"
      }}
      margin = "auto"
      >
      <iframe
        src="https://drive.google.com/file/d/1aqnygVFoSqF6V8uCOCFwuNbfPNQwyw_-/preview"
        width="100%"
        height="100%"
        // allow="autoplay"
        title = "resume"
        style ={{margin : "auto"}}
      ></iframe>
      </Box>
    </Box>
  );
}
