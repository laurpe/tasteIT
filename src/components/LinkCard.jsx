import { Link } from "react-router-dom";

const LinkCard = ({ title, description, page }) => {
    return (
        <div className="link-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={page}>Recipes</Link>
        </div>
    );
};

export default LinkCard;
