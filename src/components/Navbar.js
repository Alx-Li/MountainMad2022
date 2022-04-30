import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header class="bg-green-300 sticky top-0 z-[200] drop-shadow-lg">
      <div className=" overflow-x-auto p-5 sticky top-0  z-[200] container mx-auto flex justify-center">
      
          <div className="p-5 mr-20 bg-gradient-to-b from-blue-400 to-blue-500 rounded-lg drop-shadow-3xl">
            <Link href="/">

              <a className="comic text-2xl font-bold text-white p-2 pl-20 pr-20 rounded-lg shadow-inner bg-gradient-to-b from-orange-300 to-orange-500 hover:from-orange-600 hover:to-orange-600"> Home </a>

            </Link>
          </div>
          <div className="p-5 mr-20 bg-gradient-to-b from-blue-400 to-blue-500 rounded-lg drop-shadow-3xl">
            <Link href="/Recipes">
              <a className="comic text-2xl font-bold text-white p-2 pl-20 pr-20 rounded-lg shadow-inner bg-gradient-to-b from-orange-300 to-orange-500 hover:from-orange-600 hover:to-orange-600 ">Recipes</a>
            </Link>
          </div>
          <div className="p-5 bg-gradient-to-b from-blue-400 to-blue-500 rounded-lg drop-shadow-3xl">
            <Link href="/Ingredients">
              <a className="comic text-2xl font-bold text-white p-2 pl-20 pr-20 rounded-lg shadow-inner bg-gradient-to-b from-orange-300 to-orange-500 hover:from-orange-600 hover:to-orange-600 ">Create</a>
            </Link>
          </div>
      </div>
    </header>
  );
}

export default Navbar;
