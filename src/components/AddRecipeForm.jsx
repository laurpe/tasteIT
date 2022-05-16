import { useEffect, useState } from "react";
import axios from "axios";

const AddRecipeForm = () => {
    const [recipe, setRecipe] = useState({
        name: "",
        author: "",
        countryCode: "",
        description: "",
        imageUrl: "",
        servings: "",
        instructions: "",
    });
    const [ingredients, setIngredients] = useState([
        {
            ingredientName: "",
            quantity: "",
        },
    ]);

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            const response = await axios.get(
                "https://restcountries.com/v3.1/all"
            );
            setCountries(response.data);
        };
        getCountries();
    }, []);

    const handleChange = (event) => {
        setRecipe({ ...recipe, [event.target.name]: event.target.value });
    };

    const handleIngredientChange = (event, ingredientIndex) => {
        setIngredients(
            ingredients.map((ingredient, index) => {
                if (index === ingredientIndex) {
                    return {
                        ...ingredient,
                        [event.target.name]: event.target.value,
                    };
                }
                return ingredient;
            })
        );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:3010/recipes", {
            ...recipe,
            ingredients: ingredients,
        });
    };

    const handleAddMoreClick = () => {
        setIngredients([
            ...ingredients,
            {
                ingredientName: "",
                quantity: "",
            },
        ]);
    };

    const handleRemoveClick = () => {
        const ingredientsCopy = [...ingredients];
        ingredientsCopy.pop();

        setIngredients(ingredientsCopy);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
            </div>
            <div>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={recipe.name}
                    required
                />
            </div>
            <div>
                <label htmlFor="author">Author</label>
            </div>
            <div>
                <input
                    type="text"
                    name="author"
                    onChange={handleChange}
                    value={recipe.author}
                    required
                />
            </div>
            <div>
                <label htmlFor="countryCode">Country</label>
            </div>
            <div>
                <select
                    name="countryCode"
                    onChange={handleChange}
                    value={recipe.countryCode}
                    required
                >
                    <option value="" disabled>
                        Choose recipe's origin
                    </option>
                    {countries
                        .sort((a, b) =>
                            a.name.common.localeCompare(b.name.common)
                        )
                        .map((country) => {
                            return (
                                <option key={country.cca2} value={country.cca2}>
                                    {country.name.common}
                                </option>
                            );
                        })}
                </select>
            </div>
            <div>
                <label htmlFor="description">Description</label>
            </div>
            <div>
                <textarea
                    name="description"
                    onChange={handleChange}
                    value={recipe.description}
                    required
                />
            </div>
            <div>
                <label htmlFor="imageUrl">Image url</label>
            </div>
            <div>
                <input
                    type="text"
                    name="imageUrl"
                    onChange={handleChange}
                    value={recipe.imageUrl}
                    required
                />
            </div>
            <div>
                <label htmlFor="servings">Servings</label>
            </div>
            <div>
                <input
                    type="number"
                    name="servings"
                    onChange={handleChange}
                    value={recipe.servings}
                    required
                />
            </div>
            <div>
                <label htmlFor="instructions">Instructions</label>
            </div>
            <div>
                <textarea
                    name="instructions"
                    onChange={handleChange}
                    value={recipe.instructions}
                    required
                />
            </div>
            {ingredients.map((ingredient, index) => {
                return (
                    <div key={index}>
                        <label htmlFor="ingredientName">Ingredient</label>
                        <input
                            type="text"
                            name="ingredientName"
                            onChange={(event) =>
                                handleIngredientChange(event, index)
                            }
                            value={ingredients[index].ingredientName}
                            required
                        />
                        <label htmlFor="quantity">Quantity</label>
                        <input
                            type="text"
                            name="quantity"
                            onChange={(event) =>
                                handleIngredientChange(event, index)
                            }
                            value={ingredients[index].quantity}
                            required
                        />
                    </div>
                );
            })}
            <div>
                <button type="button" onClick={handleAddMoreClick}>
                    Add more
                </button>
                <button type="button" onClick={handleRemoveClick}>
                    Remove
                </button>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default AddRecipeForm;
