import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Bachelors in Computer Engineering. Over 1 year of experience. Ability
          to work with Java, SpringBoot, JavaScript, ReactJs. Can work well
          under pressure and make the best of any situation. Passionate
          individual with great interpersonal and communication skills.
        </p>

        <br />

        <p className="text-xl">
          Dedicated to continuous learning and contributing to innovative
          projects.
        </p>
      </div>
    </div>
  );
};

export default About;
