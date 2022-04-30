import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Select from "react-select";
import { useRef } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "../state";

function Ingredients() {
  const mealNameInputRef = useRef();
  const mealImagePathInputRef = useRef();
  const DiscInputRef = useRef();
  const ingredientInputRef = [];
  const chefInputRef = useRef();
  const AuthorInputRef = useRef();
  const CookingMethodInputRef = useRef();

  const [ingredientVal, ingredientGet] = useState();
  const options = [
    {value: 'heart', label: 'Heart'},
    {value: 'leg', label: 'Leg'},
    {value: 'stomach', label: 'Stomach'},
    {value: 'tendon', label: 'Tendon'}
  ];

  const ingredientHandler = (e) => {
    ingredientGet(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  const newMealHandler = async (event) => {
    event.preventDefault();

    // store meal data in an object
    const mealData = {
      name: mealNameInputRef.current.value,
      image_path: mealImagePathInputRef.current.value,
      ingredients: ingredientVal + " ",
      method: CookingMethodInputRef.current.value,
      author: AuthorInputRef.current.value,
      description: DiscInputRef.current.value,
    };
    /*
    // use of Fetch API to make a request to the new-meal api and get back a response
    const response = await fetch("/api/new-meal", {
      method: "POST",
      body: JSON.stringify(mealData),
      headers: {
        "content-Type": "application/json",
      },
    });

    // parses JSON response into native JavaScript objects
    const data = await response.json();

    console.log(data);
    */
    router.push({
      pathname: "/snake",
      query: {
        name: mealNameInputRef.current.value,
        image_path: mealImagePathInputRef.current.value,
        ingredients: ingredientVal + " ",
        method: CookingMethodInputRef.current.value,
        author: AuthorInputRef.current.value,
        description: DiscInputRef.current.value,
      },
      
      /*
      pathname: "/cook",
      query: {
        ingredients: ingredientVal,
        cookingType: CookingMethodInputRef.current.value,
      */}
    );
    //router.replace("/");
  };

  const router = useRouter();

  //=================== next step handling ============

  const INPUT_STYLE =
    "my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md";
  return (
    <div className="flex">
      <form className="comic" onSubmit={newMealHandler}>
        <div className="mt-4 ml-8">
          <div className="bg-gradient-to-b from-orange-300 to-orange-500 flex-initial w-80 flex-col px-12 py-6 max-w-3xl mx-auto shadow-xl rounded-2xl m-2">
            <h1 className="Item 1 comic rounded-lg  p-1 text-2xl text-white drop-shadow-4xl">
              Ingredients
            </h1>
            <input
              type="text"
              placeholder="Title"
              required
              ref={mealNameInputRef}
              className={INPUT_STYLE}
            />
            <input
              type="text"
              placeholder="Image URL"
              required
              ref={mealImagePathInputRef}
              className={INPUT_STYLE}
            />
            <input
              type="text"
              placeholder="Author"
              required
              ref={AuthorInputRef}
              className={INPUT_STYLE}
            />
            <Select
              isMulti
              name="ingredients"
              options={options}
              onChange={ingredientHandler}
            />

            <input
              type="text"
              placeholder="Description"
              required
              className={INPUT_STYLE}
              ref={DiscInputRef}
            />
          </div>
          <div className="bg-gradient-to-b from-orange-300 to-orange-500 flex-initial w-80 flex-col px-12 py-6 max-w-3xl mx-auto shadow-xl rounded-2xl">
            <h1 className="Item 1 comic rounded-lg  p-1 text-2xl text-white drop-shadow-4xl">
              Cooking Method
            </h1>
            {/* <input
            type="text"
            placeholder="Cooking Method"
            required
            ref={CookingMethodInputRef}
            className={INPUT_STYLE}
          /> */}
            <select className={INPUT_STYLE} ref={CookingMethodInputRef}>
              <option value="pot">Pot</option>
              <option value="oven">Oven</option>
              <option value="grill">Grill</option>
            </select>
            <button
              type="submit"
              className="bg-pink-400 text-white font-medium text-xl inline-flex  w-full items-center px-4 py-4 rounded-xl"
            >
              Let's Cook Grandma!
            </button>
          </div>
        </div>
      </form>
      <div className="p-5 flex justify-center align-middle">
        <div className="w-100 h-100 bg-gradient-to-b from-orange-300 to-orange-500">
          the box justified to the right
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
