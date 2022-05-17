import { useState, useEffect } from "react";

import Header from "./Header";
import Recipe from "./Recipe";

import axios from "axios";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");

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

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredRecipes = () => {
        if (search === "") {
            return recipes;
        }
        return recipes.filter((recipe) => {
            return recipe.name.toLowerCase().includes(search.toLowerCase());
        });
    };

    return (
        <>
            <Header />
            <div>
                <label htmlFor="search">Search recipe by name</label>
                <input type="text" name="search" onChange={handleChange} />
            </div>
            <div className="recipes">
                {filteredRecipes().map((recipe) => {
                    return <Recipe key={recipe.id} recipe={recipe} />;
                })}
            </div>
        </>
    );
};

export default Recipes;
