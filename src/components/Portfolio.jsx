import React from "react";
import blog from "../assets/portfolio/blog.png";
import video from "../assets/portfolio/video.png"
import crypto from "../assets/portfolio/crypto.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: blog,
      liveLink: 'https://personal-blogging-alpha.vercel.app/',
      githubLink: 'https://github.com/Yatin-Git/blog-app',
    },
    {
      id:2,
      src:video,
      liveLink: 'https://videohubdemo.vercel.app/',
      githubLink: 'https://github.com/Yatin-Git/video-hub',
    },
    {
      id:3,
      src:crypto,
      liveLink: 'https://cryptovue.vercel.app/',
      githubLink: 'https://github.com/Yatin-Git/crypto-app',
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, liveLink, githubLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg flex flex-col items-center w-50">
              <img
                src={src}
                alt=""
                className="rounded-md object-cover w-full h-full duration-200 hover:scale-105 "

              />
              <div className="flex items-center justify-center">
              <button
                    onClick={() => window.open(liveLink, '_blank')}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </button>
                  <button
                    onClick={() => window.open(githubLink, '_blank')}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Code
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
