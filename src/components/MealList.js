import MealItem from "./MealItem";
import { useState } from "react";

const MealList = (props) => {

  const [index, setIndex] = useState(0);

  const increaseIndex = () => {
    if (index < props.meals.length - 1) {
      setIndex(index + 1);
    }
  };

  const decreaseIndex = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="flex flex-row justify-center align-middle z-0 gap-8 ">
      {/* {props.meals.map((meal) => (
        <MealItem meal={meal} index={index} key={meal.id} />
      ))} */}
      <button className="bg-orange-300 text-3xl h-16 w-32 rounded-xl text-white comic shadow-md" onClick={(e) => decreaseIndex(e)}>Left</button>
      <MealItem meal={props.meals[index]} key={index} />
      <button className="bg-orange-300 text-3xl h-16 w-32 rounded-xl text-white comic shadow-md" onClick={(e) => increaseIndex(e)}>Right</button>
    </div>

  );
};
export default MealList;
