import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
    return (
        <div className="recipe">
            <h2>{recipe.name}</h2>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>{recipe.description}</p>
            <Link to={`recipes/${recipe.id}`}>See more</Link>
        </div>
    );
};

export default Recipe;
