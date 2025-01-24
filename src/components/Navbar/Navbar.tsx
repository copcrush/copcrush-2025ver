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
      <div
        className="min-h-screen text-white flex flex-col justify-center items-center p-6"
        style={{
          background: "url('/wallpaper.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          imageRendering: "pixelated",
        }}
      >
        <nav className="w-full max-w-4xl bg-white shadow-lg text-center text-gray-800 border-black border-4">
          <div className="flex justify-between items-center text-center bg-blue-600 text-white px-3 py-1 border-b-[5px] border-black">
            <div className="flex gap-3">
              <i className="snes-jp-logo"></i>
              <p className="font-semibold text-center my-3 ">Copcrush.exe</p>
            </div>

            <div className="bg-red-500 px-2 py-1 my-2 border-red-700 border-4">
              <i className="nes-icon close is-small text-white"></i>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 my-4">
            <i className="nes-icon coin is-medium"></i>
            <p className="text-xl font-bold p-4 text-center">
              Welcome to Copcrush Universe
            </p>
            <i className="nes-icon coin is-medium"></i>
          </div>

          <div className="flex flex-col justify-center items-center">
            {/* Content 0 */}
            {currentContent === 0 && (
              <div className="transition-opacity duration-500 p-4">
                <p className="px-4 py-6 text-sm md:text-lg">
                  Hey there, Player 1! You've entered my 8-bit world
                </p>
                <div>
                  <p>You've entered my 8-bit world</p>
                  <p>
                    where creativity meets code. Get ready to explore a
                    portfolio
                  </p>
                  <p>that’s more than just a showcase… it’s an adventure!</p>
                </div>
                <p>Press [Start] to begin the journey.</p>
                <button
                  type="button"
                  className="nes-btn is-primary mt-4"
                  onClick={handleShowMenu}
                >
                  Start!
                </button>
              </div>
            )}

            {/* Content 1 */}
            {currentContent === 1 && (
              <div className="transition-opacity duration-500 p-4">
                <p className="text-lg mb-4">Welcome, brave adventurer!</p>

                <p>I'm Navaphan Singkaew</p>
                <p>You can call me "Copcrush"</p>
                <p>Your guide in this pixelated journey.</p>
                <div className="flex justify-center items-center my-4">
                  <i className="nes-octocat animate"></i>
                </div>
                <button
                  type="button"
                  className="nes-btn is-success mt-4"
                  onClick={handleShowMenu}
                >
                  Start your journey
                </button>
              </div>
            )}

            {/* Content 2 */}
            {currentContent === 2 && (
              <div className="transition-opacity duration-500 p-4">
                <p className="text-lg mb-4">As a Full Stack Developer...</p>
                <p>
                  I combine creativity and technology to build experiences that
                  captivate and inspire.
                </p>
                <p>
                  Get ready to uncover my skills and projects as we level up
                  together. Let's dive in!
                </p>
                <button
                  type="button"
                  className="nes-btn is-warning mt-4"
                  onClick={handleShowMenu}
                >
                  Next
                </button>
              </div>
            )}

            {/* Content 3 */}
            {currentContent === 3 && (
              <div className="transition-opacity duration-500 p-4">
                <p className="text-lg mb-4">Skills</p>
                <table className="nes-table is-bordered is-centered">
                  <thead>
                    <tr>
                      <th>Skills</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Frontend</td>
                      <td>HTML, CSS, JavaScript, React.js, Next.js, TypeScript, Tailwind CSS, Ant-design, Material UI, BootStrap</td>
                    </tr>
                    <tr>
                      <td>Backend</td>
                      <td>Node.js, Express.js, REST APIs</td>
                    </tr>
                    <tr>
                      <td>Database</td>
                      <td>MySQL, PostgreSQL, MongoDB</td>
                    </tr>
                    <tr>
                      <td>Version Control</td>
                      <td>Git</td>
                    </tr>
                  </tbody>
                </table>
                <div className="p-4"></div>
                <button
                  type="button"
                  className="nes-btn is-error mt-4"
                  onClick={handleShowMenu}
                >
                  Finish
                </button>
              </div>
            )}

            {/* Content 4 */}
            {currentContent === 4 && (
              <div className="transition-opacity duration-500 p-4">
                <p className="text-lg mb-4">You've completed all levels!</p>
                <p>If you need more information, feel free to reach out.</p>
                <button
                  type="button"
                  className="nes-btn is-primary mt-4"
                  onClick={() => alert("This is the final screen!")}
                >
                  Final Screen
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
