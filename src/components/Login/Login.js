import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [pagina, setPagina] = useState("login");

  const goRegistrati = () => {
    setPagina("registrazione");
  };
  const goLogin = () => {
    setPagina("login");
  };
  const goEntra = () => {
    onLogin(true);
  };
  return (
    <>
      {pagina === "login" && (
        <>
          <div id="login">
            <h4>Login</h4>
            <div>
              <label>Inserisci la mail</label>
              <input type="text" />
            </div>
            <div>
              <label>Inserisci la password</label>
              <input type="text" />
            </div>
          </div>
          <div>
            <button onClick={goEntra}>Entra</button>
            <button onClick={goRegistrati}>Registrati</button>
          </div>
        </>
      )}
      {pagina === "registrazione" && (
        <>
          <div id="registrazione">
            <h4>Registrazione</h4>
            <div>
              <label>Inserisci la mail</label>
              <input type="text" />
            </div>
            <div>
              <label>Inserisci la password</label>
              <input type="text" />
            </div>
            <div>
              <label>Reinserisci la password</label>
              <input type="text" />
            </div>
            <div>
              <button onClick={goLogin}>Login</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Login;
