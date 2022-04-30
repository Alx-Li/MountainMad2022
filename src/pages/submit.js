import { useRouter } from "next/router";
import MealItem from "../components/MealItem";
function submit() {
    const router = useRouter();
//==========
    const query = router.query;
    const mealData = {
        name: query.name,
        image_path: query.image_path,
        ingredients: query.ingredients,
        method: query.method,
        author: query.author,
        description: query.description,
    };

    console.log(mealData);
    console.log("from temp 2");
//============
    
    
    const newMealHandler = async (event) => {
        event.preventDefault();
        const query = router.query;
        const mealData = {
            name: query.name,
            image_path: query.image_path,
            ingredients: query.ingredients,
            method: query.method,
            author: query.author,
            description: query.description,
        };
        console.log(mealData);
        // use of Fetch API to make a request to the new-meal api and get back a response
        const response = await fetch("/api/new-meal", {
            method: "POST",
            body: JSON.stringify(mealData),
            headers: {
                "content-Type": "application/json",
            },
        });
  
        // parses JSON response into native JavaScript objects
        const data = await response.json();
  
        console.log(data);

        router.replace("/Recipes")
    }

    return(
        <div className="flex flex-row justify-center align-middle z-0 gap-20 ">
            <section className="container mx-[25%]">
                <MealItem meal={mealData} newMealHandler={newMealHandler}/>
                <button className="comic fixed bottom-0 right-0 m-12 drop-shadow-3xl text-2xl font-bold text-white p-2 pl-20 pr-20 rounded-lg shadow-inner bg-orange-300 hover:bg-orange-400 " onClick={newMealHandler}>Add to Cookbook</button>
            </section>
        </div>
        
    );
}
export default submit;