import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = ({ tabs }) => {
  const router = useRouter();

  return (
    <nav className="flex flex-wrap content-center justify-center sm:w-3/5 w-11/12">
      <ul className="inline-flex space-x-6 lg:space-x-14">
        {tabs.map((tab) => (
          <li
            key={tab.name}
            className={`font-light sm:text-xs sm:px-2 text-sm px-4 py-1 rounded-full ${
              router.pathname === `/${tab.link}`
                ? "text-white bg-blue-800"
                : "text-blue-900 bg-blue-100 hover:text-white hover:bg-blue-500"
            }`}
          >
            <Link href={`/${tab.link}`}>
              <a>{tab.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
