import { useState } from "react";

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
    const [finalRecipe, setFinalRecipe] = useState({});

    const handleChange = (event) => {
        setRecipe({ ...recipe, [event.target.name]: event.target.value });
    };

    const handleIngredientNameChange = (event, ingredientIndex) => {
        const newIngredientName = event.target.value;
        setIngredients(
            ingredients.map((ingredient, index) => {
                if (index === ingredientIndex) {
                    return { ...ingredient, ingredientName: newIngredientName };
                }
                return ingredient;
            })
        );
    };

    const handleIngredientQuantityChange = (event, ingredientIndex) => {
        const newIngredientQuantity = event.target.value;
        setIngredients(
            ingredients.map((ingredient, index) => {
                if (index === ingredientIndex) {
                    return { ...ingredient, quantity: newIngredientQuantity };
                }
                return ingredient;
            })
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFinalRecipe({ ...recipe, ingredients: ingredients });
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
                />
            </div>
            <div>
                <label htmlFor="countryCode">Country</label>
            </div>
            <div>
                <input
                    type="text"
                    name="countryCode"
                    onChange={handleChange}
                    value={recipe.countryCode}
                />
            </div>
            <div>
                <label htmlFor="description">Description</label>
            </div>
            <div>
                <textarea
                    name="description"
                    onChange={handleChange}
                    value={recipe.description}
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
                />
            </div>
            INGREDIENT FIELDS
            {ingredients.map((ingredient, index) => {
                return (
                    <div key={index}>
                        <label htmlFor="ingredientName">Ingredient</label>
                        <input
                            type="text"
                            name="ingredientName"
                            onChange={(event) =>
                                handleIngredientNameChange(event, index)
                            }
                            value={ingredients[index].ingredientName}
                        />
                        <label htmlFor="quantity">Quantity</label>
                        <input
                            type="text"
                            name="quantity"
                            onChange={(event) =>
                                handleIngredientQuantityChange(event, index)
                            }
                            value={ingredients[index].quantity}
                        />
                    </div>
                );
            })}
            <div>
                <button type="button" onClick={handleAddMoreClick}>
                    Add more ingredients
                </button>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default AddRecipeForm;
