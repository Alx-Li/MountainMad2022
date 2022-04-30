import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header class="bg-green-300 sticky top-0 z-[200] drop-shadow-lg">
      <div className=" overflow-x-auto p-5 sticky top-0  z-[200] container mx-auto flex justify-center">
      
          <div className="p-5 mr-20 bg-blue-500 rounded-lg drop-shadow-3xl">
            <Link href="/">
              <a className="comic text-2xl font-bold text-white p-2 pl-20 pr-20 rounded-lg shadow-inner bg-orange-300 hover:bg-orange-400 "> About </a>
            </Link>
          </div>
          <div className="p-5 mr-20 bg-blue-500 rounded-lg drop-shadow-3xl">
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
