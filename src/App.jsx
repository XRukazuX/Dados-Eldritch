import { useState, useEffect, useRef } from "react";
import "./App.css";
import sello from "./assets/sello.png";
import bendicion from "./assets/manos.png";
import maldicion from "./assets/Contrato.png";
import song from "./assets/Cthulhu.mp3";
import Resultados from "./Components/Resultados";
function App() {
  const [valor, setValor] = useState(""); //Valores de la cantidad de dados usados
  const [dado, setDado] = useState([]); //Array de datos obtenidos
  const [exitos, setExitos] = useState(0); //Numero de exitos
  const [show, setShow] = useState(false);
  const [bendecido, setBendecido] = useState(false);
  const [maldecido, setMaldecido] = useState(false);
  const audioRef = useRef(null); //Datos de Dom del audio
  const closeshow = () => {
    setShow(false);
    setDado([]);
    setExitos(0);
    setValor("");
    /*audioRef.current.pause();*/
  };
  const Tiro = () => {
    const numero = Number(valor);

    if (numero > 0 && numero <= 20) {
      const nuevosDados = [];

      for (let i = 0; i < numero; i++) {
        const random = Math.floor(Math.random() * 6) + 1;
        nuevosDados.push(random);
      }

      setDado(nuevosDados);
      let estado = bendecido ? 3 : maldecido ? 5 : 4;
      let newexitos = nuevosDados.filter((e) => e > estado).length;
      setExitos(newexitos);
      /*if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }*/
      setShow(true);
    } else {
      console.log("Los valores puestos no son aceptables");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Tiro();
  }; // Con el submit basico ya te toma como enter el keydown asi que es innecesario
  useEffect(() => {
    if (audioRef?.current) {
      console.log("Audio montado");
    }
  }, []);

  return (
    <>
      <div className="Contenedor">
        <div className="Titulo">
          <h1>Dados de Lovecraft</h1>
        </div>
        <div className="Logo">
          <img src={sello} className="Sello" alt="Sello de Lovecraft" />
        </div>
        <div className="Form-dado">
          <form onSubmit={handleSubmit} className="Form-Input">
            <input
              type="number"
              inputMode="numeric"
              value={valor}
              autoComplete="off"
              placeholder="🎲 Numero de dados 🎲"
              id="Input-dado"
              onChange={(e) => setValor(e.target.value)}
            />
          </form>
        </div>
        <div className="Estado">
          <button
            className={`Estado-Boton ${bendecido ? "activadoB" : ""}`}
            onClick={() => {
              setBendecido(!bendecido);
              if (!bendecido) setMaldecido(false);
            }}
          >
            <img src={bendicion} alt="Bendicion" />
          </button>
          <button
            className={`Estado-Boton ${maldecido ? "activadoM" : ""}`}
            onClick={() => {
              setMaldecido(!maldecido);
              if (!maldecido) setBendecido(false);
            }}
          >
            <img src={maldicion} alt="Maldicion" />
          </button>
        </div>
        {show ? (
          <Resultados
            dado={dado}
            exitos={exitos}
            closeshow={closeshow}
            bendecido={bendecido}
            maldecido={maldecido}
          />
        ) : (
          ""
        )}
      </div>
      <audio src={song} ref={audioRef}></audio>
    </>
  );
}

export default App;
