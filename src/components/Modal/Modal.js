import React from "react";
import "./Modal.css";
const Modal = ({ handleModal, data }) => {
  const { label, ingredientLines, digest } = data?.recipe;

  return (
    <div className="modal-container">
      <div className="modal-inner">
        <div className="header">
          <h2>{label}</h2>
          <button onClick={handleModal} className="close-modal">
            X
          </button>
        </div>
        <div className="modal-content">
          <div className="ingredients">
            <small>
              {ingredientLines.map((line, index) => {
                return <span key={index}>{line}. </span>;
              })}
            </small>
          </div>
          <table>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {digest.map((dig) => {
                return (
                  <tr>
                    <td>{dig.label}</td>
                    <td>
                      {dig.total.toFixed(0)}
                      {dig.unit}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Modal;
