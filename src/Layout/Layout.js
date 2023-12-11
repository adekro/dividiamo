import React, { useState } from "react";
import Header from "../Header/Header";
import ListaEventi from "../components/ListaEventi/ListaEventi";

const Layout = () => {
  const [pagina, setPagina] = useState("home");
  return (
    <>
      <Header pagina={pagina} />
      {pagina === "home" && <ListaEventi />}
    </>
  );
};
export default Layout;
