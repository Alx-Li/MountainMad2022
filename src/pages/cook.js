import { motion } from "framer-motion";
import Image from "next/image";
import woman from "../public/img/old-woman.png";
import { useState } from "react";
//import useROuter
import { useRouter } from "next/router";
//import pot no lid
import pot from "../public/img/pot_no_lid.png";
import grill from "../public/img/grill.png";

function cook() {
  const router = useRouter();
  const query = router.query;
  const [ingredients, setIngredients] = useState(query.ingredients);
  const cookingType = "pot";
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
            <div>{ingredient}</div>
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
      {cookingType === "grill" && (
        <div className="z-3 flex overflow-y-hidden justify-center ">
          <img className="bottom-0 mr-20" src={grill.src}></img>
        </div>
      )}
    </div>
  );
}
export default cook;
