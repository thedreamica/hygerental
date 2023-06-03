import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import CoffeeOutlinedIcon from "@mui/icons-material/CoffeeOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import CallIcon from "@mui/icons-material/Call";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
const Benefits = () => {
  // icon change pending
  const boxStyles = {
    display: "flex",
    justifyContent: "space-between",
    my: { xs: "1em", sm: "1em", md: "2em", lg: "2em" },
  };
  const iconStyles = {
    color: "primary.main",
    fontSize: { xs: "1.8em", sm: "1.8em", md: "3.5em", lg: "3.5em" },
  };
  const textBox = {
    display: "flex",
    flexDirection: "column",
    ml: ".5em",
  };
  const title = {
    fontSize: { xs: "1.5em", sm: "1.5em", md: "2.5em", lg: "2.3em" },
    fontWeight: "600",
    mb: ".7em",
  };
  const para = {
    fontSize: { xs: "1em", sm: "1em", md: "1.5em", lg: "1.3em" },
    fontWeight: "500",
    width: { xs: "auto", sm: "auto", md: "auto", lg: "23em" },
  };
  return (
    <Box
      id="Benefits"
      sx={{
        py: { xs: "2em", sm: "2em", md: "2.5em", lg: "2em" },
        px: { xs: "1.3em", sm: "1.3em", md: "2em", lg: "3em" },
        color: "white",
        bgcolor: "black",
      }}
    >
      {/* title */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          textAlign: "center",
          mb: "2em",
        }}
      >
        <Box
          sx={{
            width: { xs: "auto", sm: "auto", md: "40em", lg: "70em" },
          }}
        >
          <Typography
            sx={{
              color: "primary.main",
              fontSize: { xs: "1.5em", sm: "1.5em", md: "2em", lg: "2em" },
            }}
          >
            BENEFITS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "600",
              fontSize: { xs: "2em", sm: "2em", md: "2.5em", lg: "3.8em" },
              my: { xs: ".5em", sm: ".5em", md: ".3em", lg: ".3em" },
            }}
          >
            THE BENEFITS OF RENTING WITH HYGE
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: ".7em", sm: ".7em", md: "1em", lg: "1em" },
              fontWeight: "500",
              lineHeight: "3em",
            }}
          >
            Hyge Rental is particulary known for its flexible tenure and
            affordable pricing, apart from these uniqueness hassle-free
            experience is focused so as to deliver the comfort all throughout
            the process. Hyge loves to bring you the happiness!
          </Typography>
        </Box>
      </Box>
      {/*  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "2em",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        }}
      >
        {/* text */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            order: { xs: 2, sm: 2, md: 1, lg: 1 },
            mt: { xs: "3.7em", sm: "3.7em", md: "0", lg: "0" },
            mr: { xs: "0", sm: "0", md: "2em", lg: "2em" },
          }}
        >
          {/* first Item */}
          <Box sx={boxStyles}>
            <CoffeeOutlinedIcon sx={iconStyles} />
            <Box sx={textBox}>
              <Typography sx={title}>Hassle-free Experience</Typography>
              <Typography sx={para}>
                We will never let you wait for long and gives you a comfortable
                experience
              </Typography>
            </Box>
          </Box>
          {/* second item */}
          <Box sx={boxStyles}>
            <WalletOutlinedIcon sx={iconStyles} />
            <Box sx={textBox}>
              <Typography sx={title}>Affordable Pricing</Typography>
              <Typography sx={para}>
                We knew the economic barrier for your happiness, so we made it a
                sweet challenge.
              </Typography>
            </Box>
          </Box>
          {/* third item */}
          <Box sx={boxStyles}>
            <CallIcon sx={iconStyles} />
            <Box sx={textBox}>
              <Typography sx={title}>24/7 Customer Support</Typography>
              <Typography sx={para}>
                Throughout the experience we are always there to support you.
              </Typography>
            </Box>
          </Box>
          {/* fourth item */}
          <Box sx={boxStyles}>
            <SelfImprovementOutlinedIcon sx={iconStyles} />
            <Box sx={textBox}>
              <Typography sx={title}>Flexible Tenure</Typography>
              <Typography sx={para}>
                As there is no limitation for your happiness there is no fixed
                tenure!
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* image */}
        <Box
          sx={{
            width: { xs: "auto", sm: "auto", md: "1000px", lg: "1000px" },
            height: { xs: "50vh", sm: "50vh", md: "900px", lg: "900px" },
            position: "relative",
            order: { xs: 1, sm: 1, md: 2, lg: 2 },
          }}
        >
          <Image
            src="https://i.postimg.cc/jddxMP50/Benefits.png"
            alt=""
            fill={true}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Benefits;
