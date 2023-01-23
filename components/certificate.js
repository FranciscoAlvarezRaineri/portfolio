import React from "react";

export default function Certificate({ certificate }) {
  const { title, insti, webInsti, url, img } = certificate;
  return (
    <a href={url} target="_blank">
      <div className="w-full h-full bg-neutral-100 px-12 rounded-3xl py-12 dark:bg-neutral-800 shadow-lg shadow-neutral-500">
        <img src={img} className="object-cover rounded-3xl" alt={title}></img>
        {/*         <a className="text-2xl leading-normal" href={webInsti} target="_blank">
          {insti}
        </a> */}
      </div>
    </a>
  );
}
