import React from 'react';
import '../App.css';
import '../contacto.css';

export default function Contacto() {
  return (
    <div
      className="contenedorCon"
    >
      <h1 style={{ color: 'gold' }}>Contacto</h1>
      <br />
      <h3>Teléfono: +56 9 1234567</h3>
      <h3>Email: bria.aravena@duocuc.cl</h3>
      <h3>Dirección: Av. Siempre Viva 123, Springfield</h3>
      <h3>Horario de atención: Lunes a Viernes, 9:00 AM - 6:00 PM</h3>
    </div>
  );
}
