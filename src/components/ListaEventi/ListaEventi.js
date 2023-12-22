import React, { useState } from "react";
import Evento from "./Evento";
const ListaEventi = () => {
  const [eventoSel, setEventoSel] = useState("");
  const scegliEvento = (evento) => {
    setEventoSel(evento);
  };

  return (
    <div>
      {eventoSel === "" && (
        <>
          <Evento
            label="Assisi"
            id="assisi"
            descrizione="viaggio ad Assisi"
            onClick={scegliEvento}
          />
          <Evento label="Roma" id="roma" descrizione="viaggio a Roma" />
        </>
      )}
      {eventoSel !== ""}
    </div>
  );
};
export default ListaEventi;
