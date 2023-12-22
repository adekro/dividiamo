import React from "react";
import SpesaItem from "./SpesaItem";
const ListaSpese = () => {
  return (
    <>
      <SpesaItem
        label="Autostrada"
        partecipante="Silvia"
        quota="70,00"
        data="10-12-23"
      />
      <SpesaItem
        label="Autostrada"
        partecipante="Emanuele"
        quota="75,00"
        data="11-12-23"
      />
    </>
  );
};
export default ListaSpese;
