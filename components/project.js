import React from "react";
import Container from "./container";

export default function Project({ project, side }) {
  const { title, subTitle, does, imgs, funcs, live, repo } = project;

  return (
    <>
      <Container className="flex flex-wrap mb-4 lg:gap-10 lg:flex-nowrap justify-center bg-neutral-100 dark:bg-neutral-800 rounded-3xl shadow-lg shadow-neutral-500">
        <div
          className={`flex content-center justify-center w-full m-4 lg:basis-5/12 ${
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
              className="aspect-video object-cover rounded-3xl shadow-md shadow-neutral-600"
              alt={title}
            ></img>
          </a>
        </div>

        <div className="flex flex-wrap justify-center m-4 lg:basis-7/12">
          <div className="flex flex-col justify-center">
            <h3 className="text-center max-w-2xl text-3xl font-bold leading-snug tracking-wide text-neutral-800 lg:leading-tight lg:text-4xl dark:text-white">
              {title}
            </h3>
            <p className="text-center text-sm font-bold text-neutral-400 uppercase max-w-2xl py-2 leading-normal lg:text-lg">
              {subTitle}
            </p>
          </div>
          <div className="flex flex-col justify-center md:flex-row ">
            <div className="basis-full md:basis-1/2">
              <h4 className="text-center max-w-2xl text-xl font-bold leading-snug tracking-wide text-neutral-800 lg:leading-tight lg:text-2xl dark:text-white">
                What you can do:
              </h4>
              <ol className="w-full">
                {funcs.map((item, index) => (
                  <li key={index} className="text-center">
                    <span className="inline">&#10004; </span>
                    <h4 className="inline text-lg text-neutral-800 dark:text-neutral-200">
                      {item}
                    </h4>
                  </li>
                ))}
              </ol>
            </div>
            <div className="basis-full md:basis-1/2">
              <h4 className=" text-center max-w-2xl my-2 text-xl font-bold leading-snug tracking-wide text-neutral-800 lg:leading-tight lg:text-2xl dark:text-white">
                What I learnt to do:
              </h4>
              <ol className="w-full my-2 mx-4">
                {does.map((item, index) => (
                  <li key={index} className="text-center">
                    <span className="inline">&#10004; </span>
                    <h4 className="inline text-lg text-neutral-800 dark:text-neutral-200">
                      {item}
                    </h4>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
