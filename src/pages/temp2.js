import { useRouter } from "next/router";

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
            <h1>{mealData.name}</h1>
            <img src={mealData.image_path} alt="meal"/>
            <p>{mealData.ingredients}</p>
            <p>{mealData.method}</p>
            <p>{mealData.author}</p>
            <p>{mealData.description}</p>
            <button className="bg-pink-400 text-white font-medium text-xl inline-flex  w-full items-center px-4 py-4 rounded-xl" onClick={newMealHandler}>Let's Cook Grandma!</button>
        </div>
    );
}
export default temp2;