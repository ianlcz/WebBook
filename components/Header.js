import Link from "next/link";
import NavBar from "./NavBar";
import { isMobileOnly } from "react-device-detect";

const Header = () => {
  return (
    <header className="flex border-b-2 px-8 py-1">
      <div
        className={`flex flex-wrap content-center ${
          isMobileOnly
            ? "justify-center w-full"
            : "justify-start sm:w-6 md:w-1/4 lg:w-3/12"
        }`}
      >
        <Link href="/">
          <a className="text-4xl text-blue-900">
            <span className="font-thin">Web</span>Book
          </a>
        </Link>
      </div>

      {isMobileOnly ? (
        <></>
      ) : (
        <>
          <NavBar
            tabs={[
              { name: "Nouveautés", link: "news" },
              { name: "Séries littéraires", link: "literary-series" },
              { name: "Genres", link: "genres" },
            ]}
          />
          <div className="flex flex-wrap content-center justify-end w-1/4 lg:w-3/12">
            <Link href="/login">
              <a className="inline-flex justify-center sm:text-sm shadow-inner px-4 py-1 rounded-full font-medium text-white bg-blue-800 hover:bg-blue-700">
                Me connecter
              </a>
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
