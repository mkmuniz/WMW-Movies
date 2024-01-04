import useScrollToTop from "./useScrollToTop";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const { shown, scrollToTop } = useScrollToTop(300);

  return (
    <button
      aria-label="scroll to top"
      onClick={scrollToTop}
      className={`${
        shown ? "scale-100" : "scale-0"
      } w-12 h-12 transition-transform duration-200 flex fixed right-10 bottom-10 bg-standard rounded-full shadow-lg shadow-gray-900 justify-center items-center`}
    >
      <FaArrowUp />
    </button>
  );
}
