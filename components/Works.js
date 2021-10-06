import React from 'react';

import { projects } from '../data';

const Works = () => {
    return (
        <div>
            <section id="projects" className="text-gray-400  body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className=" works flex flex-col w-full mb-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto inline-block w-10 mb-4" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
            <h1 className="sm:text-4xl text-5xl font-medium title-font mb-4 text-white">
              What I've Built
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-10">
              Some of my projects :
            </p>
          </div>
          <div className="flex flex-wrap -my-4">
            {projects.slice(0, 6).map((project) => (
              <a
                href={project.link} target="_blank"
                rel="noreferrer"
                key={project.id}
                className="sm:w-1/2 w-100 p-4">
                <div className=" flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 project-h w-full  object-cover object-top"
                    src={project.image}
                  />
                  <div className="content project-h  px-4 py-5 relative z-10border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-xl title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-2xl font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="text-lg leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
            
        </div>
    )
}
export default Works;