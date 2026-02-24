import "../Style/Resultados.css";
import Monja from "../assets/monja.jpg";
import MaldicionContrato from "../assets/boss.jpg";
import Normal from "../assets/boss2.jpg";
function Resultados({ dado, exitos, closeshow, bendecido, maldecido }) {
  const tirada = dado.join(", ");
  return (
    <>
      <div className="Resultados" onClick={() => closeshow()}>
        <div className="Contenedor-Resultados">
          <img
            src={bendecido ? Monja : maldecido ? MaldicionContrato : Normal}
            alt="Fondo"
            className="Fondo-Resultados"
          />
          <div className="Texto-Resultados">
            <div className="ConteinerTirada">
              <h3>Resultados</h3>
              <section className="ConteinerTirada">
                🎲Tirada: <br /> <span>{tirada}</span>
              </section>
            </div>
            <section>
              <span className="start">⭐</span>Exitos: <span>{exitos}</span>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
export default Resultados;
