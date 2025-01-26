"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Profile from "@/../public/profile.jpg";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center p-6"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, 
            #F2ABDC, 
            #CBBBE9,
            #B2C6F0,
            #fefefe
          )
        `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        imageRendering: "pixelated",
      }}
    >
      <div
        className="flex flex-col items-center gap-4 nes-container is-rounded p-4 bg-gray-100"
        style={{ maxWidth: "1024px", width: "100%" }}
      >
        {/* Header */}
        <header
          className="nes-container is-rounded flex items-center justify-between w-full p-4"
          style={{ backgroundColor: "#92CC41" }}
        >
          <h1 className="text-lg font-bold">ID: Copcrush#1402</h1>
          <div className="nes-icon close is-small" />
        </header>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          {/* Profile Picture */}
          <div
            className="nes-container is-rounded flex justify-center items-center"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#F7D51D",
            }}
          >
            <Image
              src={Profile}
              alt="Profile Picture"
              width={300}
              height={300}
              style={{
                objectFit: "cover",
                border: "4px solid black",
              }}
            />
          </div>

          {/* Profile Details */}
          <div className="flex flex-col gap-2 w-full">
            <div
              className="nes-container is-rounded p-3"
              style={{ backgroundColor: "#CDE8FF" }}
            >
              <h2 className="text-md font-bold">Navaphan Singkaew</h2>
              <p>Full Stack Developer</p>
            </div>
            <div
              className="nes-container is-rounded p-3"
              style={{ backgroundColor: "#fb70bf" }}
            >
              <p>
                Welcome to my portfolio website. Explore my work and skills
                here.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div
          className="nes-container is-rounded w-full p-4"
          style={{ backgroundColor: "#FCA56D" }}
        >
          <p>
            I am a Full Stack Developer passionate about building creative and
            impactful solutions. With experience in frontend and backend, I
            focus on detail and efficiency in every project.
          </p>
        </div>
      </div>

      <div className="my-6 w-full max-w-5xl">
        <section className="nes-container is-rounded p-6 bg-gray-100">
          <section className="message-list flex flex-col gap-8">
            {messages.map((message, index) => (
              <MessageItem
                key={index}
                isMobile={isMobile}
                {...message}
              />
            ))}
          </section>
        </section>
      </div>
    </div>
  );
};

// Messages Data
const messages: { from: "left" | "right"; text: string }[] = [
  {
    from: "left",
    text: "Welcome, brave explorer! Are you ready to embark on an adventure through my 8-bit portfolio?",
  },
  {
    from: "right",
    text: "Looks exciting! Where do I start?",
  },
  {
    from: "left",
    text: "Use the **Menu** button to navigate through realms of my projects, skills, and achievements.",
  },
  {
    from: "right",
    text: "Sounds awesome! Any pro tips?",
  },
  {
    from: "left",
    text: "Look for hidden Easter Eggs and unlock the secret achievements. Who knows what treasures you might find?",
  },
  {
    from: "right",
    text: "Let’s do this!",
  },
];


// Message Item Component
const MessageItem = ({
  from,
  text,
  isMobile,
}: {
  from: "left" | "right";
  text: string;
  isMobile: boolean;
}) => {
  const isLeft = from === "left";

  return (
    <section
      className={`message flex items-center ${
        isLeft ? "gap-20" : "justify-end gap-8"
      }`}
    >
      {!isMobile && isLeft && <i className="nes-bcrikko"></i>}

      <div
        className={`${
          isMobile ? "nes-container with-title" : `nes-balloon from-${from}`
        }`}
      >
        <p>{text}</p>
      </div>

      {!isMobile && !isLeft && <i className="nes-bcrikko"></i>}
    </section>
  );
};


export default HomePage;
