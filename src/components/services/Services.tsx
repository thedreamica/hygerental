import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Services = () => {
  const boxStyles = {
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    width: { xs: "auto", sm: "auto", md: "auto", lg: "auto" },
    p: { xs: "1em", sm: "1em", md: "1.3em", lg: "1.3em" },
    display: "grid",
    gridTemplateColumns: {
      xs: "auto",
      sm: "auto",
      md: "auto auto",
      lg: "260px auto",
    },
    gap: { xs: "0", sm: "0", md: "0", lg: "3em" },
  };
  const title = {
    fontSize: { xs: "1.5em", sm: "1.5em", md: "1.8em", lg: "1.8em" },
    fontWeight: "600",
    mb: ".2em",
  };
  const para = {
    width: "auto",
    fontSize: { xs: "1em", sm: "1em", md: "1.1em", lg: "1.1em" },
    fontWeight: "500",
  };
  const imageStyles = {
    position: "relative",
    width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
    height: { xs: "200px", sm: "200px", md: "auto", lg: "auto" },
    mr: { xs: "0", sm: "0", md: "2em", lg: "2em" },
    mb: { xs: "2em", sm: "2em", md: "0", lg: "0" },
  };
  return (
    <Box
      id="Services"
      sx={{
        py: { xs: "2em", sm: "2em", md: "2em", lg: "2em" },
        px: { xs: "1.3em", sm: "1.3em", md: "4em", lg: "3em" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            color: "primary.main",
            fontSize: { xs: "1.5em", sm: "1.5em", md: "2em", lg: "2em" },
            textTransform: "uppercase",
          }}
        >
          OUR
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "2.5em", sm: "2.5em", md: "4em", lg: "4em" },
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          SERVICES
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "auto",
            sm: "auto",
            md: "auto auto",
            lg: "auto auto",
          },
          gap: { xs: "2.5em", sm: "2.5em", md: "2em", lg: "2em" },
          mt: { xs: "2em", sm: "2em", md: "3em", lg: "3em" },
          mb: { xs: "0", sm: "0", md: "5.4em", lg: "5.4em" },
        }}
      >
        {/* first box */}
        <Box sx={boxStyles}>
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/zvqzZRFh/services1.png"
              alt=""
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box>
            <Typography sx={title}>Car rentals</Typography>
            <Typography sx={para}>
              Looking for a reliable car rental service? Our fleet of
              well-maintained vehicles and flexible rental options make it easy
              to get on the road. Whether it&apos;s for business or pleasure,
              we&apos;ve got you filled.
            </Typography>
          </Box>
        </Box>
        {/* second box */}
        <Box sx={boxStyles}>
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/jqhq6ZR4/services2.png"
              alt=""
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box>
            <Typography sx={title}>Bus & Trucks</Typography>
            <Typography sx={para}>
              Explore the world on wheels with our reliable truck and bus rental
              services. Choose from our wide range of vehicles to make your
              journey comfortable and memorable.
            </Typography>
          </Box>
        </Box>
        {/* third box */}
        <Box sx={boxStyles}>
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/RhT0NTZG/services3.pnghttps://i.postimg.cc/RhT0NTZG/services3.png"
              alt=""
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box>
            <Typography sx={title}>Resorts</Typography>
            <Typography sx={para}>
              Escape to a tranquil paradise. Our resorts offer breathtaking
              views, luxurious amenities, and personalized service to make your
              stay unforgettable.
            </Typography>
          </Box>
        </Box>
        {/* fourth */}
        <Box sx={boxStyles}>
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/tgVChbgs/services4.png"
              alt=""
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box>
            <Typography sx={title}>Houses</Typography>
            <Typography sx={para}>
              Discover your dream home with our selection of comfortable and
              affordable houses. We offer customized solutions to fit your
              unique lifestyle and budget. Experience true comfort and
              convenience today.
            </Typography>
          </Box>
        </Box>
        {/*  */}
      </Box>
    </Box>
  );
};

export default Services;
