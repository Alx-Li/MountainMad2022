import MealItem from "./MealItem";
const MealList = (props) => {
  return (
    <div className="grid grid-cols-1 z-0 sm:grid-cols-3 gap-8">
      {props.meals.map((meal) => (
        <MealItem meal={meal} key={meal.id} />
      ))}
    </div>
  );
};
export default MealList;
