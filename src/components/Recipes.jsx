import { useState, useEffect } from "react";

import Header from "./Header";
import Recipe from "./Recipe";

import axios from "axios";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3010/recipes"
                );
                setRecipes(response.data);
            } catch (error) {
                console.error(error.message);
            }
        };
        getRecipes();
    }, []);

    return (
        <>
            <Header />
            <div className="recipes">
                {recipes.map((recipe) => {
                    return <Recipe key={recipe.id} recipe={recipe} />;
                })}
            </div>
        </>
    );
};

export default Recipes;
