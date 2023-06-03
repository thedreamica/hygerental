import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const Features = () => {
  const boxStyles = {
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    width: "auto",
    p: "2em",
  };
  const title = {
    fontSize: { xs: "1.8em", sm: "1.8em", md: "2em", lg: "2em" },
    fontWeight: "600",
    my: ".5em",
  };
  const para = {
    width: { xs: "auto", sm: "auto", md: "auto", lg: "auto" },
    fontSize: { xs: "1em", sm: "1em", md: "1.3em", lg: "1.1em" },
    fontWeight: "400",
    lineHeight: "2.3em",
  };
  const imageStyles = { position: "relative", width: "50px", height: "50px" };
  return (
    <Box
      sx={{
        py: { xs: "2em", sm: "2em", md: "3em", lg: "3em" },
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
          }}
        >
          OUR
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "2.5em", sm: "2.5em", md: "4em", lg: "4em" },
            fontWeight: "600",
          }}
        >
          FEATURES
        </Typography>
      </Box>
      {/* grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "auto",
            sm: "auto",
            md: "auto auto auto",
            lg: "auto auto auto",
          },
          gap: "3em",
          mt: { xs: "2em", sm: "2em", md: "3em", lg: "3em" },
        }}
      >
        {/* first item */}
        <Box sx={boxStyles}>
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/qvDD58Jw/feature1.png"
              alt=""
              fill={true}
            />
          </Box>
          <Typography sx={title}>Best Services</Typography>
          <Typography sx={para}>
            We have unmatched safety features to make your experience the best
            choice.
          </Typography>
        </Box>
        {/* second item */}
        <Box sx={boxStyles}>
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/PqB3tT88/feature2.png"
              alt=""
              fill={true}
            />
          </Box>
          <Typography sx={title}>Deposit Safety</Typography>
          <Typography sx={para}>
            Guaranteed deposit safety for worry-free transactions is ensured.
          </Typography>
        </Box>
        {/* third item */}
        <Box sx={boxStyles}>
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/hGJZWfhB/feature3.png"
              alt=""
              fill={true}
            />
          </Box>
          <Typography sx={title}>No Limitations</Typography>
          <Typography sx={para}>
            No riding limits, or tenure limitations enjoy the best facilities
            and services.
          </Typography>
        </Box>
        {/* fourth item */}
        <Box sx={boxStyles}>
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/6qV1jgq4/feature4.png"
              alt=""
              fill={true}
            />
          </Box>
          <Typography sx={title}>Safe Rides and Stay</Typography>
          <Typography sx={para}>
            we ensure the safety of rides in vehicle and safe stay at homes.
          </Typography>
        </Box>
        {/* fifth item */}
        <Box sx={boxStyles}>
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/zfpSVNMf/feature-Icon5.png"
              alt=""
              fill={true}
            />
          </Box>
          <Typography sx={title}>Flexibility & Expertise</Typography>
          <Typography sx={para}>
            With our expertise and flexible services we welcome endless
            possibilities.
          </Typography>
        </Box>
        {/* sixth item */}
        <Box sx={boxStyles}>
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/bdX1KwGm/feature-Icon6.png"
              alt=""
              fill={true}
            />
          </Box>
          <Typography sx={title}>Pick your Own</Typography>
          <Typography sx={para}>
            We have the diverse range of options for rentals.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
