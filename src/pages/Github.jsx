import { Box, Img, Text } from "@chakra-ui/react"
import GitHubCalendar from "react-github-calendar";

export default function Github() {
  return (
    <Box w="80%" margin={"auto"} textAlign="center" id = "github" pt={"100px"}>
      <Text fontWeight={"600"} fontSize="40px" pb={"30px"}>
        GitHub
      </Text>
      <Box margin="auto">
        <Box margin="auto" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" width = {{
          base : "100%", sm : "100%"
        }} p ="20px">
          <GitHubCalendar style={{margin : "auto", width : "100%"}} username="vaishnavidhobale" />
        </Box>
        <Img
          id="github-top-langs"
          margin="auto"
          mt="70px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          w="500px"
          src={"https://github-readme-stats.vercel.app/api/top-langs/?username=VaishnaviDhobale&layout=compact"}
        ></Img>
        <Img
          id="github-stats-card"
          margin="auto"
          mt="70px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          w="500px"
          src={"https://github-readme-stats.vercel.app/api?username=VaishnaviDhobale&hide=contribs,prs"}
        ></Img>
        <Img
          id="github-streak-stats"
          margin="auto"
          mt="70px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          w="500px"
          src={"https://github-readme-streak-stats.herokuapp.com?user=VaishnaviDhobale"}
        ></Img>
        <Img
          margin="auto"
          mt="70px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          w="900px"
          src={"https://github-profile-trophy.vercel.app/?username=VaishnaviDhobale"}
        ></Img>
      </Box>
    </Box>
  );
}
