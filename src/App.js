import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="recipes" element={<Recipes />} />
                <Route path="add_recipe" element={<AddRecipe />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
