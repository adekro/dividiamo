import React from "react";
const SpesaItem = ({ label, partecipante, quota, data }) => {
  const spesaItemClick = () => {};
  return (
    <div onClick={spesaItemClick}>
      <div>
        <div>{label}</div>
        <div>Pagato da {partecipante}</div>
      </div>
      <div>
        <div>{quota}€</div>
        <div>{data}</div>
      </div>
    </div>
  );
};
export default SpesaItem;
