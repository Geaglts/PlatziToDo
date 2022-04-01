import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";

/* 
    Como comentario:
    HOC: Hight Order Component
    Todos los Componentes de Orden Mayor deben retornar al final
    un componente comun y corriente

    - Podemos solicitar algo de una API y al terminar podemos renderizar
    un componente con los datos obtenidos.

    - Tambien las podemos usar para validar rutas.

    Hay muchos otros usos que se le pueden dar a las HOC pero 
    ya queda a nuestra imaginacion donde podemos usarlas
    y porque es una mejor alternativa depediendo del
    contexto.
*/

const Card = (props) => {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>{props.name}</p>
    </div>
  );
};

function withName(name = "") {
  return function (WrappedComponent) {
    return function WrappedComponentWithName(props) {
      return (
        <>
          <WrappedComponent name={name} {...props} />
        </>
      );
    };
  };
}

const CardWithName = withName("Miguel")(Card);

ReactDOM.render(<CardWithName />, document.getElementById("root"));
