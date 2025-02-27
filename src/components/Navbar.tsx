import { Link, useLocation } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "123px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
        alignItems: "center",
      }}
      px="20px"
    >
      <Link to="/">
        <Box
          component="img"
          src={Logo}
          alt="logo"
          sx={{
            width: { xs: "80px", sm: "100px", md: "120px" }, // Adjust width for responsiveness
            height: "auto", // Maintain aspect ratio
            marginLeft: { xs: "10px", sm: "15px", md: "20px" }, // Adjust margin for responsiveness
          }}
        />
      </Link>
      <Stack
        direction="row"
        alignItems="flex-end"
        gap={{ xs: "20px", sm: "30px", md: "40px" }} // Adjust gap based on screen size
        sx={{
          fontSize: { xs: "20px", sm: "20px", md: "24px" }, // Responsive font size
        }}
      >
        <Link
          to="/"
          style={{
            borderBottom: `4px solid ${location.pathname === "/" ? "var(--secondary-color)" : "transparent"}`,
          }}
        >
          Home
        </Link>
        <Link
          to="/exercise"
          style={{
            borderBottom: `4px solid ${location.pathname === "/exercise" ? "var(--secondary-color)" : "transparent"}`,
          }}
        >
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
