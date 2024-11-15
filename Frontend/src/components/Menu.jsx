import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import UserIcon from "../icons/UserIcon";
import axios from "axios";
import { Link } from "react-router-dom";
import ListIcon from "@material-ui/icons/List";
import SignOutIcon from "../icons/SignOutIcon";
import { menuHook } from "../hooks/services/menu.hook";
import { useContext, useEffect, useState } from "react";
import { LoanContext } from "../services/LoanService";
import endpoints from "../services/endpoints";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";

export const Menu = ({ role, onMenuToggle }) => {
  const {
    isDrawerOpen,
    isMobile,
    userInfo,
    dropdownOpen,
    newConsumableCount,
    requestCount,
    handleMouseEnter,
    toggleDrawer,
    closeDrawer,
    handleMouseLeave,
    logout
  } = menuHook(onMenuToggle);


  return (
    <div className="relative">
      <nav className="absolute left-0 top-0 h-15 w-full bg-white shadow-black shadow-md">
        <div className="px-5 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                type="button"
                onClick={toggleDrawer}
                aria-controls="drawer-navigation"
                className="inline-flex items-center p-2 text-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-300
                 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
              <Link
                to={"/dashboard"}
                className="flex ml-8 ms-2 md:me-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
              >
                <img src="/favicon.ico" className="h-8 me-3" alt="Tlx Logo" />
                <span className="self-center text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-blue-tlax text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white italic">
                  Inventario C5i
                </span>
              </Link>
            </div>

            <div className="flex items-center">
              {role === "Administrador" && (
                <Link
                  to="/solicitudes"
                  className="mr-6 border border-blue-tlax rounded-md p-2 flex items-center focus:outline-none hover:-translate-y-1 hover:scale-100 hover:bg-gray-100 duration-300"
                >
                  <ListAltIcon className=" text-blue-tlax hover:text-blue-tlax-light" />
                  <span className="italic font-medium text-black pl-1 ">
                    Solicitudes
                  </span>

                  {requestCount > 0 && (
                    <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                      {requestCount}
                    </span>
                  )}
                </Link>
              )}
              <Link
                to="/lista"
                className="mr-6 border border-blue-tlax rounded-md p-2 flex items-center focus:outline-none hover:-translate-y-1 hover:scale-100 hover:bg-gray-100 duration-300"
              >
                <ListIcon className="text-blue-tlax hover:text-blue-tlax-light" />
                <span className="italic font-medium text-black pl-1 ">
                  Mi lista
                </span>

                {newConsumableCount > 0 && (
                  <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                    {newConsumableCount}
                  </span>
                )}
              </Link>
              <div
                className="relative inline-block text-left"
                onMouseEnter={() => handleMouseEnter("dropdown")}
                onMouseLeave={() => handleMouseLeave("dropdown")}
              >
                <button
                  type="button"
                  className="flex items-center focus:outline-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-150"
                  //onClick={toggleDropdown}
                >
                  <img
                    src={userInfo.imagenUrl || "/user.jpg"}
                    className="w-11 h-10 rounded-full mr-3 object-cover"
                    alt="User Profile"
                  />
                  <span className="ml-2 italic font-medium">
                    {userInfo.nombre} {userInfo.apellidop} {userInfo.apellidom}
                  </span>
                </button>
                <div
                  className={`absolute z-20 w-full ${
                    dropdownOpen.dropdown ? "block" : "hidden"
                  } bg-white divide-y divide-gray-100 rounded-lg shadow w-64 dark:bg-gray-700`}
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <Link
                        to="/cuenta"
                        className="px-4 py-2 w-full h-full 
                      transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-150
                      text-base italic text-center inline-flex items-center
                       text-gray-700 hover:bg-gray-100"
                      >
                        <UserIcon className="w-3 h-3 mr-2" />
                        Perfil
                      </Link>{" "}
                    </li>
                    <li>
                      <button
                        onClick={logout}
                        className="px-4 py-2 w-full h-full font-semibold
                      transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-150
                      text-base italic text-center inline-flex items-center 
                      text-gray-700 hover:bg-gray-100"
                      >
                        <SignOutIcon className="w-3 h-3 mr-2" />
                        Cerrar sesión
                      </button>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 h-screen p-2 shadow-md shadow-black overflow-y-auto transition-transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white w-64 dark:bg-gray-800 ${
          isMobile ? "shadow-lg shadow-black" : ""
        }`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="flex justify-start pl-2 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
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
                className="flex items-center p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-150
                      text-gray-900 focus:text-blue-tlax rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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
                <span className="pl-7 ms-3 text-center focus:text-blue-tlax hover:text-blue-tlax">
                  Dashboard
                </span>
              </Link>
            </li>
            {(role === "Administrador" || role === "Moderador") && (
              <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                <li>
                  <h5 className="flex justify-start pl-2 text-base uppercase font-semibold text-gray-500 dark:text-gray-400">
                    Administracion
                  </h5>
                </li>
                <li>
                  <Link
                    to={"/usuarios"}
                    className="flex items-center p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-150
                        text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <PersonOutlineOutlinedIcon
                      className="flex-shrink w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                    />
                    <span className="pl-7 ms-3 whitespace-nowrap text-left">
                      Ver usuarios
                    </span>
                  </Link>
                </li>
                {role === "Administrador" && (
                  <li>
                    <Link
                      to={"/addusuarios"}
                      className="flex items-center p-2 text-gray-900 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-150
                        dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <PersonAddOutlinedIcon
                        className="flex-shrink w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                      />
                      <span className="pl-7 ms-3 whitespace-nowrap">
                        Agregar usuario
                      </span>
                    </Link>
                  </li>
                )}
              </ul>
            )}
            <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
              <li>
                <h5 className="flex justify-start pl-2 text-base uppercase font-semibold text-gray-500 dark:text-gray-400">
                  Inventario
                </h5>
              </li>
              <li>
                <Link
                  to={"/inventario"}
                  className="flex items-center p-2 text-gray-900 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-150
                        dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <LibraryBooksOutlinedIcon
                    className="flex-shrink w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                  />
                  <span className="pl-7 ms-3 whitespace-nowrap text-left">
                    Ver inventario
                  </span>
                </Link>
              </li>
              {(role === "Administrador" || role === "Moderador") && (
                <li>
                  <Link
                    to={"/addinventario"}
                    className="flex items-center p-2 text-gray-900 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-150
                        dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <PostAddOutlinedIcon
                      className="flex-shrink w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                    />
                    <span className="pl-7 ms-3 whitespace-nowrap">
                      Agregar registro
                    </span>
                  </Link>
                </li>
              )}
            </ul>
            <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
              <li>
                <h5 className="flex justify-start pl-2 text-base uppercase font-semibold text-gray-500 dark:text-gray-400">
                  Consumibles
                </h5>
              </li>
              <li>
                <Link
                  to={"/consumibles"}
                  className="flex items-center p-2 text-gray-900 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-150
                        dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <DesktopWindowsIcon
                    className="flex-shrink w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                  />
                  <span className="pl-7 ms-3 whitespace-nowrap text-left">
                    Ver consumibles
                  </span>
                </Link>
              </li>
              {(role === "Administrador" || role === "Moderador") && (
                <div>
                  <li>
                    <Link
                      to={"/addconsumibles"}
                      className="flex items-center p-2 text-gray-900 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-150
                        dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <AddToQueueIcon
                        className="flex-shrink text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                      />
                      <span className="pl-7 ms-3 whitespace-nowrap">
                        Agregar consumible
                      </span>
                    </Link>
                  </li>
                </div>
              )}
            </ul>
            <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
              <li>
                <h5 className="flex justify-start pl-2 text-base uppercase font-semibold text-gray-500 dark:text-gray-400">
                  Servicios
                </h5>
              </li>
              {role === "Administrador" && (
                  <li>
                    <Link
                      to={"/solicitudes"}
                      className="flex items-center p-2 text-gray-900 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-150
                        dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <ListAltIcon
                        className="flex-shrink w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                      />
                      <span className="pl-7 ms-3 whitespace-nowrap text-left">
                        Solicitudes
                      </span>
                      {requestCount > 0 && (
                        <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                          {requestCount}
                        </span>
                      )}
                    </Link>
                  </li>
                  )}
                  {(role === "Administrador" || role === "Moderador") && (
                  <li>
                    <Link
                      to={"/reportes"}
                      className="flex items-center p-2 text-gray-900 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-150
                        dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <AssignmentOutlinedIcon
                        className="flex-shrink w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                      />
                      <span className="pl-7 ms-3 whitespace-nowrap text-left">
                        Reportes
                      </span>
                    </Link>
                  </li>
              )}
              <li>
                <Link
                  to={"/lista"}
                  className="flex items-center p-2 text-gray-900 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-150
                        dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <ListIcon
                    className="flex-shrink w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                  />
                  <span className="pl-7 ms-3 whitespace-nowrap">Mi lista</span>
                  {newConsumableCount > 0 && (
                    <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                      {newConsumableCount}
                    </span>
                  )}
                </Link>
              </li>

              <li>
                <a
                  href="https://cesesptlax.gob.mx/"
                  className="flex items-center p-11 mt-6"
                >
                  <img src="/tlx.png" alt="" className="w-40 h-50/" />
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};
