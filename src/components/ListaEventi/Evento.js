import React from "react";
const Evento = ({ label, id, descrizione, onClick }) => {
  const clickEvento = () => {
    try {
      onClick(id);
    } catch (error) {}
  };
  return (
    <div onClick={clickEvento}>
      <label>{label}</label>
      <label>{descrizione}</label>
    </div>
  );
};
export default Evento;
