import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const Categories = () => {
  const boxStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "auto",
    my: { xs: "1.2em", sm: "1.2em", md: "0", lg: "0" },
  };
  const imageStyles = {
    position: "relative",
    width: "100%",
    height: { xs: "200px", sm: "200px", md: "150px", lg: "180px" },
  };
  const typoStyles = {
    fontSize: { xs: "1em", sm: "1em", md: "1.1em", lg: "1.3em" },
    fontWeight: "600",
    mt: ".5em",
  };
  return (
    <Box
      sx={{
        py: { xs: "3.5em", sm: "3.5em", md: "4em", lg: "5em" },
        px: { xs: "1.3em", sm: "1.3em", md: "2.5em", lg: "3em" },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: { xs: "2.5em", sm: "2.5em", md: "3.5em", lg: "4em" },
          fontWeight: "600",
          mb: { xs: ".7em", sm: ".7em", md: "1.2em", lg: "1.3em" },
        }}
      >
        CATEGORIES
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "auto",
            sm: "auto",
            md: "auto auto auto auto",
            lg: "auto auto auto auto",
          },
          gap: { xs: "1em", sm: "1em", md: "1.3em", lg: "1.3em" },
        }}
      >
        {/* first box */}
        <Box sx={boxStyles}>
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/yYVd22LG/Cate1.png"
              alt=""
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Typography sx={typoStyles}>CAR RENTAL</Typography>
        </Box>
        {/* second box */}
        <Box sx={boxStyles}>
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/tJbTqcpY/Cate2.png"
              alt=""
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Typography sx={typoStyles}>RESORT RENTAL</Typography>
        </Box>
        {/* third box */}
        <Box sx={boxStyles}>
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/s2tx8XLP/Cate3.png"
              alt=""
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Typography sx={typoStyles}>HOUSE RENTAL</Typography>
        </Box>
        {/* fourth box */}
        <Box sx={boxStyles}>
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/VkkJ02Mt/Cate4.png"
              alt=""
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Typography sx={typoStyles}>Truck & Buses RENTAL</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Categories;
{
  /* <Image src='https://i.postimg.cc/CxLY57D0/Rectangle-235.png' alt="" fill={true} /> */
}
{/* <Image style={{opacity: .8,top: '8em'}} src='https://i.postimg.cc/FRmgVJKC/categories-Overlay.png' alt='' fill={true} /> */}