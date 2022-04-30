import { motion } from "framer-motion";
import Image from "next/image";
import woman from "../public/img/old-woman.png";
import { useState } from "react";
//import pot no lid
import pot from "../public/img/pot_no_lid.png";

function comp() {
  const [itemsDragged, setItemsDragged] = useState(0);
  const [showButton, setShowButton] = useState(false);
  function checkIngredientsMoved() {
      if (itemsDragged < 3) {
          setItemsDragged(itemsDragged + 1);
      } else {
            setShowButton(true);
      }
  }
  return (
    <>
      <motion.div
        className="z-0"
        drag
        dragConstraints={{}}
        onDragStart={(event, info) => checkIngredientsMoved()}
      >
        <img className="ingredient" src={woman.src}></img>
      </motion.div>
      { showButton && (<div> This gets rendered when sold is true</div>)}
      <div className="z-3">
        <img src={pot.src}></img>
      </div>
    </>
  );
}
export default comp;
