/*eslint-disable*/
import React from "react";
import { Link ,withRouter} from "react-router-dom";
import app from '../../../firebase'
import logo from "components/frontend/images/logo-full.png";

import NotificationDropdown from "components/backend/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/backend/Dropdowns/UserDropdown.js";
import StorageService from "services/StorageService";
const Sidebar=({history})=> {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const logout = (e)=>{
    e.preventDefault();
    app.auth().signOut()
    StorageService.deleteUser()
    history.push("/connexion")
  }
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            HOPE <img src={logo} alt="Logo" style={{with:"20px",height:"20px",float:"right"}}/>
          </Link>
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    HOPE
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            <hr className="my-4 md:min-w-full" />
           

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                {/*
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/dashboard") !== -1
                      ? "text-green-500 hover:text-green-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/dashboard"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Tableau de bord
                </Link>
                  */}
                  </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/diagnostic") !== -1
                      ? "text-green-500 hover:text-green-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/diagnostic"
                >
                  <i
                    className={
                      "fas fa-stethoscope mr-2 text-sm " +
                      (window.location.href.indexOf("/diagnostic") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Faire un diagnostic
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/historic") !== -1
                      ? "text-green-500 hover:text-green-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/historic"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/historic") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Vos diagnostics
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/profil") !== -1
                      ? "text-green-500 hover:text-green-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/profil"
                >
                  <i
                    className={
                      "fas fa-user mr-2 text-sm " +
                      (window.location.href.indexOf("/profil") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Profil
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/logout") !== -1
                      ? "text-green-500 hover:text-green-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/logout"
                  onClick={(e)=>logout(e)}
                >
                  <i
                    className={
                      "fas fa-sign-out-alt mr-2 text-sm " +
                      (window.location.href.indexOf("/logout") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Déconnexion
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


export default withRouter(Sidebar);