import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../coloresCustom.css";
function Blog() {
  return (
    
    <div className="fondo-blog" style={{backgroundColor:' rgba(0, 0, 0, 0.8)',borderTop:'solid 2px white', borderBottom:'solid 2px white'}}>
      {/* Contenido principal */}
      <main id="contenedor-blog" style={{ padding: "2rem" }}>
        <h1 style={{ color: "gold", textAlign: "center" }}>Blog</h1>
        <br />

        <div className="entrada-blog" style={entradaStyle}> 
          <h2>El primer collar hecho 99% de materia negra</h2>
          <p>
            Dicen que la moda es un agujero negro para la billetera… ahora puedes
            llevarlo literalmente en el cuello. Este collar de materia negra
            concentra elegancia y misterio en una pieza que parece absorber la
            luz (y las miradas) a su alrededor. No recomendado para quienes
            pierden las llaves con frecuencia: podría tragárselas.
          </p>
        </div>

        <div className="entrada-blog" style={entradaStyle}>
          <h2>Anillos de gravedad: joyas que desafían la física</h2>
          <p>
            Estos anillos no solo adornan tus manos, también retan a Newton.
            Diseñados con microtecnología gravitacional, generan un campo sutil
            que los hace “flotar” apenas sobre tu piel. La ciencia se volvió
            lujo… y tu estilo, una anomalía elegante.
          </p>
        </div>

        <div className="entrada-blog" style={entradaStyle}>
          <h2>La revolución del cristal cuántico en accesorios de lujo</h2>
          <p>
            Cuando dijimos que queríamos accesorios brillantes, los científicos
            se lo tomaron muy en serio. El cristal cuántico cambia de tono según
            el estado de tus partículas… o de tu ánimo, quién sabe. Perfecto
            para quienes necesitan un accesorio que sea tan impredecible como
            ellos.
          </p>
        </div>

        <div className="entrada-blog" style={entradaStyle}>
          <h2>Bolígrafos de titanio líquido: escritura con estilo futurista</h2>
          <p>
            Este bolígrafo no solo escribe, deja una declaración: “soy demasiado
            sofisticado para usar un lápiz común”. Hecho de titanio líquido,
            cada trazo es tan elegante que podrías firmar un tratado de paz
            intergaláctico con él. Ideal para contratos serios… o para tu lista
            de compras.
          </p>
        </div>

        <div className="entrada-blog" style={entradaStyle}>
          <h2>Arte portátil: esculturas miniatura en metales raros</h2>
          <p>
            Porque colgar cuadros ya es del siglo pasado, ahora puedes llevar una
            escultura de museo en tu chaqueta. Estas piezas son tan pequeñas y
            detalladas que necesitarás una lupa para apreciar el arte… y otra
            para presumir el precio.
          </p>
        </div>
      </main>


    </div>
  );
}

// estilo de cada bloque de entrada del blog
const entradaStyle = {  
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  border: "2px solid gold",
  padding: "20px",
  margin: "20px auto",
  maxWidth: "800px",
  color: "white",
  borderRadius: "10px",
};
export default Blog;