import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";
import RecipeCard from "./components/RecipeCard";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/recipes/:id" element={<RecipeCard />} />
                <Route path="/add_recipe" element={<AddRecipe />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
