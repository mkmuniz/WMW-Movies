import "./styles.css";

import MoviesSection from "components/MoviesSection";
import Header from "components/Header";
import ScrollToTopButton from "components/ScrollToTop";

export default function App() {
  return (
    <div className="App">
      <Header />
      <MoviesSection />
      <ScrollToTopButton />
    </div>
  );
}
