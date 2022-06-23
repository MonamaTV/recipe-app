import React, { useState, useEffect } from "react";
import Recipe from "./Recipe/Recipe";
import "./Recipes.css";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axios/axios";
const Recipes = () => {
  const { query } = useParams();
  const [search, setSearch] = useState(query);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

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
    // setLoading(true);
    // const data = await fetchRecipes();
    // setRecipes(data);
    // setLoading(false);

    //Alt
    window.location.href = "/search/" + search;
  };
  useEffect(() => {
    const loadRecipes = async () => {
      setLoading(true);

      const data = await fetchRecipes();
      setRecipes(data);
      setLoading(false);
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
      {!loading ? (
        <div className="recipes-results">
          {recipes.map((recipe) => {
            return <Recipe data={recipe} />;
          })}
        </div>
      ) : (
        <h1>Loading recipes</h1>
      )}
    </div>
  );
};

export default Recipes;
