import React from "react";

function Carrito({ carrito, setCarrito }) {
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
    //Elimina el producto del carrito filtrando por id
  };
  

  const aumentarCantidad = (id) => {
    setCarrito(
      carrito.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      ) //Si existe el item en el carrito aumenta la cantidad, si no, lo deja igual
    );
  };

  const disminuirCantidad = (id) => {
  const producto = carrito.find(item => item.id === id);

  if (!producto) return; // Si no se encuentra el producto con esa id, salir de la función

  if (producto.cantidad > 1) {
    const nuevoCarrito = carrito.map(item => 
      item.id === id
        ? { ...item, cantidad: item.cantidad - 1 }
        : item
        //Si existe el item en el carrito y la cantidad es mayor a 1, disminuye la cantidad, si no, lo deja igual
    );
    setCarrito(nuevoCarrito);
  } else {
    // Eliminar producto si cantidad es 1
    const nuevoCarrito = carrito.filter(item => item.id !== id);
    setCarrito(nuevoCarrito);
  }
};



  const total = carrito.reduce( //funcion de array (carrito ) que suma el precio por la cantidad de cada item
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );
  function compraCompleta(){
    alert("¡Compra realizada!, gracias por su compra.");
    setCarrito([]);
  }

  return (
    <div style={{ padding: "5vh", color: "white", background: "rgba(0, 0, 0, 0.7)", minHeight: "100vh",borderTop:"solid 2px white",borderBottom:"solid 2px white" }}>
      <h1 style={{ color: "gold" }}>Carrito</h1>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p> // si no hay carritos mostrar mensaje
      ) : (
        <>
          {carrito.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "2px solid gold",
                padding: "10px",
                marginBottom: "15px",
                borderRadius: "10px",
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
            >
              <img
                src={item.imagen}
                alt={item.nombre}
                style={{
                  width: "100px",
                  borderRadius: "10px",
                  border: "1px solid gold",
                }}
              />
              <div style={{ flex: 1, marginLeft: "20px" }}>
                <h3>{item.nombre}</h3>
                <p>${item.precio.toLocaleString()}</p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  onClick={() => disminuirCantidad(item.id)}
                  style={botonCantidad}
                >
                  -
                </button>
                <span>{item.cantidad}</span>
                <button
                  onClick={() => aumentarCantidad(item.id)}
                  style={botonCantidad}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => eliminarDelCarrito(item.id)}
                style={{
                  marginLeft: "20px",
                  border: "2px solid red",
                  background: "black",
                  color: "white",
                  cursor: "pointer",
                  padding: "5px 10px",
                }}
              >
                Eliminar
              </button>
            </div>
          ))}
          <h2 style={{ color: "gold" }}>Total: ${total.toLocaleString()}</h2>
          <button
            onClick= {compraCompleta} //Al hacer click en el boton se ejecuta la funcion compraCompleta
            style={{
              border: "2px solid gold",
              background: "black",
              color: "white",
              padding: "10px 20px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
}

const botonCantidad = {
  border: "2px solid gold",
  background: "black",
  color: "white",
  cursor: "pointer",
  padding: "5px 10px",
};
export default Carrito;