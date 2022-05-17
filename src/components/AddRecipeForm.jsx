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

    //TODO: add units for nicer recipe view

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

    const getFlag = () => {
        const country = countries.find(
            (country) => country.cca2 === recipe.countryCode
        );
        return country.flags.svg;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:3010/recipes", {
            ...recipe,
            ingredients: ingredients,
            flag: getFlag(),
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
        if (ingredients.length > 1) {
            const ingredientsCopy = [...ingredients];
            ingredientsCopy.pop();

            setIngredients(ingredientsCopy);
        }
    };

    return (
        <div className="add-recipe-container">
            <form onSubmit={handleSubmit} className="add-recipe-form">
                <h2>Add recipe</h2>
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
                                    <option
                                        key={country.cca2}
                                        value={country.cca2}
                                    >
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
                        rows="6"
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
                {ingredients.map((ingredient, index) => {
                    return (
                        <div
                            key={index}
                            className="add-recipe-form-ingredients"
                        >
                            <div className="form-ingredient-name">
                                <label htmlFor="ingredientName">
                                    Ingredient
                                </label>
                                <input
                                    type="text"
                                    name="ingredientName"
                                    onChange={(event) =>
                                        handleIngredientChange(event, index)
                                    }
                                    value={ingredients[index].ingredientName}
                                    required
                                />
                            </div>
                            <div className="form-ingredient-quantity">
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
                    <label htmlFor="instructions">Instructions</label>
                </div>
                <div>
                    <textarea
                        name="instructions"
                        onChange={handleChange}
                        value={recipe.instructions}
                        rows="8"
                        required
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddRecipeForm;
