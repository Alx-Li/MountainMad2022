const MealItem = ({ meal }) => {
  // last commit
  return (
    <div className="shadow-lg rounded-lg bg-orange-300 p-4">
      <img src={meal.image} className="w-full h-auto" alt="Chicken Salad" />
      <h3 className="text-xl font-normal text-center comic py-2">{meal.name}</h3>
      <div className="">
        <div className="px-3 font-light bg-white text-oragne-300 comic">
          <p className="self-start italic pb-2 text-center">{meal.description}</p>
          <p>Ingredients: <span className="italic">{meal.ingredients}</span></p>
          <p>Cooking Method: {meal.method}</p>
          <p className="">Made by: {meal.author}</p>
        </div>
      </div>
    </div>
  );
};
export default MealItem;
