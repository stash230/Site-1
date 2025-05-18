import React from 'react';

function About() {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-white to-indigo-300 px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Image Column */}
        <div className="w-full md:w-1/2 space-y-10">
  <div className="relative rounded-2xl shadow-xl overflow-hidden max-h-[300px]">
    <img
      src={`${import.meta.env.BASE_URL}images/image6.jpg`}
      alt="Van Life 1"
      className="w-full object-cover h-full"
    />
    <p className="absolute bottom-1 left-1/2 -translate-x-1/2 text-white text-sm bg-black/20 px-3 py-1 rounded">
      Just a board and house set
    </p>
  </div>

  <div className="relative rounded-2xl shadow-xl overflow-hidden max-h-[300px]">
    <img
      src={`${import.meta.env.BASE_URL}images/image5.jpg`}
      alt="Van Life 2"
      className="w-full object-cover h-full"
    />
    <p className="absolute bottom-1 left-1/2 -translate-x-1/2 text-white text-sm bg-green-700/70 px-3 py-1 rounded">
      one of the views
    </p>
  </div>
</div>

        {/* Text Column */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6">
            What's to come           </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            This is just a holding and test site for the coming information about some chess history
          </p>
          <ul className="space-y-3 text-gray-600 text-left list-disc list-inside">
            <li><span className="font-medium">Chess Personalities</span> – the people of  Village Chess</li>
            <li><span className="font-medium">The history</span> – why it started and how it started</li>
            <li><span className="font-medium">The stories</span> – funny, crazy, all true-ish</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
