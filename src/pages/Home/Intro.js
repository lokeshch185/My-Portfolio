import React from 'react';

function Intro({ data }) {
    console.log(data)
  return (
    <div className="h-screen bg-gradient-to-br from-custom_blue to-custom_light_blue flex items-center justify-between px-10 py-5">
      <div className="flex flex-col items-start justify-center gap-8 ">
        <h1 className="text-white text-lg">{data.welcomeText || "Hi I'm"}</h1>
        <h1 className="text-7xl sm:text-4xl drop-shadow-md font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-600 to-amber-300 bg-white hover:scale-105 transform duration-200">
          {data.firstName} {data.lastName}
        </h1>
        <h1 className="text-5xl sm:text-3xl bg-gradient-to-tr text-transparent bg-clip-text font-semibold from-sky-600 to-sky-300">
          {data.caption || "I craft solutions!!"}
        </h1>
        <p className="text-white w-2/3">{data.description}</p>
        <a
          href="/lokesh_chaudhari_resume.pdf"
          download
          className="block border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Intro;
