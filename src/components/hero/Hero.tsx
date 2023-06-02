import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import DateInput from "./Date";
const Hero = () => {
  const inputStyles = {
    bgcolor: "white",
    fontSize: "1em",
    fontWeight: "600",
  };
  return (
    <Box
      id="Home"
      sx={{
        position: "relative",
        MaxWidth: { xs: "auto", sm: "auto", md: "100%", lg: "100%" },
        height: { xs: "auto", sm: "auto", md: "100vh", lg: "100vh" },
        color: "white",
        bgcolor: {
          xs: "black",
          sm: "black",
          md: "transparent",
          lg: "transparent",
        },
      }}
    >
      {/* bgImage */}
      <Box
        sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
      >
        <Image
          src="https://i.postimg.cc/2SkZF1pV/Background-Image.png"
          alt="bg-cover"
          fill={true}
          style={{ zIndex: -1 }}
        />
      </Box>
      {/* grid */}
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "space-between",
            lg: "space-between",
          },
          width: "auto",
          alignItems: "center",
          height: { xs: "auto", sm: "auto", md: "70vh", lg: "70vh" },
          px: { xs: "1.3em", sm: "1.3em", md: "1.5em", lg: "4em" },
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
          },
          py: { xs: "2em", sm: "2em", md: "0", lg: "0" },
        }}
      >
        {/* form */}
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "18em", lg: "20em" },
            display: "flex",
            flexDirection: "column",
            gap: "1.3em",
            color: "black",
            order: { xs: 3, sm: 3, md: 1, lg: 1 },
          }}
        >
          <Typography
            sx={{
              ...inputStyles,
              p: { xs: "1.1em", sm: "1.1em", md: "1.2em", lg: "1.4em" },
            }}
          >
            What are you looking for ...
          </Typography>
          <FormControl sx={{ bgcolor: "white" }} fullWidth>
            <InputLabel
              sx={{
                color: "black",
                fontWeight: "500",
                fontSize: "1em",
              }}
            >
              Select category
            </InputLabel>
            <Select>
              <MenuItem>One</MenuItem>
              <MenuItem>Two</MenuItem>
              <MenuItem>Three</MenuItem>
            </Select>
          </FormControl>
          {/* calendar */}
          {/* <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateRangePicker
              sx={{bgcolor: 'white'}}
                slots={{ field: SingleInputDateRangeField }}
                slotProps={{
                  textField: {
                    InputProps: { endAdornment: <CalendarMonthIcon /> },
                  },
                }}
              />
            </LocalizationProvider>
          </Box> */}
          <DateInput />
          {/*  */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "primary.main",
              p: "1em",
              fontSize: { xs: "1em", sm: "1em", md: "1.1em", lg: "1.1em" },
              textTransform: "uppercase",
              fontWeight: "600",
              position: "relative",
            }}
          >
            search
            <SearchIcon
              sx={{
                position: "absolute",
                right: ".4em",
                fontSize: { xs: "1.8em", sm: "1.8em", md: "1em", lg: "2.2em" },
              }}
            />
          </Button>
          {/* </Box> */}
        </Box>
        {/* text */}
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "3.5em", sm: "3.5em", md: "3.7em", lg: "4em" },
            width: { xs: "auto", sm: "auto", md: "6em", lg: "6em" },
            fontWeight: "500",
            order: { xs: 1, sm: 1, md: 2, lg: 2 },
            textAlign: "center",
            zIndex: 2,
          }}
        >
          RENT YOUR HAPPINESS
        </Typography>
        {/*Mobile bgImage */}
        <Box
          sx={{
            display: { xs: "block", sm: "block", md: "none", lg: "none" },
            position: "relative",
            width: "280px",
            height: "500px",
            mt: "-13.5em",
            mb: "-6.5em",
            zIndex: 1,
            order: 2,
          }}
        >
          <Image
            src="https://i.postimg.cc/2SkZF1pV/Background-Image.png"
            alt=""
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Box>
      {/* center desc */}
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: { xs: ".650em", sm: ".650em", md: "1.7em", lg: "2.4em" },
          fontWeight: "300",
          height: { xs: "auto", sm: "auto", md: "25vh", lg: "25vh" },
          position: {
            xs: "absolute",
            sm: "absolute",
            md: "relative",
            lg: "relative",
          },
          top: { xs: "36em", sm: "36em", md: "0", lg: "0" },
          left: 0,
          right: 0,
        }}
      >
        Find your dream cars, resorts, homes, buses and trucks
      </Typography>
    </Box>
  );
};

export default Hero;
