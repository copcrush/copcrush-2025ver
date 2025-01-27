"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const [selectedSection, setSelectedSection] = useState<number>(1);

  const topics = [
    { sectionId: 1, title: "Portfolio" },
    { sectionId: 2, title: "Skills" },
    { sectionId: 3, title: "Experience" },
    { sectionId: 4, title: "Certificate" },
  ];

  const renderContent = () => {
    switch (selectedSection) {
      case 1:
        return (
          <section className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <img
                src={`http://www.avatarsinpixels.com/minipix/eyJNb3V0aCI6IjIiLCJTaG9lcyI6IjEiLCJQYW50cyI6IjMiLCJUb3AiOiIxMyIsIkphY2tldCI6IjEiLCJOZWNrIjoiMSIsIkhhaXIiOiIxIiwic2tpblRvbmUiOiJmOGNiYWYiLCJleWVzVG9uZSI6Ijg3YzM3YiIsImV5ZXNUb25lMiI6ImRhZWIyOSIsIm1hc2tUb25lIjoiM2Y0NDg3IiwiaGFpclRvbmUiOiJlZTQ1N2IiLCJoYWlyVG9uZTIiOiJmNGMyYjQiLCJ1bmRlcndlYXJUb25lIjoiZmRjMThhIiwidW5kZXJ3ZWFyVG9uZTIiOiIzNjU5ZGMiLCJwYW50c1RvbmUiOiIzZjQ0ODciLCJwYW50c1RvbmUyIjoiM2Y0NDg3IiwidG9wVG9uZSI6ImZmZmZmZiIsInRvcFRvbmUyIjoiMmVkZmMxIiwid2luZ3NUb25lIjoiZTE3ZTdmIiwid2luZ3NUb25lMiI6ImRmY2ZhZSIsInNob2VzVG9uZSI6ImQ2ZDZkNiIsInNvY2tzVG9uZSI6ImE2NGE4YyIsInNvY2tzVG9uZTIiOiIyOWNkODgiLCJnbG92ZXNUb25lIjoiZTI4YmVlIiwiZ2xvdmVzVG9uZTIiOiJhODE2YjUiLCJoYXRUb25lIjoiZGNhYjA0IiwiaGF0VG9uZTIiOiIzOGMyMzgiLCJjYXBlVG9uZSI6IjUwNTY2MiIsImNhcGVUb25lMiI6ImM1MmM2ZSIsImJlbHRUb25lIjoiM2FmNzk4IiwiamFja2V0VG9uZSI6ImQ2ZDZkNiIsImphY2tldFRvbmUyIjoiOWJkZGRlIiwibmVja1RvbmUiOiIxNjQwOTAiLCJuZWNrVG9uZTIiOiJjMzE3NzEifQ==/1/show.png`}
                alt="Avatar"
                width={150}
                height={150}
                className="rounded-lg border border-gray-400"
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold mb-2">Navaphan Singkaew</h2>
              <h3 className="text-xl font-bold mb-4">Full Stack Developer</h3>
              <p className="text-sm leading-6">
                A well-rounded Developer with a strong track record in building
                high-quality web applications that focus on performance,
                scalability, and user experience. With expertise in both
                front-end and back-end technologies, I enjoy working in
                fast-paced environments where creative problem-solving and
                teamwork drive success. Whether it's designing smooth,
                interactive interfaces or streamlining back-end systems, I’m
                dedicated to delivering impactful and efficient solutions.
                Always eager to learn and stay ahead of technology trends, I
                look forward to contributing my skills to various development
                roles.
              </p>
            </div>
          </section>
        );
        case 2:
          return (
            <section className="flex flex-col gap-6">
              <div>
                <h2 className="text-xl font-bold mb-2">Frontend</h2>
                <p className="text-sm leading-6">
                  HTML, CSS, JavaScript, TypeScript, Tailwind CSS, React.js, Next.js, Ant-design, Material UI, Bootstrap
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Backend</h2>
                <p className="text-sm leading-6">
                  Node.js, Express.js, Restful API, Postman, NPM
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Database</h2>
                <p className="text-sm leading-6">
                  MySQL, PostgreSQL, MongoDB
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Version Control</h2>
                <p className="text-sm leading-6">Git</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Repository</h2>
                <p className="text-sm leading-6">GitHub, BitBucket</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Others</h2>
                <p className="text-sm leading-6">JIRA, Figma</p>
              </div>
            </section>
          );
        
      case 3:
        return <p>Here is the Experience section content.</p>;
      case 4:
        return <p>Here is the Certificate section content.</p>;
      default:
        return <p>Select a section to view its content.</p>;
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center p-6"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, 
            #149DD1,
            #3DC5E5,
            #92EECA,
            #ACF6CA,
            #fefefe
          )
        `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        imageRendering: "pixelated",
      }}
    >
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">About</h1>

      {/* Topic Selector */}
      <div className="flex gap-6 mb-8">
        {topics.map((topic) => (
          <div
            key={topic.sectionId}
            className="relative"
            onClick={() => setSelectedSection(topic.sectionId)}
          >
            <span
              className={`cursor-pointer text-lg ${
                selectedSection === topic.sectionId
                  ? "text-black font-bold"
                  : "text-gray-600"
              }`}
            >
              {topic.title}
            </span>
            {selectedSection === topic.sectionId && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-[4px] bg-black"
              />
            )}
          </div>
        ))}
      </div>

      {/* Section Content */}
      <div className="nes-container is-rounded p-6 w-full max-w-4xl bg-white shadow-md">
        {renderContent()}
      </div>
    </div>
  );
};

export default AboutPage;
