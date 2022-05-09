import { useState, useEffect } from "react";
import Header from "./Header";
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
            <div>
                <ul>
                    {recipes.map((recipe) => {
                        return <li key={recipe.id}>{recipe.name}</li>;
                    })}
                </ul>
            </div>
        </>
    );
};

export default Recipes;
