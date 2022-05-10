import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
    return (
        <div className="recipe">
            <img src={recipe.imageUrl} alt={recipe.name} />
            <div className="recipe-bottom">
                <h2>{recipe.name}</h2>
                <p>{recipe.description}</p>
                <Link to={`/recipes/${recipe.id}`}>See more</Link>
            </div>
        </div>
    );
};

export default Recipe;
