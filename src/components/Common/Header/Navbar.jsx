import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

import { ALL_ROUTES_PATHS, NAVBAR_ROUTES } from '../../../utils/routes';

const Dropdown = ({ item = {}, title = '' }) => (
  <section
    className={`${'text-gray-300 hover:text-white border-transparent rounded-md'}
     py-2 text-xs lg:text-13px font-medium border-b-2 whitespace-nowrap relative group z-50 `}>
    <Link
      key={item.pathName}
      to={item.pathName}
      className="text-xl w-full h-10 rounded-md flex items-center  hover:bg-indigo-500 cursor-pointer px-3">
      {title}
    </Link>
  </section>
);
export default function Header() {
  return (
    <Disclosure as="nav" className={`relative headerPurpleBG z-50`}>
      {({ open }) => (
        <>
          <section className="mx-auto px-4 sm:px-6 lg:px-8 z-50">
            <section className="flex h-16 sm:h-20 justify-between z-50">
              <section className="flex z-50">
                <section className="-ml-2 mr-2 flex items-center lg:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </section>
                <Link to={ALL_ROUTES_PATHS.LANDING} className="flex z-20">
                  <section
                    className={`${classes.reduceLineHeight} text-xs sm:text-2xl lg:text-4xl ml-4 flex items-center font-bold pinkWhiteText GrindFontFamily max-w-min xl:max-w-max`}>
                    Little Lemon
                  </section>
                </Link>
              </section>
              <section className="flex gap-10 items-center z-50 ">
                <section className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4">
                  {NAVBAR_ROUTES.map((item) => (
                    <Dropdown key={item.pathName} title={item.heading} item={item} />
                  ))}
                </section>
              </section>
            </section>
          </section>
        </>
      )}
    </Disclosure>
  );
}
