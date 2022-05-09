import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>TasteIT</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/recipes">Recipes</Link>
                    </li>
                    <li>
                        <Link to="/add_recipe">Add recipe</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
