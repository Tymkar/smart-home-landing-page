import "./App.css";
import logo from "../src/assets/logo.svg";

export default function App() {
  return (
    <nav className="mx-auto p-4 bg-amber-400">
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="/"
          aria-label="Go to homepage"
          className="
          focus:outline-none 
          focus-visible:ring-4 
          ring-neutral-900 
          rounded-sm ring-offset-4 
          ring-offset-amber-400 
          lg:absolute 
          lg:left-1/2
          lg:-translate-x-1/2
          lg:top-9
          z-50
          hover:opacity-75
          transition-opacity
          "
        >
          <img
            src={logo}
            alt="Smart Home Logo"
            width="200"
            className="w-48 md:w-64 lg:w-72"
          />
        </a>
        <button
          id="menu"
          className="
          lg:hidden 
          focus:outline-none 
          focus-visible:ring-4 
          ring-neutral-900 
          rounded-sm ring-offset-4 
          ring-offset-amber-400
          text-neutral-900
          hover:text-neutral-600
          transition-colors "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
