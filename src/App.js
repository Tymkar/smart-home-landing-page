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
          "
        >
          <img
            src={logo}
            alt="Smart Home Logo"
            width="200"
            className="w-48 md:w-64 lg:w-72"
          />
        </a>
      </div>
    </nav>
  );
}
