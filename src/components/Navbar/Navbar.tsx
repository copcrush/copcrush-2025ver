"use client";
import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter()
  return (
    
    <AppBar position="static" color="default">
      <Toolbar className="flex justify-between items-center">
        <Box
          sx={{
            display: { xs: "none", md: "flex" }, 
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Logo Section */}
          <Box className="flex gap-3 items-center">
            <i className="snes-jp-logo"></i>
            <p className="font-semibold text-center my-3 ">Copcrush.exe</p>
          </Box>

          {/* Buttons Section */}
          <Box className="flex gap-4">
            <button type="button" className="nes-btn" onClick={(() => router.push("/home"))}>
              Home
            </button>
            <button type="button" className="nes-btn">
              About
            </button>
            <button type="button" className="nes-btn">
              Projects
            </button>
            <button type="button" className="nes-btn">
              Contact
            </button>
          </Box>
        </Box>

        {/* Mobile Layout */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" }, // Show only on mobile
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* Logo Section */}
          <Box className="flex flex-col items-center py-4">
          <i className="snes-jp-logo"></i>
          <p className="font-semibold text-center my-3 ">Copcrush.exe</p>
          </Box>

          {/* Buttons Section */}
          <Box className="flex gap-4 py-4">
            <button type="button" className="nes-btn" onClick={(() => router.push("/home"))}>
              Home
            </button>
            <button type="button" className="nes-btn">
              About
            </button>
            <button type="button" className="nes-btn">
              Projects
            </button>
            <button type="button" className="nes-btn">
              Contact
            </button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
