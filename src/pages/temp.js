import { useRouter } from "next/router";
import {useState} from 'react';
function temp() {
    const router = useRouter();
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
    
    return (
        //button to handle route to temp2
        <button onClick={() => {
            router.push({pathname: "/temp2",
            query: {
                name: mealData.name,
                image_path: mealData.image_path,
                ingredients: mealData.ingredients,
                method: mealData.method,
                author: mealData.author,
                description: mealData.description,
            },})
        }}>Go to temp2</button>
    );

}
export default temp;