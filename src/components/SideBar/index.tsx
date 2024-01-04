import { SideBarProps } from "types/props";

import { IoHomeOutline } from "react-icons/io5";
import { BiMovie } from "react-icons/bi";
import { BiMoviePlay } from "react-icons/bi";
import { MdOutlineUpcoming } from "react-icons/md";

export default function SideBar({ status, handleStatusSideBar }: SideBarProps) {
  if (status) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  return (
    <>
      <div
        className={`absolute ${
          status ? "x-translate-0" : "-translate-x-full"
        } w-48 sm:hidden block h-screen bg-black z-20 border-r border-white transition-all duration-200`}
      >
        <ul className="text-white ml-4 font-bold space-y-6 mt-12">
          <li className="pt-6">
            <a
              href="/"
              className="flex hover:text-standard transition-colors"
              onClick={() => handleStatusSideBar()}
            >
              <IoHomeOutline className="text-2xl mr-2" />
              <p
                className={`transition-all ${
                  status ? "text-xl" : "text-[0px]"
                }`}
              >
                Home
              </p>
            </a>
          </li>
          <li>
            <a
              href="/#moviesSection"
              className="flex hover:text-standard transition-colors"
              onClick={() => handleStatusSideBar()}
            >
              <BiMovie className="text-2xl mr-2" />
              <p
                className={`transition-all ${
                  status ? "text-xl" : "text-[0px]"
                }`}
              >
                Movies
              </p>
            </a>
          </li>
          <li>
            <a
              href="/#playing-now"
              className="flex hover:text-standard transition-colors"
              onClick={() => handleStatusSideBar()}
            >
              <BiMoviePlay className="text-2xl mr-2" />
              <p
                className={`transition-all ${
                  status ? "text-xl" : "text-[0px]"
                }`}
              >
                Playing Now
              </p>
            </a>
          </li>
          <li>
            <a
              href="/#upcoming"
              className="flex hover:text-standard transition-colors"
              onClick={() => handleStatusSideBar()}
            >
              <MdOutlineUpcoming className="text-2xl mr-2" />
              <p
                className={`transition-all ${
                  status ? "text-xl" : "text-[0px]"
                }`}
              >
                Upcoming
              </p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
