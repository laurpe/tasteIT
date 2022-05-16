import { useState, useEffect } from "react";

import Header from "./Header";
import Recipe from "./Recipe";

import axios from "axios";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

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
        const results = recipes.filter((recipe) => {
            return recipe.name.includes(search);
        });
        setResults(results);
        console.log(results);
    };

    return (
        <>
            <Header />
            <div>
                <label htmlFor="search">Search recipe by name</label>
                <input
                    type="text"
                    name="search"
                    value={search}
                    onChange={handleChange}
                />
            </div>
            <div className="recipes">
                {recipes.map((recipe) => {
                    return <Recipe key={recipe.id} recipe={recipe} />;
                })}
            </div>
        </>
    );
};

export default Recipes;
