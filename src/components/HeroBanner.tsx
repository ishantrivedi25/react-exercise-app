import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner-1.jpg";

const HeroBanner = () => {
  return (
    <>
      <Box
        sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
        position="relative"
        p="20px"
      >
        <Typography
          sx={{
            color: "var(--secondary-color)",
            fontWeight: 600,
            fontSize: "26px",
          }}
        >
          Fitness Club
        </Typography>
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
          mb="23px"
          mt="30px"
        >
          Sweat, Smile <br />
          And Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" sx={{ width: "40%" }}>
          Check out the most effective exercises personalized to you
        </Typography>
        <Stack>
          <Link
            to="/exercise"
            style={{
              marginTop: "45px",
              textDecoration: "none",
              width: "215px",
              textAlign: "center",
              background: "var(--secondary-color)",
              padding: "14px",
              fontSize: "22px",
              textTransform: "none",
              color: "white",
              borderRadius: "4px",
            }}
          >
            Explore Exercises
          </Link>
        </Stack>
        <Typography
          fontWeight={600}
          sx={{
            opacity: "0.1",
            display: { lg: "block", xs: "none" },
            fontSize: "200px",
            color: "var(--secondary-color)",
          }}
        >
          Exercise
        </Typography>
        <img
          src={HeroBannerImage}
          alt="hero-banner"
          className="hero-banner-img"
        />
      </Box>
    </>
  );
};

export default HeroBanner;
