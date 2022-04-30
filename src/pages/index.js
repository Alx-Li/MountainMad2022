import MealList from "../components/MealList";
import { MongoClient } from "mongodb";

import Link from "next/link";
// get image from public/img/bgKitchen.jpg
//import bgKitchen from "../public/img/kitchen.jpg";

const HomePage = (props) => {

  
  return (
    <div >
      <img className="mx-auto my-auto" src="https://i.ibb.co/hmkx9gs/Logo.png"/>
      <div className="h-20 mt-10 flex justify-center">
      <Link href="/Ingredients">
      <button className="drop-shadow-3xl text-2xl font-bold text-white p-2 pl-20 pr-20 rounded-lg shadow-inner bg-orange-300 hover:bg-orange-400">
          Create Recipes With Grandma Right Now!
        </button>
        </Link>
      </div>
    </div>
  );
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
    //   props: {
    //     mealList: meals.map((meal) => ({
    //       id: meal._id.toString(),
    //       name: meal.name,
    //       image: meal.image_path,
    //       dish: meal.dishes,
    //       chef: meal.chef,
    //     })),
    //   },
    // };
    props: {
      mealList: meals.map((meal) => ({
        id: meal._id.toString(),
        name: meal.name,
        image: meal.image_path,
        ingredients: meal.ingredients,
        method: meal.method,
        author: meal.author,
        description: meal.description
      })),
    },
  };
}
export default HomePage;
