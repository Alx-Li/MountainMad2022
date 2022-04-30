import MealList from "../components/MealList";
import { MongoClient } from "mongodb";


import Link from "next/link";
// get image from public/img/bgKitchen.jpg
//import bgKitchen from "../public/img/kitchen.jpg";

const HomePage = (props) => {

  
  return (
    <div className="bg-opacity-50 bg-white pb-8 rounded-3xl m-32 backdrop-blur-md shadow-xl">
      <img className="mx-auto my-10 justify-center items-center" src="https://i.ibb.co/GsrqJ6c/Logo.png"/>
      <div className="h-20 mt-10 flex justify-center">
      <Link href="/Ingredients">
      <button className="drop-shadow-3xl text-2xl font-bold text-white p-2 pl-20 pr-20 rounded-lg shadow-inner bg-gradient-to-b from-orange-300 to-orange-500 hover:from-orange-600 hover:to-orange-600">
          Create Recipes With Grandma Right Now!
        </button>
        </Link>
      </div>
    </div>
  );
};
export async function getStaticProps() {
  const DATABASE_NAME = process.env.DATABASE_NAME;
  const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

  const client = await MongoClient.connect(
    process.env.MONGO_URL
    //`mongodb+srv://test:1234@mountain.rpwsn.mongodb.net/Grandma?retryWrites=true&w=majority`
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
