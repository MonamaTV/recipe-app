import React, { useState, useEffect } from "react";
import Recipe from "./Recipe/Recipe";
import "./Recipes.css";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axios/axios";
const Recipes = () => {
  const { query } = useParams();
  const [search, setSearch] = useState(query);
  const [recipes, setRecipes] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    setSearch(value);
  };
  const fetchRecipes = async () => {
    try {
      const { data } = await axiosInstance().get("?q=" + search);
      return data.hits;
    } catch (error) {
      return null;
    }
  };
  const searchRecipes = async () => {
    const data = await fetchRecipes();
    setRecipes(data);
  };
  useEffect(() => {
    const loadRecipes = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };
    loadRecipes();
  }, []);
  return (
    <div className="recipes">
      <div className="inputs">
        <div className="logo">
          <h2>
            <a href="/">T🍕dRecipes</a>
          </h2>
          <small>Find the recipes for your favorite meals</small>
        </div>
        <input value={search} onChange={handleInput} type="text" />
        <button onClick={searchRecipes}>Search</button>
      </div>
      <div className="recipes-results">
        {recipes.map((recipe) => {
          return <Recipe data={recipe} />;
        })}
      </div>
    </div>
  );
};

export default Recipes;
