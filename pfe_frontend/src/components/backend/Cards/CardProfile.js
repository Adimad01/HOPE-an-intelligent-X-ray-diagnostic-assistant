import React from "react";

// components/backend

export default function CardProfile({user}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={user.photoURL}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-24 lg:-ml-16 max-w-150-px"
                 style={{marginLeft:"-3em"}}
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-8">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                
                
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              Mike LOGOVI
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              Algerie, Algers
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              Vétérinaire certifié
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              Université d'Alger
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
           
          </div>
        </div>
      </div>
    </>
  );
}
