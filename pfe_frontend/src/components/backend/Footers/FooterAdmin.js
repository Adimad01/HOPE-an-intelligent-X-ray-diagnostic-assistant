import React from "react";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block mt-5 py-4" style={{'minHeight':'100px','marginTop':'100px'}}>
        <div className="container  mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=nr-footer-admin"
                  className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                >
                  Universite d'Alger 1
                </a>
              </div>
            </div>
            </div>
        </div>
      </footer>
    </>
  );
}
