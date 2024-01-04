import { useState } from "react";
import SideBar from "components/SideBar";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const baseHamburgerStyle = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 group-hover:bg-[#FAD12B] transition-all`;

  const handleStatusSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar status={isOpen} handleStatusSideBar={handleStatusSideBar} />
      <nav className="bg-black w-full z-20 top-0 start-0 font-bold">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            className="sm:hidden flex flex-col h-12 w-12 z-20 rounded justify-center items-center group"
            onClick={handleStatusSideBar}
          >
            <div
              className={`${baseHamburgerStyle} ${
                isOpen ? "rotate-45 translate-y-3" : ""
              }`}
            />
            <div
              className={`${baseHamburgerStyle} ${isOpen ? "opacity-0" : ""}`}
            />
            <div
              className={`${baseHamburgerStyle} ${
                isOpen ? "-rotate-45 -translate-y-3" : ""
              }`}
            />
          </button>
          <a href="/" className="text-white">
            <img src="./logo.png" className="w-16 mb-1" />
          </a>
          <ul className="sm:flex flex-row text-white font-bold space-x-4 hidden">
            <li>
              <a
                href="/"
                className="hover:text-standard transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/#upcoming"
                className="hover:text-standard transition-colors duration-300"
              >
                Upcoming
              </a>
            </li>
            <li>
              <a
                href="/#playing-now"
                className="hover:text-standard transition-colors duration-300"
              >
                Playing Now
              </a>
            </li>
            <li>
              <a
                href="/#moviesSection"
                className="p-3 bg-standard text-black rounded hover:bg-standardHover"
              >
                Movies
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
