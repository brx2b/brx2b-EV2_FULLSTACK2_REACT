import React from 'react';
import '../App.css';

export default function Nosotros() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        background: 'black',
        overflowX: 'hidden',
        overflowY: 'auto',
        color: 'white',
        fontSize: '20px',
      }}
    >
      <div
        id="blok"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '5%',
          borderBottom: 'solid 3px gold',
          boxShadow: '0px 20px 10px rgba(0, 0, 0, 0.5)',
          marginBottom: '2rem',
        }}
      >
        <h1 className="dec-text" style={{ color: 'gold' }}>
          ¿Quiénes somos?
        </h1>
        <p>
          Somos una tienda en línea especializada en joyería y accesorios de lujo,
          ofreciendo piezas exclusivas y marcas reconocidas a nivel mundial.
          Desde 2020 realizamos envíos internacionales, garantizando la protección
          de los datos de nuestros clientes con cifrado de extremo a extremo.
        </p>
        <p>
          Nuestro compromiso es brindar productos de la más alta calidad junto con
          un servicio excepcional. Nos enfocamos en ofrecer una experiencia de
          compra segura, personalizada y totalmente satisfactoria, respaldada por
          asesoramiento experto.
        </p>
        <p>
          Nos enorgullece ser una tienda confiable y dedicada a superar las
          expectativas de cada cliente.
        </p>
      </div>

      <div
        id="blok"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '5%',
          borderBottom: 'solid 3px gold',
          boxShadow: '0px 20px 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        <h1 className="dec-text" style={{ color: 'gold' }}>
          ¿Qué ofrecemos?
        </h1>
        <p>
          Te ofrecemos una selección exclusiva de joyería y accesorios de lujo,
          cuidadosamente elegidos para garantizar calidad, elegancia y distinción.
          Nuestro catálogo reúne lo mejor del mercado actual para quienes buscan
          piezas únicas y con estilo.
        </p>
        <p>
          Con envíos seguros y seguimiento en tiempo real de tus productos,
          aseguramos la confianza y protección de cada pedido.
        </p>
      </div>
    </div>
  );
}
