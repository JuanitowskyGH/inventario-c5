import React, { useState } from 'react';
import UserIcon from '../icons/UsersIcon';
import AddUserIcon from '../icons/AddUserIcon';
import InventoryIcon from '../icons/InventoryIcon';
import AddInventoryIcon from '../icons/AddInventoryIcon';

import { Link, Outlet } from 'react-router-dom';

export const Menu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <nav className="absolute left-0 top-0 h-15 w-full bg-white shadow-black shadow-md">
        <div className="px-5 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                type="button"
                onClick={toggleDrawer}
                aria-controls="drawer-navigation"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link to={"/dashboard"} className="flex ms-2 md:me-24">
                <img src="/tlx.png" className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white italic">
                  Inventario C5
                </span>
              </Link>
            </div>

            <div
              id="drawer-navigation"
              className={`fixed top-0 left-0 z-40 w-46 h-screen p-4 shadow-lg shadow-black transition-transform bg-white dark:bg-gray-800 ${
                isDrawerOpen ? 'transform-none' : '-translate-x-full'
              }`}
              tabIndex="-1"
              aria-labelledby="drawer-navigation-label"
            >
              <h5 className="flex justify-start pl-2 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
                Menu
              </h5>
              <button
                type="button"
                onClick={closeDrawer}
                aria-controls="drawer-navigation"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close menu</span>
              </button>
              <div className="py-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                  <li className="mb-10 focus:text-blue-tlax">
                    <Link
                      to="/dashboard"
                      className="flex items-center p-2 text-gray-900 focus:text-blue-tlax rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 21"
                      >
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                      </svg>
                      <span className="pl-7 ms-3 text-center focus:text-blue-tlax hover:text-blue-tlax">Dashboard</span>
                    </Link>
                  </li>
                  <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                    <li>
                      <h5 className="flex justify-start pl-2 text-base uppercase font-semibold text-gray-500 dark:text-gray-400">
                        Administracion
                      </h5>
                    </li>
                    <li>
                      <Link
                        to={"/usuarios"}
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <UserIcon
                          className="flex-shrink w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                        />
                        <span className="pl-7 ms-3 whitespace-nowrap text-left">
                          Ver usuarios
                        </span>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <AddUserIcon
                          className="flex-shrink w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                        />
                        <span className="pl-7 ms-3 whitespace-nowrap">
                          Agregar nuevo usuario
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                    <li>
                      <h5 className="flex justify-start pl-2 text-base uppercase font-semibold text-gray-500 dark:text-gray-400">
                        Inventario
                      </h5>
                    </li>
                    <li>
                      <Link
                        to={"/inventario"}
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <InventoryIcon
                          className="flex-shrink w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                        />
                        <span className="pl-7 ms-3 whitespace-nowrap">
                          Ver inventario
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/addinventario"}
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <AddInventoryIcon
                          className="flex-shrink w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                        />
                        <span className="pl-7 ms-3 whitespace-nowrap">
                          Agregar registro
                        </span>
                      </Link>
                    </li>
                    <li>
                      <div className="flex justify-center mt-auto pt-10">
                        <img
                          src="/tlx.png"
                          alt=""
                          className="w-40 h-50 items-center text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        />
                      </div>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>


            <div className="flex items-center">
                <div className="flex items-center ms-3">
                    <div>
                    <button type="button" className="flex text-sm bg-gray-100 rounded-full focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
                    </button>
                    </div>
                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                    <div className="px-4 py-3" role="none">
                        <p className="text-sm text-gray-900 dark:text-white" role="none">
                        Neil Sims
                        </p>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                        neil.sims@flowbite.com
                        </p>
                    </div>
                    <ul className="py-1" role="none">
                        <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                        </li>
                        <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                        </li>
                        <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                        </li>
                        <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </nav>
</div>

  )
}
