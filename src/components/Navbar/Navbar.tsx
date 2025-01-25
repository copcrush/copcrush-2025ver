"use client";
import React, { useState } from "react";
import { AppBar, Toolbar, Box, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <AppBar position="static" color="default" className="bg-blue-700">
      <Toolbar className="flex justify-between items-center p-4">
        {/* Logo Section */}
        <Box className="flex items-center">
          <i className="snes-jp-logo"></i>
          <p className="font-semibold text-lg ml-3">Copcrush.exe</p>
        </Box>

        {/* Desktop Buttons */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
          }}
        >
          <button
            type="button"
            className="nes-btn is-success"
            onClick={() => router.push("/home")}
          >
            Home
          </button>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => router.push("/about")}
          >
            About
          </button>
          <button
            type="button"
            className="nes-btn is-warning"
            onClick={() => router.push("/projects")}
          >
            Projects
          </button>
          <button
            type="button"
            className="nes-btn is-error"
            onClick={() => router.push("/contact")}
          >
            Contact
          </button>
        </Box>

        {/* Mobile Menu Button */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton color="inherit" onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className=" text-white p-4 flex flex-col gap-2 text-center"
        >
          <button
            type="button"
            className="nes-btn is-success"
            onClick={() => {
              router.push("/home");
              setIsMenuOpen(false);
            }}
          >
            Home
          </button>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => {
              router.push("/about");
              setIsMenuOpen(false);
            }}
          >
            About
          </button>
          <button
            type="button"
            className="nes-btn is-warning"
            onClick={() => {
              router.push("/projects");
              setIsMenuOpen(false);
            }}
          >
            Projects
          </button>
          <button
            type="button"
            className="nes-btn is-error"
            onClick={() => {
              router.push("/contact");
              setIsMenuOpen(false);
            }}
          >
            Contact
          </button>
        </motion.div>
      )}
    </AppBar>
  );
};

export default Navbar;
