import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

import Home from "./components/Home";
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";
import RecipeView from "./components/RecipeView";

const App = () => {
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
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/recipes"
                    element={<Recipes recipes={recipes} />}
                />
                <Route path="/recipes/:id" element={<RecipeView />} />
                <Route path="/add_recipe" element={<AddRecipe />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
