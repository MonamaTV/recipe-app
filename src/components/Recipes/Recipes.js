import React from "react";
import "./Recipes.css";
const Recipes = () => {
  return (
    <div className="recipes">
      <div className="inputs">
        <div className="logo">
          <h2>T🍕dRecipes</h2>
          <small>Find the recipes for your favorite meals</small>
        </div>
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="recipes-results">
        <div className="recipe">
          <img
            src="https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg"
            alt=""
          />
          <div className="recipe-content">
            <h3>Carrot Cake</h3>
            <small>888Kcal</small>
            <div className="ingredients">
              <p>
                2 cups of milk. Carrots.2 cups of milk. Carrots.2 cups of milk.
                Carrots.2 cups of milk. Carrots.
              </p>
            </div>
            <div className="nutritions">
              <small>Calcium: 12mg | Potasium: 12mg | Vitamin C: 12mg </small>
            </div>
          </div>
        </div>
        <div className="recipe">
          <img
            src="https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg"
            alt=""
          />
          <div className="recipe-content">
            <h3>Carrot Cake</h3>
            <small>888Kcal</small>
            <div className="ingredients">
              <p>
                2 cups of milk. Carrots.2 cups of milk. Carrots.2 cups of milk.
                Carrots.2 cups of milk. Carrots.
              </p>
            </div>
            <div className="nutritions">
              <small>Calcium: 12mg | Potasium: 12mg | Vitamin C: 12mg </small>
            </div>
          </div>
        </div>
        <div className="recipe">
          <img
            src="https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg"
            alt=""
          />
          <div className="recipe-content">
            <h3>Carrot Cake</h3>
            <small>888Kcal</small>
            <div className="ingredients">
              <p>
                2 cups of milk. Carrots.2 cups of milk. Carrots.2 cups of milk.
                Carrots.2 cups of milk. Carrots.
              </p>
            </div>
            <div className="nutritions">
              <small>Calcium: 12mg | Potasium: 12mg | Vitamin C: 12mg </small>
            </div>
          </div>
        </div>
        <div className="recipe">
          <img
            src="https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg"
            alt=""
          />
          <div className="recipe-content">
            <h3>Carrot Cake</h3>
            <small>888Kcal</small>
            <div className="ingredients">
              <p>
                2 cups of milk. Carrots.2 cups of milk. Carrots.2 cups of milk.
                Carrots.2 cups of milk. Carrots.
              </p>
            </div>
            <div className="nutritions">
              <small>Calcium: 12mg | Potasium: 12mg | Vitamin C: 12mg </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
