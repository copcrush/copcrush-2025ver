import Image from "next/image";
import React from "react";
import Profile from "@/../public/profile.jpg";

const HomePage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center p-6"
      style={{
        background: `
          linear-gradient(to bottom, 
            #4EB5DD, 
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
        <div
          className="nes-container is-rounded flex items-center justify-between w-full p-4"
          style={{ backgroundColor: "#92CC41" }}
        >
          <h1 className="text-lg font-bold">Welcome to My Portfolio</h1>
          <div className="nes-icon close is-small" />
        </div>

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
              width={250}
              height={250}
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
            {/* Left Message */}
            <section className="message flex items-center gap-16">
              <i className="nes-bcrikko self-start"></i>
              <div className="nes-balloon from-left">
                <p>
                  Welcome, brave explorer! Are you ready to embark on an
                  adventure through my 8-bit portfolio?
                </p>
              </div>
            </section>

            {/* Right Message */}
            <section className="message flex items-center justify-end gap-4">
              <div className="nes-balloon from-right">
                <p>Looks exciting! Where do I start?</p>
              </div>
              <i className="nes-bcrikko self-start"></i>
            </section>

            {/* Left Message */}
            <section className="message flex items-center gap-16">
              <i className="nes-bcrikko self-start"></i>
              <div className="nes-balloon from-left">
                <p>
                  Use the **Menu** button to navigate through realms of my
                  projects, skills, and achievements.
                </p>
              </div>
            </section>

            {/* Right Message */}
            <section className="message flex items-center justify-end gap-4">
              <div className="nes-balloon from-right">
                <p>Sounds awesome! Any pro tips?</p>
              </div>
              <i className="nes-bcrikko self-start"></i>
            </section>

            {/* Left Message */}
            <section className="message flex items-center gap-16">
              <i className="nes-bcrikko self-start"></i>
              <div className="nes-balloon from-left">
                <p>
                  Look for hidden Easter Eggs and unlock the secret
                  achievements. Who knows what treasures you might find?
                </p>
              </div>
            </section>

            {/* Right Message */}
            <section className="message flex items-center justify-end gap-4">
              <div className="nes-balloon from-right">
                <p>Let’s do this! 🎮</p>
              </div>
              <i className="nes-bcrikko self-start"></i>
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
