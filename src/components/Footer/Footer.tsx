"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-6 bg-black text-yellow-400">
      {/* Social Media Icons */}
      <section className="icon-list flex flex-wrap justify-center gap-4 my-4">
        <i className="nes-icon facebook is-medium" title="Facebook"></i>
        <i className="nes-icon instagram is-medium" title="Instagram"></i>
        <i className="nes-icon github is-medium" title="GitHub"></i>
        <i className="nes-icon gmail is-medium" title="Gmail"></i>
        <i className="nes-icon linkedin is-medium" title="LinkedIn"></i>
        <i className="nes-icon twitch is-medium" title="Twitch"></i>
      </section>

       {/* Footer Text */}
       <div className="mb-4 text-center">
        <p className="text-xs md:text-sm lg:text-lg xl:text-xl">
          © 2025 Copcrush™. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
