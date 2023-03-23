import { Box } from "@chakra-ui/react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  let navArr = [
    { to: "#home", text: "Home" },
    { to: "#about", text: "About" },
    { to: "#education", text: "Education" },
    { to: "#skills", text: "Skills" },
    { to: "#projects", text: "Projects" },
    { to: "#contact", text: "Contact" },
    { to: "#resume", text: "Resume" },
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
      boxShadow =" rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
      backgroundColor={"white"}
      id = "nav-menu"
    >
      {navArr.map((el) => {
        return (
          <Link to={el.to} style={navStyle}>
            {el.text}
          </Link>
        );
      })}
    </Box>
  );
}
