import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function Section() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [responseText, setResponseText] = useState("");
  const enviar = async () => {
      const data = { correo: correo, contraseña: contraseña };
      const requestOptions = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      };
      try{
        const response = await fetch("http://127.127.127.127:5050/public", requestOptions);
        const jsonResponse = await response.json(); 
        setResponseText(JSON.stringify(jsonResponse));
        console.log(responseText)
      } catch (error) {
          console.log(error.message);
      }
  };

  const handleCorreoChange = (event) => {
      setCorreo(event.target.value);
  };

  const handleContraseñaChange = (event) => {
      setContraseña(event.target.value);
  };

  return (
    <>
      <h1>Formulario</h1>
      <form onSubmit={(event) => {
          event.preventDefault();
          enviar();
        }}>
          <div className="container-fluid">
        <label className="form-label" >Email address</label>
        <input
            type="email"
            className="form-control"
            placeholder="Correo"
            value={correo}
            onChange={handleCorreoChange}
            aria-describedby="emailHelp"
        />
          <label className="form-label">Password</label>
        <input
            className="form-control"
            placeholder="Contraseña"
            type="password"
            value={contraseña}
            onChange={handleContraseñaChange}
        />
        <button className="btn btn-primary">Enviar</button>
          </div>
      </form>
      <h1>{responseText}</h1> 
    </>
  );
}