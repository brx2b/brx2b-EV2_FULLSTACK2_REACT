import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './coloresCustom.css';
// Pags
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Blog from './pages/Blog';
import Carrito from './pages/Carrito';
import Login from './pages/Login';
function Inicio({ productos, agregarAlcarrito }) {
  return (
    <div id='media-pag' className='tarjeta card-body '>
      {productos.map(producto => (
        <div className='tarjetas m-0 p-0' key={producto.id}>
          <img src={producto.imagen} alt={producto.nombre} style={{ width: '40vh' }} />
          <h3>{producto.nombre}</h3>
          <p>${producto.precio}</p>
          <p>{producto.desc}</p>
          <button
            style={{
              cursor: 'pointer',
              color: 'white',
              margin: '15px',
              padding: '5px',
              border: 'yellow solid 2px',
              background: 'black'
            }}
            onClick={() => agregarAlcarrito(producto)}
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
}

function App() {
  
  
  const productos = [
    { id: 1, nombre: 'Collar con jade', precio: 199000, imagen: 'imgs/12f6e627-4fcb-47cd-a9f2-be5cf3011344.jpeg', desc: 'Collar de oro 18k', cantidad: 0 },
    { id: 2, nombre: 'Miel de dorado', precio: 690990, imagen: 'imgs/botella_miel_de_oro.jpg', desc: 'Botella de miel de oro 24k', cantidad: 0 },
    { id: 3, nombre: 'Collar con zafiro', precio: 559000, imagen: 'imgs/f9c771a0-4610-4755-b788-534178286120.jpeg', desc: 'Collar de oro con gema de jade', cantidad: 0 },
    { id: 4, nombre: 'Huevo real', precio: 499000, imagen: 'imgs/huevo_.jpeg', desc: 'Huevo de ónix con oro', cantidad: 0 },
    { id: 5, nombre: 'Mono dorado', precio: 900000, imagen: 'imgs/mono_oro.jpg', desc: 'Mono de oro macizo', cantidad: 0 },
    { id: 6, nombre: 'Collar blanco', precio: 699000, imagen: 'imgs/output (1).jpg', desc: 'Collar de diamante blanco', cantidad: 0 },
    { id: 7, nombre: 'Pendientes blancos', precio: 720000, imagen: 'imgs/output (2).jpg', desc: 'Pendientes de diamante blanco', cantidad: 0 },
    { id: 8, nombre: 'Grills de gemas', precio: 110000, imagen: 'imgs/output (3).jpg', desc: 'Grills de oro y gemas', cantidad: 0 },
    { id: 9, nombre: 'Grills de diamante', precio: 149000, imagen: 'imgs/output (4).jpg', desc: 'Grills de diamante blanco con oro', cantidad: 0 }
  ];

  const [carrito, setCarrito] = useState([]);

  

  const agregarAlcarrito = (producto) => {
    if (localStorage.getItem('usuarioActivo') === null) {
      alert('Por favor, inicie sesión para agregar productos al carrito');
      return;
    }
    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
      const nuevoCarrito = carrito.map(item =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
    alert(`Se ha agregado ${producto.nombre} al carrito`);
  };

  

  const cerrarCuenta = () => {
    localStorage.removeItem('usuarioActivo');
    document.getElementById('bienvenida').innerText = 'Bienvenido a Yusmeing';
    alert('Sesión cerrada');
    window.location.reload();
  };

  useEffect(() => { // Verificar si hay un usuario activo
    const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));
    if (usuarioActivo) {
      document.getElementById('carritoBTN').removeAttribute('hidden');
      document.getElementById('btn-cerrar').removeAttribute('hidden');
      document.getElementById('bienvenida').innerText = `${usuarioActivo.nickname}`;
      document.getElementById('iniciar-s').setAttribute('hidden', 'true');
      
    }
  }, []);

  return (
    
    <Router>
      <div>
        <header id='barra-sup'>
             
          <nav className='navbar justify-content-center m-0 p-0 position-relative'>
            
            <span id='logo'>Yusmeing</span>
            <Link to="/"><span className='menu'>Inicio</span></Link>
            <Link to="/Contacto"><span className='menu'>Contacto</span></Link>
            <Link to="/Blog"><span className='menu'>Blog</span></Link>
            <Link to="/Nosotros"><span className='menu'>Nosotros</span></Link>
            <Link to="/Carrito"><span className='menu' id='carritoBTN' hidden>Carrito</span></Link>
            <span className='texto-custom-dorado' style={{cursor:"default"}}>|</span>
            <Link to="/Login"><span className='menu' id="iniciar-s">Iniciar sesión</span></Link>
            <span className='texto-custom-dorado' id='bienvenida'></span>
            <button
              id='btn-cerrar'
              type='button'
              onClick={cerrarCuenta}
              style={{
                width: '100px',
                height: '40px',
                border: 'solid 2px gold',
                margin: '10px',
                color: 'white',
                backgroundColor: 'black',
                cursor: 'pointer'
              }}
              hidden
            >
              Cerrar sesión
            </button>
            
          </nav>
          
        </header>

        

        <Routes>
          <Route path="/" element={<Inicio productos={productos} agregarAlcarrito={agregarAlcarrito} />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Carrito" element={<Carrito carrito={carrito} setCarrito={setCarrito} />} />
          <Route path='/Login' element={<Login/>} />
        </Routes>
        
        <footer>2025 sitio web desarrollado por brx2b (Brian Aravena). Todos los derechos reservados.</footer>
      </div>
    </Router>
  );
}

export default App;
