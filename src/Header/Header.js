import React from "react";
const Header = ({ pagina }) => {
  return (
    <header>
      <label>DIVIDIAMO!</label>
      {pagina === "home" && (
        <>
          <button>...</button>
        </>
      )}
    </header>
  );
};
export default Header;
