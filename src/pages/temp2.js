import { useRouter } from "next/router";
import MealItem from "../components/MealItem";
function temp2() {
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
    }

    return(
        <div>
            <MealItem meal={mealData} newMealHandler={newMealHandler}/>
            <button className="btn btn-primary" onClick={newMealHandler}>Add to Cookbook</button>
        </div>
        
    );
}
export default temp2;