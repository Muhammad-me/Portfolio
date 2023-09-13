import React from "react";

export default function Email({ stroke }: { stroke: string }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-mail w-10 h-10"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke={stroke}
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    </div>
  );
}
