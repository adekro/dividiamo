import React, { useState } from "react";
import Header from "../Header/Header";
import ListaEventi from "../components/ListaEventi/ListaEventi";
import Login from "../components/Login/Login";

const Layout = () => {
  const [pagina, setPagina] = useState("login");

  const onLoginHandler = (aut) => {
    if (aut) {
      setPagina("home");
    }
  };
  return (
    <>
      <Header pagina={pagina} />
      {pagina === "login" && <Login onLogin={onLoginHandler} />}
      {pagina === "home" && <ListaEventi />}
    </>
  );
};
export default Layout;
