import React from "react";
import Container from "./container";

export default function Project({ project, side }) {
  const { title, subTitle, does, imgs, funcs, live, repo } = project;

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap justify-center">
        <div
          className={`flex items-center justify-center w-full lg:basis-5/12 ${
            side === "right" ? "lg:order-1" : ""
          }`}
        >
          <a
            href={live ? live : repo}
            taget="_blank"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={imgs}
              className="aspect-1 object-cover rounded-3xl shadow-lg shadow-gray-600"
              alt={title}
            ></img>
          </a>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:basis-7/12 ${
            side === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div className={` ${side === "right" ? "text-right" : ""}`}>
            <div className="w-full mt-4 text-center">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-wide text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {title}
              </h3>
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
                {subTitle}
              </p>
            </div>
            <div className="flex flex-col md:flex-row text-center">
              <div className="basis-full md:basis-1/2 mr-4 ml-4">
                <h4 className="max-w-2xl mt-3 text-xl font-bold leading-snug tracking-wide text-gray-800 lg:leading-tight lg:text-2xl dark:text-white">
                  What you can do:
                </h4>
                <ol className="w-full mt-2 ml-4">
                  {funcs.map((item, index) => (
                    <li key={index} className="mt-2">
                      <span className="inline">&#10004; </span>
                      <h4 className="inline text-lg text-gray-800 dark:text-gray-200">
                        {item}
                      </h4>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="basis-full md:basis-1/2">
                <h4 className="max-w-2xl mt-3 text-xl font-bold leading-snug tracking-wide text-gray-800 lg:leading-tight lg:text-2xl dark:text-white">
                  What I learnt to do:
                </h4>
                <ol className="w-full mt-2 ml-4">
                  {does.map((item, index) => (
                    <li key={index} className="mt-2 ">
                      <span className="inline">&#10004; </span>
                      <h4 className="inline text-lg text-gray-800 dark:text-gray-200">
                        {item}
                      </h4>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
