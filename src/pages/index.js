import MealList from "../components/MealList";
import { MongoClient } from "mongodb";
const HomePage = (props) => {
  return <MealList meals={props.mealList} />;
};
export async function getStaticProps() {
  const DATABASE_NAME = "Grandma";
  const DATABASE_PASSWORD = "1234";

  const client = await MongoClient.connect(
    `mongodb+srv://test:1234@mountain.rpwsn.mongodb.net/Grandma?retryWrites=true&w=majority`
  );
  const db = client.db();
  const mealsCollection = db.collection("meals");
  const meals = await mealsCollection.find().toArray();

  client.close();

  return {
    props: {
      mealList: meals.map((meal) => ({
        id: meal._id.toString(),
        name: meal.name,
        image: meal.image_path,
        dish: meal.dishes,
        chef: meal.chef,
      })),
    },
  };
}
export default HomePage;
