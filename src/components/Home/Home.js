import React, { useState } from "react";
import "./Home.css";
const Home = () => {
  //Our state
  const [query, setQuery] = useState("");

  //Save the changees
  const handleQuery = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  //Move to the next page with thw query value passed as a URL param
  const handleSearch = () => (window.location.href = "/search/" + query);

  return (
    <div className="home">
      <div className="search">
        <div className="inputs">
          <div className="logo">
            <h2>T🍕dRecipes</h2>
            <small>Find the recipes for your favorite meals</small>
          </div>
          <input type="text" value={query} onChange={handleQuery} />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
