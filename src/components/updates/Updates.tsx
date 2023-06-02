import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Updates = () => {
  const boxStyles = {
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    width: { xs: "auto", sm: "auto", md: "auto", lg: "auto" },
    p: "2em",
  };
  const title = {
    fontSize: { xs: "1.5em", sm: "1.5em", md: "1.8em", lg: "1.8em" },
    fontWeight: "400",
    mb: ".2em",
    textTransform: "capitalize",
  };
  const para = {
    width: { xs: "auto", sm: "auto", md: "auto", lg: "auto" },
    fontSize: { xs: "1.2em", sm: "1.2em", md: "1.2em", lg: "1.2em" },
    fontWeight: "600",
  };
  const imageStyles = {
    position: "relative",
    width: "auto",
    height: { xs: "150px", sm: "150px", md: "200px", lg: "200px" },
  };
  return (
    <Box
      sx={{
        py: { xs: "2em", sm: "2em", md: "5em", lg: "5em" },
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
          OUR LATEST
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "2.5em", sm: "2.5em", md: "4em", lg: "4em" },
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          UPDATES
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "auto",
            sm: "auto",
            md: "auto auto auto",
            lg: "auto auto auto",
          },
          gap: { xs: "2.5em", sm: "2.5em", md: "6em", lg: "6em" },
          mt: { xs: "2em", sm: "2em", md: "3em", lg: "3em" },
        }}
      >
        {/* first box */}
        <Box sx={boxStyles}>
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/vBrYNvfM/update1.png"
              alt=""
              fill={true}
              // style={{ objectFit: "contain" }}
            />
          </Box>
          <Typography sx={title}>cars</Typography>
          <Typography sx={para}>Honda City - 2022 - 5% off</Typography>
        </Box>
        {/* second box */}
        <Box sx={boxStyles}>
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/SxRKxCF7/update2.png"
              alt=""
              fill={true}
              // style={{ objectFit: "cover" }}
            />
          </Box>
          <Typography sx={title}>trucks</Typography>
          <Typography sx={para}>New : Mahindra Furio 11</Typography>
        </Box>
        {/* third box */}
        <Box sx={boxStyles}>
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/FR5Fp6fD/update3.png"
              alt=""
              fill={true}
              // style={{ objectFit: "cover" }}
            />
          </Box>
          <Typography sx={title}>buses</Typography>
          <Typography sx={para}>New : Benz tourist Bus</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Updates;
