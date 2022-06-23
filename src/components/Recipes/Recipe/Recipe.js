import React, { useState } from "react";
import Modal from "../../Modal/Modal";

const Recipe = ({ data }) => {
  const { image, label, ingredientLines, digest, calories } = data?.recipe;
  const [modal, setModal] = useState(false);
  const handleModal = () => setModal(!modal);
  return (
    <div className="recipe">
      <img src={image} alt="" />
      <div className="recipe-content">
        <h3>{label}</h3>
        <small>{calories.toFixed(0)}Kcal</small>
        <div className="ingredients">
          <p>
            {ingredientLines.slice(0, 2).map((line, index) => {
              return <span key={index}>{line}. </span>;
            })}
          </p>
        </div>
        <div className="nutritions">
          <small>
            {digest.slice(0, 5).map((dig) => {
              return (
                <span>
                  {dig.label + ": " + dig.total.toFixed(0) + "" + dig.unit} |{" "}
                </span>
              );
            })}
          </small>
        </div>
        <button onClick={handleModal}>See more</button>
      </div>
      {modal && <Modal handleModal={handleModal} data={data} />}
    </div>
  );
};

export default Recipe;
