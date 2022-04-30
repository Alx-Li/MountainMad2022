import MealItem from "./MealItem";
const MealList = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
      {props.meals.map((meal) => (
        <MealItem meal={meal} key={meal.id} />
      ))}
    </div>
  );
};
export default MealList;
