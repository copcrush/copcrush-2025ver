"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [currentContent, setCurrentContent] = useState<number>(0);

  const handleShowMenu = () => {
    setCurrentContent((prev) => prev + 1);
  };

  return (
    <>
      <div className="p-4">
        <nav className="w-full h-screen nes-container with-title is-centered">
          <p className="title bg-green-200 p-2">Welcome to Copcrush Universe</p>
          <div className="flex flex-col justify-center items-center">
            <p className="px-4 py-6 text-xs md:text-sm lg:text-lg xl:text-xl">
              Hey there, Player 1! You've entered my 8-bit world – where
              creativity meets code. Get ready to explore a portfolio that’s
              more than just a showcase… it’s an adventure! Start Your Quest
              Press [Start] to explore my skills, projects, and passions. Every
              page is a level, and every click takes you closer to the final
              boss… me!
            </p>
            {currentContent === 0 && (
              <button
                type="button"
                className="nes-btn is-primary"
                onClick={handleShowMenu}
              >
                Start!
              </button>
            )}
            {currentContent === 1 && (
              <div className="py-4 text-xs md:text-sm lg:text-lg xl:text-xl">
                <p>Welcome, brave adventurer!</p>
                <p>I'm Navaphan Singkaew</p>
                <p>you can call me "Copcrush"</p>
                <p>Your guide in this pixelated journey.</p>
                <div className="flex flex-col justify-center items-center my-4">
                  <i className="nes-octocat animate"></i>
                </div>
                
                <button
                  type="button"
                  className="nes-btn is-success"
                  onClick={handleShowMenu}
                >
                  Start your journey
                </button>
              </div>
            )}
            {currentContent === 2 && (
              <div className="py-4 text-xs md:text-sm lg:text-lg xl:text-xl">
                <p>
                  As a Full Stack Developer, I combine creativity and technology
                  to build experiences that captivate and inspire.
                </p>
                <p>
                  From coding dynamic web apps to crafting seamless user
                  interfaces, I turn ideas into reality, one line of code at a
                  time.
                </p>
                <p>
                  Get ready to uncover my skills and projects as we level up
                  together. Let's dive in!
                </p>
                <button
                  type="button"
                  className="nes-btn is-warning"
                  onClick={handleShowMenu}
                >
                  Next Level
                </button>
              </div>
            )}
            {currentContent === 3 && (
              <div className="py-4 text-xs md:text-sm lg:text-lg xl:text-xl">
                <p>Skills and tools I use:</p>
                <p>React</p>
                <p>Node.js</p>
                <p>TypeScript</p>
                <button
                  type="button"
                  className="nes-btn is-error"
                  onClick={handleShowMenu}
                >
                  Finish
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
