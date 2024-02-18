import React from "react";

const RecipeCard = ({ recipe }) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;
  return (
    <>
      <div className="card">
        <img src={strMealThumb} alt={strMeal} className="card-image" />
      </div>
      <div className="card-body">
        <span className="category">{strCategory}</span>
        <h3>{strMeal}</h3>
        <a href={"https://www.themealdb.com.meal/" + idMeal} target="_blank">
          View
        </a>
      </div>
    </>
  );
};

export default RecipeCard;
