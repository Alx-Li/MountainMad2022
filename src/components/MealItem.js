const MealItem = ({ meal }) => {
  // last commit
  return (
    <div className="shadow-lg rounded-lg bg-white border-8 max-height-4 border-orange-300 p-4">
      <div>
        <img src={meal.image} className="w-full h-auto" alt="Chicken Salad" />
      </div>

      <div className="px-3 font-light bg-white text-oragne-300 comic">
        <h3 className="text-xl font-normal text-center comic py-2">
          {meal.name}
        </h3>
        <p className="self-start italic pb-2 text-center">{meal.description}</p>
        <p>
          Ingredients: <span className="italic">{meal.ingredients}</span>
        </p>
        <p>
          Cooking Method: <span className="italic">{meal.method}</span>
        </p>
        <p className="">
          Made by: <span className="italic">{meal.author}</span>
        </p>
      </div>
    </div>
  );
};
export default MealItem;
