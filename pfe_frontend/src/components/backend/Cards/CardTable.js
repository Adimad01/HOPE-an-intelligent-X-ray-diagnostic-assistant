import React ,{useState,useEffect} from "react";
import PropTypes from "prop-types";

// components/backend

import TableDropdown from "components/backend/Dropdowns/TableDropdown.js";
import RequestService from "services/RequestService";
import { BACKEND_URL } from "components/frontend/env";

export default function CardTable({ color }) {
  const [diagnostics,setDiagnostics] = useState([])
  const [diagnosticsFiltred,setDiagnosticsFiltred] = useState([])
  useEffect(()=>{
      const fetchDiagnostics=async ()=>{
         const res = await RequestService.get(BACKEND_URL+"/diagnostic/all",true)
         if(res[0]===200){
           setDiagnostics(res[1].diagnostics)
           setDiagnosticsFiltred(res[1].diagnostics)

         }
      }
      fetchDiagnostics()
  },[])
  const filter = (e)=>{
    const result = diagnostics.filter(diagnostic=>diagnostic.name.includes(e.target.value))
    setDiagnosticsFiltred(result)
  }
  return (
    <div>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Vos diagnostics antérieurs
              </h3><br/>
              <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                      <i className="fas fa-search"></i>
                    </span>
                    <input
                      type="text"
                      placeholder="Recherher un dignostic..."
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                      onChange={(e)=>filter(e)}
                    />
                  </div>
              </form>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto" style={{maxHeight:"500px",overflow:"scroll"}}>
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
              <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Nom
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Image
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Stade A
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Stade B
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Stade C
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Stade D
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Stade E
                </th>
                
              </tr>
            </thead>
            <tbody>
              {diagnosticsFiltred && diagnosticsFiltred.map((diagnostic,index)=>
               <tr key={index}>
                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  {diagnostic.name}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left flex items-center">
                    <img
                      src={diagnostic.image}
                      className="h-12 w-12 bg-white rounded-full border"
                      alt="..."
                    />
                    <span
                      className={
                        "ml-3 font-bold " +
                        +(color === "light" ? "text-blueGray-600" : "text-white")
                      }
                    >
                      
                    </span>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  {diagnostic.A}%
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  {diagnostic.B}%
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  {diagnostic.C}%
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  {diagnostic.D}%
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  {diagnostic.E}%
                  </td>
                  
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-right">
                    <TableDropdown />
                  </td>
                </tr>
                )
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
