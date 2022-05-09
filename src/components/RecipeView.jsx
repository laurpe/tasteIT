import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeCard = () => {
    const [recipe, setRecipe] = useState({});
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

    return (
        <div className="recipe">
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
        </div>
    );
};

export default RecipeCard;
