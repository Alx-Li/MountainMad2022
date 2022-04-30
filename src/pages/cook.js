import { motion } from "framer-motion";

import { useState } from "react";
import { useRouter } from "next/router";

import pot from "../public/img/pot_no_lid.png";
import oven from "../public/img/oven.png";
import grill from "../public/img/grill.png";

//import body parts
import heartImg from "../public/img/heart.png";
import legImg from "../public/img/leg.png";
import stomachImg from "../public/img/stomach.png";
import tendonImg from "../public/img/tendon.png";

function cook() {
  const router = useRouter();
  const query = router.query;
  const ingredientImgs = {
    heart: heartImg.src,
    leg: legImg.src,
    stomach: stomachImg.src,
    tendon: tendonImg.src,
  };

  const ingredients, setIngredients] = useState(query.ingredients);
  const [cookingType, setCookingType] = useState(query.cookingType);
  const [itemsDragged, setItemsDragged] = useState(0);
  const [showButton, setShowButton] = useState(false);
  function checkIngredientsMoved() {
    if (itemsDragged < ingredients.length - 1) {
      setItemsDragged(itemsDragged + 1);
    } else {
      setShowButton(true);
    }
  }
  return (
    <div className="relative overflow-y-hidden flex flex-col ">
      <h1 className="text-5xl py-10 font-bold flex justify-center text-code text-white comic">
        Drag the ingredients in!
      </h1>
      <div className="flex flex-row gap-12 justify-center items-center">
        {ingredients.map((ingredient) => (
          <motion.div
            className="z-0 flex flex-row justify-center"
            drag
            dragConstraints={{}}
            onDragStart={(event, info) => checkIngredientsMoved()}
          >
            <img src={ingredientImgs[ingredient]}></img>
          </motion.div>
        ))}
      </div>
      {showButton && (
        <button className="comic fixed bottom-0 right-0 m-12 drop-shadow-3xl text-2xl font-bold text-white p-2 pl-20 pr-20 rounded-lg shadow-inner bg-orange-300 hover:bg-orange-400">
          Continue
        </button>
      )}
      {cookingType === "pot" && (
        <div className="z-3 flex overflow-y-hidden justify-center">
          <img src={pot.src}></img>
        </div>
      )}
      {cookingType === "oven" && (
        <div className="z-3 flex overflow-y-hidden justify-center">
          <img src={oven.src}></img>
        </div>
      )}
      {console.log(oven.src)}
      {cookingType === "grill" && (
        <div className="z-3 flex overflow-y-hidden justify-center ">
          <img className="bottom-0 mr-20" src={grill.src}></img>
        </div>
      )}
    </div>
  );
}
export default cook;
