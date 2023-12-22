import React from "react";
const GestioneEvento = ({ evento }) => {
  return (
    <>
      <div className="gestioneevento_header">
        <div>Spese</div>
        <div>Saldi</div>
      </div>
      <div className="gestioneevento_body">
        <div></div>

        <div className="gestioneevento_bottom">
          <div>
            <div>Il mio totale</div>
            <div>216,00€</div>
          </div>
          <div>+</div>
          <div>
            <div>totale spese</div>
            <div>216,00€</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default GestioneEvento;
