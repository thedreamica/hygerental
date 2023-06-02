import React from "react";
import Image from "next/image";
import { Box, Button, Link, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const text = {
    fontSize: { xs: "1em", sm: "1em", md: "1.2em", lg: "1.2em" },
    fontWeight: "600",
    lineHeight: "1.8em",
  };
  const boxStyles = {
    display: "flex",
    flexDirection: "column",
    width: "auto",
  };
  const rightSyles = {
    fontSize: { xs: "0.6em", sm: "0.6em", md: "1em", lg: "1em" },
    color: "white",
    fontWeight: "500",
  };
  return (
    <Box
      sx={{
        py: { xs: "1.3em", sm: "1.3em", md: "2em", lg: "2em" },
        px: { xs: "1.3em", sm: "1.3em", md: "4em", lg: "3em" },
        bgcolor: "black",
        color: "white",
      }}
    >
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
          my: { xs: "0", sm: "0", md: "5em", lg: "5em" },
          gap: "3em",
        }}
      >
        {/* first */}
        <Box sx={boxStyles}>
          {/* logo */}
          <Box
            sx={{
              position: "relative",
              width: { xs: "120px", sm: "120px", md: "150px", lg: "150px" },
              height: "87px",
              mb: { xs: "0", sm: "0", md: ".4em", lg: ".4em" },
              mt: { xs: ".8em", sm: ".8em", md: "0", lg: "0" },
            }}
          >
            <Image
              src="https://i.postimg.cc/brLzzNmB/rentals-Logo.png"
              alt=""
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Typography
            sx={{
              ...text,
              width: "10em",
              ml: { xs: "2.7em", sm: "2.7em", md: "2.5em", lg: "2.5em" },
            }}
          >
            We Catalyze your happiness
          </Typography>
        </Box>
        {/* second */}
        <Box
          sx={{
            ...boxStyles,
            mt: { xs: "0", sm: "0", md: "2em", lg: "3em" },
            mb: "3em",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.7em", sm: "1.7em", md: "2.1em", lg: "2.1em" },
              fontWeight: "600",
              mb: { xs: ".5em", sm: ".5em", md: ".8em", lg: ".8em" },
            }}
          >
            Address
          </Typography>
          <Typography
            sx={{
              ...text,
              width: { xs: "auto", sm: "auto", md: "15em", lg: "15em" },
              mb: { xs: ".8em", sm: ".8em", md: "0", lg: "0" },
            }}
          >
            Dot Cowork - Tidel Park, 1st Floor D Block, Tharamani, Chennai -
            600113
          </Typography>
          <Typography
            sx={{
              ...text,
              textDecoration: "underline",
              textUnderlineOffset: "5px",
            }}
          >
            support@hygeinfotech.com
          </Typography>
          <Typography sx={text}>Mon - Friday, 8am : 5pm</Typography>
        </Box>
        {/* third */}
        <Box
          sx={{
            ...boxStyles,
            mt: { xs: "0", sm: "0", md: "2em", lg: "3em" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1em", sm: "1em", md: "3.5em", lg: "3.5em" },
              lineHeight: "1.3em",
              fontWeight: "600",
              mb: ".2em",
              display: { xs: "none", ms: "none", md: "block", lg: "block" },
              width: { xs: "0", sm: "0", md: "7em", lg: "7em" },
            }}
          >
            Affordable <span style={{ color: "#EEB609" }}>&</span> Flexible
          </Typography>

          <Button
            variant="outlined"
            sx={{
              fontSize: { xs: "1em", sm: "1em", md: "1.5em", lg: "1.5em" },
              fontWeight: "600",
              width: "fit-content",
              borderRadius: ".6em",
              color: "white",
              py: { xs: ".7em", sm: ".7em", md: ".6em", lg: ".6em" },
              px: { xs: "2.1em", sm: "2.1em", md: "1,2em", lg: "1.2em" },
              border: "1px solid white",
              ":hover": { border: "1px solid white" },
              mx: { xs: "auto", sm: "auto", md: "0", lg: "0" },
            }}
          >
            CONTACT US
            <ArrowOutwardIcon
              sx={{
                color: "secondary.dark",
                fontSize: {
                  xs: "1.2em",
                  sm: "1.2em",
                  md: "1.4em",
                  lg: "1.4em",
                },
                ml: ".5em",
                mb: "3px",
              }}
            />
          </Button>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
            justifyContent: "center",
            alignItems: "center",
            columnGap: "1.2em",
            mb: "2em",
          }}
        >
          <FacebookOutlinedIcon sx={{ fontSize: "1.8em" }} />
          <TwitterIcon sx={{ fontSize: "1.8em" }} />
          <InstagramIcon sx={{ fontSize: "1.8em" }} />
          <YouTubeIcon sx={{ fontSize: "1.8em" }} />
        </Box>
      </Box>
      {/* copyrights */}
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "space-between",
            lg: "space-between",
          },
          alignItems: "flex-end",
        }}
      >
        <Box>
          <Typography
            sx={{
              ...rightSyles,
              mx: { xs: "auto", sm: "auto", md: "0", lg: "0" },
            }}
          >
            © Copyright 2023
            <span
              style={{
                color: "#EEB609",
                marginLeft: "4px",
              }}
            >
              hyge Construction
            </span>
            , All Rights Reserved.
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
            alignItems: "flex-end",
          }}
        >
          <Typography sx={rightSyles}>Privacy Policy / Terms of Use</Typography>
          <Link sx={{ textDecoration: "none", ml: "6em" }} href="#Home">
            <KeyboardArrowUpIcon
              sx={{
                fontSize: { xs: "3em", sm: "3em", md: "4.5em", lg: "4.5em" },
                color: "secondary.dark",
              }}
            />
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                ...rightSyles,
              }}
            >
              Go to Top
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
