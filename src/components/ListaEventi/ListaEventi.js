import React from "react";
import Evento from "./Evento";
const ListaEventi = () => {
  return (
    <div>
      <Evento label="Assisi" id="assisi" descrizione="viaggio ad Assisi" />
      <Evento label="Roma" id="roma" descrizione="viaggio a Roma" />
    </div>
  );
};
export default ListaEventi;
