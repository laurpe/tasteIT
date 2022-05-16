import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";
import RecipeView from "./components/RecipeView";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/recipes/:id" element={<RecipeView />} />
                <Route path="/add_recipe" element={<AddRecipe />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
