import { Box, Text, textDecoration } from "@chakra-ui/react";

export default function Education() {
  const EduArr = [
    {
      title: "SSC",
      clgName: "Late, Raghunath Krushnaji patil Autade vidyalaya malewadi.",
      place: "Malewadi, Shrirampur, Maharashtra",
      duration: "June-2017 to June-2018",
      url: "",
      // text: "See Result",
    },
    {
      title: "Computer Engineering (Diploma)",
      clgName: "Ashok Polytechnic.",
      place: "Ashoknagar, Shrirampur, Maharashtra",
      duration: "August-2018 to August-2021",
      url: "",
      // text: "See Result",
    },
    {
      title: "Computer Engineering (BE)",
      clgName: "Sahyadri valley college of engineering",
      place: "Rajuri, Pune, Maharashtra",
      duration: "pursuing",
      url: "",
      // text: "See Result",
    },
    {
      title: "Full Stack Web Development (FullTime)",
      clgName: "Masai school.",
      place: "Bengaluru, Karnataka",
      duration: "August-2022 to May-2023",
      url: "",
      text: "See Certificate",
    },
  ];
  return (
    <Box id="education" w="80%" margin={"auto"} textAlign="center" pt={"100px"}>
      <Text fontWeight={"600"} fontSize="40px" pb={"30px"}>
        Education
      </Text>
      <Box display={"grid"} gridTemplateColumns={{
        base : "repeat(1,1fr)",
        sm : "repeat(1,1fr)",
        md : "repeat(2,1fr)",
        lg : "repeat(3,1fr)",
      }} gap="20px">
        {EduArr.map((el) => {
          return (
            <Box
              boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              w="100%"
              textAlign={"left"}
              p="20px"
              position={"relative"}
            >
              <Text fontWeight={"600"} color="teal" fontSize={"18.5px"} mb={"20px"}>
                {el.title}
              </Text>
              <Text>
                <span
                  style={{
                    color: "teal",
                    fontWeight: "600",
                    textDecoration: "underline",
                  }}
                >
                  Institute
                </span>{" "}
                {el.clgName}
              </Text>
              <Text>
                <span
                  style={{
                    color: "teal",
                    fontWeight: "600",
                    textDecoration: "underline",
                  }}
                >
                  Place
                </span>{" "}
                {el.place}
              </Text>
              <Text>
                <span
                  style={{
                    color: "teal",
                    fontWeight: "600",
                    textDecoration: "underline",
                  }}
                >
                  Duration
                </span>{" "}
                {el.duration}
              </Text>
              {/* <Box
                backgroundColor={"teal"}
                color="white"
                width="150px"
                margin={"auto"}
                textAlign="center"
                p=" 10px 20px"
                mt="20px"
                ml = "80px"
                borderRadius={"20px"}
                position = "absolute"
                bottom={"15px"}
                // left = "30px"
              >
                <a href={el.url} style={{fontSize : "17px"}}>
                  {el.text}
                </a>
              </Box> */}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
