export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white rounded-lg shadow font-bold mt-12 w-full">
        <div className="w-full">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 ml-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src="./logo.png" className="w-16 mb-1" />
            </a>
            <ul className="flex flex-wrap items-center space-x-4 mb-6 sm:mr-6 sm:ml-0 ml-4 text-sm font-medium sm:mb-0">
              <li>
                <a
                  href="https://dev-mikael.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-standard transition-colors duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="https://www.github.com/mkmuniz"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-standard transition-colors duration-300"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mikael-muniz-ribeiro-5764961a3/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-standard transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-white text-center">
            © 2024{" "}
            <a
              href="https://dev-mikael.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="hover:text-standard transition-colors duration-300"
            >
              Mikael™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
