import React from "react";

export default function Location() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-map-pin w-10 h-12"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#00bfd8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="11" r="3" />
        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
      </svg>
    </div>
  );
}
