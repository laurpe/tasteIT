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
                <div className="recipe-view">
                    <div className="recipe-container">
                        <div className="recipe-left">
                            <img src={recipe.imageUrl} alt={recipe.name} />
                            <div className="recipe-info">
                                <h2>
                                    {recipe.name} {recipe.countryCode}
                                </h2>
                                <div className="row">
                                    <span className="row-title">Author</span>
                                    <span className="row-content">
                                        {recipe.author}
                                    </span>
                                </div>
                                <div className="row">
                                    <span className="row-title">Servings</span>
                                    <span className="row-content">
                                        {recipe.servings}
                                    </span>
                                </div>
                                <p>{recipe.description}</p>
                            </div>
                        </div>
                        <div className="recipe-right">
                            <h3>Ingredients</h3>
                            <div className="ingredients">
                                {recipe.ingredients.map((ingredient, index) => {
                                    return (
                                        <div key={index} className="row">
                                            <div className="row-title">
                                                {ingredient.quantity}
                                            </div>
                                            <div className="row-content">
                                                {ingredient.ingredientName}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <h3>Instructions</h3>
                            <p>{recipe.instructions}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default RecipeCard;
