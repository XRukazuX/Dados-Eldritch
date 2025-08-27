import { useState, useEffect } from "react";
import "./App.css";
import a from "./assets/sello.png";
import ben from "./assets/manos.png";
import song from "./assets/Cthulhu.mp3";

function App() {
  const [dado, setdado] = useState(0);
  const [cruz, setcruz] = useState(false);
  const [win, setwin] = useState(0);
  const [vent, setvent] = useState(false);
  useEffect(() => {
    let audi = document.querySelector("audio");
    const asd = document.getElementById("eve");
    asd.addEventListener("click", function () {
      audi.play();
      //alert("funciona");
    });
  }, []);
  console.log(cruz + " estados del cheack");
  const change = ({ target }) => {
    setdado(target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(dado);
    console.log(parseInt(dado));
  };
  let x = 3;

  /*let num = document.getElementById("valor1");
  if (num) {
    console.log("dato captado");
  } else {
    console.log("erroe");
  
  console.log(num);*/
  function lanzar(dado, condicion) {
    if (dado <= 20) {
      let dados = parseInt(dado);
      let exitos = 0;
      let fallo = 0;
      if (condicion) {
        for (let index = 0; index < dados; index++) {
          let s = Math.floor(Math.random() * 6 + 1);
          console.log("bendecido");
          if (s == 5 || s == 6 || s == 4) {
            console.log("existos");
            exitos++;
          } else {
            console.log("fallaste");
            fallo++;
          }
        }
        /*console.log("Nuemro de " + exitos + " " + fallo);*/
        setwin(exitos);
        setvent(!vent);
      } else if (!condicion) {
        console.log("Normal");
        for (let index = 0; index < dados; index++) {
          let s = Math.floor(Math.random() * 6 + 1);
          if (s == 5 || s == 6) {
            console.log("existos");
            exitos++;
          } else {
            console.log("fallaste");
            fallo++;
          }
        }
        console.log("Nuemro de " + exitos);
        setwin(exitos);
        setvent(!vent);
      }
    } else alert("Cantidad de dados incorrecta");
  }

  return (
    <>
      <div id="cuerpo">
        <audio id="au" src={song} loop preload="auto"></audio>
        <h1 id="Titulo">Dados de Lovecraft</h1>

        <div id="contenedor">
          <img src={a} alt="Lovecraft" id="sello" />
        </div>
        <form action="num" onSubmit={submit} id="subm">
          <input type="text" id={dado} onChange={change} />
          <input
            type="checkbox"
            onClick={() => {
              setcruz(!cruz);
              let m = document.getElementById("monja").value;
              console.log(m);
            }}
            name="Bendecido"
            value={cruz}
            id="monja"
          />
          <label htmlFor="monja">
            <img
              src={ben}
              alt="bandicion"
              id={cruz ? "oh" : "oh1"}
              className="im"
            />
          </label>
          <button
            id="eve"
            onClick={() => {
              lanzar(dado, cruz);
              console.log("Tirada");
            }}
          >
            Lanzar
          </button>
        </form>
        <div
          id={vent ? "ventana" : "cerrar"}
          className={cruz ? "fondo2" : "fondo"}
          onClick={() => {
            setvent(!vent);
            document.getElementById("au").pause();
            document.getElementById("au").currentTime = 0;
          }}
        >
          <h1>Numero de exitos</h1>

          <h2>{win}</h2>
        </div>
      </div>
    </>
  );
}

export default App;
