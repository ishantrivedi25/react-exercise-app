import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

import Logo from "../assets/images/Logo.png";

const Footer = () => (
  <Box mt="40px" sx={{ bgcolor: "var(--footer-bg)" }}>
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      py="24px"
    >
      <Box
        component="img"
        src={Logo}
        alt="logo"
        sx={{
          width: { xs: "100px", sm: "150px", md: "200px" }, // Responsive widths
          height: "auto", // Maintain aspect ratio
        }}
      />
    </Stack>
    <Container sx={{ color: "#3a1212" }}>
      <Grid container spacing={4} justifyContent={"space-between"}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" mb={"8px"}>
            Quick Links
          </Typography>
          <Stack flexDirection={"column"} gap="8px">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" mb={"8px"}>
            Follow Us
          </Typography>
          <div>
            <IconButton
              color="primary"
              aria-label="facebook"
              sx={{ paddingLeft: 0 }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="instagram"
              sx={{ paddingLeft: 0 }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="twitter"
              sx={{ paddingLeft: 0 }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="linkedin"
              sx={{ paddingLeft: 0 }}
            >
              <LinkedIn />
            </IconButton>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" mb={"8px"}>
            Contact Us
          </Typography>
          <Typography variant="body1" mb={"4px"}>
            Email: info@example.com
          </Typography>
          <Typography variant="body1" mb={"4px"}>
            Phone: (123) 456-7890
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" mb={"8px"}>
            Newsletter
          </Typography>
          <Typography variant="body1" mb={"4px"}>
            Stay updated with our latest news.
          </Typography>
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="primary"
            sx={{
              padding: { xs: "8px 16px", sm: "10px 20px" },
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "bold",
              textTransform: "uppercase",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              marginTop: "8px",
            }}
          >
            Subscribe Now
          </Button>
        </Grid>
      </Grid>
    </Container>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      &copy; {new Date().getFullYear()} Fitness Club 💪 All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
