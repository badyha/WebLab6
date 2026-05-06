import React from 'react';

function Recipe() {
  const recipe = {
    name: 'Картопляне пюре',
    servings: 4,
    time: '25 хвилин',
    ingredients: ['Картопля - 1 кг', 'Молоко - 200 мл', 'Масло - 50 г', 'Сіль - за смаком']
  };

  return (
    <div className="recipe">
      <h1>{recipe.name}</h1>
      <div className="recipe-info">
        <span>🍽️ Порцій: {recipe.servings}</span>
        <span>⏱️ Час: {recipe.time}</span>
      </div>

      <div className="ingredients">
        <h2>Інгредієнти:</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Recipe;
