import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-green-300 sticky top-0 z-50 drop-shadow-md">
      
      <div className=" overflow-x-auto overflow-y-hidden container mx-auto flex justify-center">
      
          <div className="p-5 mr-20 bg-blue-500 rounded-lg drop-shadow-md">
            <Link href="/">
              <a className="comic text-2xl font-bold text-white p-2 pl-20 pr-20 rounded-lg shadow-inner bg-orange-300 hover:bg-orange-400 "> About </a>
            </Link>
          </div>
          <div className="p-5 mr-20 bg-blue-500 rounded-lg drop-shadow-md">
            <Link href="/Recipes">
              <a className="comic text-2xl font-bold text-white p-2 pl-20 pr-20 rounded-lg shadow-inner bg-orange-300 hover:bg-orange-400 ">Recipes</a>
            </Link>
          </div>
          <div className="p-5 bg-blue-500 rounded-lg drop-shadow-3xl">
            <Link href="/Ingredients">
              <a className="comic text-2xl font-bold text-white p-2 pl-20 pr-20 rounded-lg shadow-inner bg-orange-300 hover:bg-orange-400 ">Create</a>
            </Link>
          </div>

      </div>
    </header>
  );
}

export default Navbar;
