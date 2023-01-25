import React from "react";
import Container from "./container";

export default function SectionTitle(props) {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.title && (
        <h2 className="max-w-2xl mb-3 text-3xl font-bold tracking-wider text-neutral-800 lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}
      {props.subtitle && (
        <div className="text-sm font-bold text-neutral-400 uppercase lg:text-lg">
          {props.subtitle}
        </div>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-neutral-500 lg:text-xl xl:text-xl dark:text-neutral-300">
          {props.children}
        </p>
      )}
    </Container>
  );
}
