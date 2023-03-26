import { Box } from "@chakra-ui/react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  let navArr = [
    { to: "#home", className:  "nav-link home", text: "Home" },
    { to: "#about", className:  "nav-link about", text: "About" },
    { to: "#education", className:  "nav-link education", text: "Education" },
    { to: "#skills", className:  "nav-link skills", text: "Skills" },
    { to: "#projects", className:  "nav-link projects", text: "Projects" },
    {to : "#github", className : "" , text : "github"},
    { to: "#contact", className:  "nav-link contact", text: "Contact" },
  ];

  const navStyle = {
    marginRight: "30px",
    textDecoration: "none",
    color: "black",
    fontSize: "19px",
  };

  return (
    <Box
      display={"flex"}
      justifyContent="flex-end"
      p="20px 5px"
      mb={"50px"}
      // boxShadow =" rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
      backgroundColor={"white"}
      id = "nav-menu"
    >
      {navArr.map((el) => {
        return (
          <Link to={el.to} style={navStyle} className = {el.className} smooth>
            {el.text}
          </Link>
        );
      })}
    </Box>
  );
}
