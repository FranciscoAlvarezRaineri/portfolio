import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  const navigation = ["Projects", "Education", "About", "Contact"];

  return (
    <div className="w-full fixed z-50 clearNav">
      <nav className="container relative flex flex-wrap content-center justify-between p-8 mx-auto md:justify-between xl:px-0 h-20">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full md:w-auto">
                <Disclosure.Panel className="relative ml-auto mt-60 text-center">
                  <div className="flex flex-wrap md:hidden clearNav">
                    {navigation.map((menu, index) => (
                      <Link key={index} href={`#${menu}`}>
                        <a className="w-full px-4 py-2 ml-4 text-lg text-neutral-300 hover:text-indigo-400 focus:text-indigo-400  focus:outline-none focus:bg-neutral-700">
                          {menu}
                        </a>
                      </Link>
                    ))}
                  </div>
                </Disclosure.Panel>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto rounded-md md:hidden hover:text-indigo-400 focus:text-indigo-400 focus:outline-none text-neutral-300 bg-neutral-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>
              </div>
            </>
          )}
        </Disclosure>

        <div className="hidden text-center md:flex md:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none md:pt-0 md:flex">
            {navigation.map((menu, index) => (
              <li
                className="mr-3 nav__item shadow-md shadow-neutral-500"
                key={index}
              >
                <Link href={`#${menu}`}>
                  <a className="inline-block px-4 py-2 text-lg font-normal no-underline rounded-md text-neutral-200 hover:text-indigo-400 focus:text-indigo-400 focus:outline-none bg-neutral-800">
                    {menu}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 md:flex nav__item">
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
