import React from "react";

function DownloadButton() {
  return (
    <a
      href="/"
      className="
        py-2
        px-6
        bg-amber-400
        dark:text-neutral-900
        mx-auto
        my-12
        flex
        gap-2
        shadow-xl
        hover:shadow-none
        transition-shadow
        focus:outline-none
        focus-visible:ring-4
        ring-neutral-900
        rounded-md
        ring-offset-4
        ring-offset-white
        dark:ring-amber-400
        dark:ring-offset-neutral-800
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      <span>Download the App</span>
    </a>
  );
}

export default DownloadButton;
