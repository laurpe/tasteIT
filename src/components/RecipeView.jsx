import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "./Header";

const RecipeCard = () => {
    const [recipe, setRecipe] = useState(null);
    const params = useParams();

    useEffect(() => {
        const getRecipe = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3010/recipes/${params.id}`
                );
                setRecipe(response.data);
            } catch (error) {
                console.error(error.message);
            }
        };
        getRecipe();
    }, [params.id]);

    if (!recipe) {
        return (
            <>
                <Header />
                <p>Loading ...</p>
            </>
        );
    } else {
        return (
            <>
                <Header />
                <div className="recipe-single">
                    <img src={recipe.imageUrl} alt={recipe.name} />
                    <h2>
                        {recipe.name} {recipe.countryCode}
                    </h2>
                    <p>Author: {recipe.author}</p>
                    <p>Servings: {recipe.servings}</p>
                    <p>Ingredients:</p>
                    {recipe.ingredients.map((ingredient, index) => {
                        return (
                            <div key={index} className="ingredients">
                                <span>{ingredient.ingredientName}</span>
                                <span>{ingredient.quantity}</span>
                            </div>
                        );
                    })}
                    <p>{recipe.description}</p>
                </div>
            </>
        );
    }
};

export default RecipeCard;
