import React, { useState } from "react";
import Image from "next/image";
import { Box, Button, Link } from "@mui/material";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

const Navbar = () => {
  // shadow at the border pending
  const [showLinks, setShowLinks] = useState(false);
  const handlebtn = () => {
    setShowLinks(!showLinks);
  };
  const links = {
    textDecoration: "none",
    fontFamily: "poppins",
    fontWeight: { xs: "600", sm: "600", md: "400", lg: "400" },
    fontSize: { xs: "1.3em", sm: "1.3em", md: "1.1em", lg: "1.2em" },
    textUnderlineOffset: ".5em",
    color: { xs: "white", sm: "white", md: "black", lg: "black" },
    ":hover": { textDecoration: "underline solid 2px #0033FF" },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        MaxWidth: "100%",
        bgcolor: "white",
        py: { xs: "auto", sm: "auto", md: ".2em", lg: ".8em" },
        px: { xs: ".3em", sm: ".3em", md: ".5em", lg: "3em" },
      }}
    >
      {/* logo */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "103px", sm: "103px", md: "130px", lg: "150px" },
          height: "85px",
          ml: { xs: "1em", sm: "1em", md: "0", lg: "0" },
        }}
      >
        <Image
          src="https://i.postimg.cc/brLzzNmB/rentals-Logo.png"
          alt=""
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </Box>
      {/* links */}
      <Box
        sx={{
          display: {
            xs: showLinks ? "grid" : "none",
            sm: showLinks ? "grid" : "none",
            md: "grid",
            lg: "grid",
          },
          gridTemplateColumns: {
            xs: "auto",
            sm: "auto",
            md: "auto auto auto auto",
            lg: "auto auto auto auto",
          },
          gap: { xs: "2em", sm: "2em", md: "2em", lg: "3em" },
          pt: { xs: "7em", sm: "7em", md: "0", lg: "0" },
          pb: { xs: "10em", sm: "10em", md: "0", lg: "0" },
          bgcolor: {
            xs: "black",
            sm: "black",
            md: "transparent",
            lg: "transparent",
          },
          position: {
            xs: "absolute",
            sm: "absolute",
            md: "relative",
            lg: "relative",
          },
          top: 0,
          left: 0,
          zIndex: 3,
          width: { xs: "100%", sm: "100%", md: "auto", lg: "auto" },
          placeItems: {
            xs: "center",
            sm: "center",
            md: "start",
            lg: "start",
          },
        }}
      >
        <Link sx={links} href="#Home">
          Home
        </Link>
        <Link sx={links} href="#Benefits">
          Benefits
        </Link>
        <Link sx={links} href="#Services">
          Services
        </Link>
        <Link sx={links} href="#ContactUs">
          Contact us
        </Link>
      </Box>
      {/* btn */}
      <Button
        sx={{
          position: {
            xs: "absolute",
            sm: "absolute",
            md: "relative",
            lg: "relative",
          },
          top: { xs: "29.5em", sm: "29.5em", md: "0", lg: "0" },
          bgcolor: "primary.main",
          fontSize: { xs: ".8em", sm: ".8em", md: "1em", lg: "1.1em" },
          p: { xs: "1.5em", sm: "1.5em", md: ".7em", lg: ".7em" },
          fontWeight: "600",
          display: {
            xs: showLinks ? "block" : "none",
            sm: showLinks ? "block" : "none",
            md: "block",
            lg: "block",
          },
          zIndex: 3,
          left: { xs: "7.3em", sm: "7.3em", md: "0", lg: "0" },
        }}
        variant="contained"
      >
        REQUEST A CALLBACK
      </Button>
      {/* menu */}
      {showLinks ? (
        <Button
          sx={{ ":hover": { bgcolor: "transparent" } }}
          onClick={handlebtn}
          disableRipple
        >
          <CloseSharpIcon
            sx={{
              fontSize: "2.8em",
              zIndex: 3,
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
              },
            }}
          />
        </Button>
      ) : (
        <Button
          onClick={handlebtn}
          sx={{
            display: { xs: "block", sm: "block", md: "none", lg: "none" },
            ":hover": { bgcolor: "transparent" },
          }}
        >
          <MenuSharpIcon sx={{ fontSize: "2.8em" }} />
        </Button>
      )}
    </Box>
  );
};

export default Navbar;
