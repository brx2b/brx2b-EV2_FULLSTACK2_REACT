import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Pags
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Blog from './pages/Blog';
import Carrito from './pages/Carrito';



function Inicio({ productos, agregarAlcarrito }) {
  return (
    <div id='media-pag' className='tarjeta'>
      {productos.map(producto => (
        <div className='tarjetas' key={producto.id}>
          <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%' }} />
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
  const usuarios = [{ nickname: 'admin', email: '', password: 'admin' }];

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

  function verificarUsuario() {
    const nickname = document.getElementById('nick-iniciar').value;
    const password = document.getElementById('contrase-iniciar').value;

    if (nickname === '' || password === '') {
      alert('Por favor, complete todos los campos');
      document.getElementById('nick-iniciar').setAttribute('style', 'border: solid 2px red');
      document.getElementById('contrase-iniciar').setAttribute('style', 'border: solid 2px red');
      return;
    }
    const usuarioActivo = usuarios.find(u => u.nickname === nickname && u.password === password);

    if (usuarioActivo) {
      localStorage.setItem('usuarioActivo', JSON.stringify(usuarioActivo));
      document.getElementById('carritoBTN').removeAttribute('hidden');
      document.getElementById('btn-cerrar').removeAttribute('hidden');
      document.getElementById('bienvenida').innerText = `Bienvenido, ${usuarioActivo.nickname}`;
      alert(`Bienvenido, ${usuarioActivo.nickname}`);
      window.location.reload();
    } else {
      alert('Usuario o contraseña incorrectos');
      
    }
  }

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

  function registrarUsuario() {
    const nickname = document.getElementById('nick-registrar').value;
    const email = document.getElementById('email-registrar').value;
    const password = document.getElementById('contrase-registrar').value;
    const passwordVer = document.getElementById('contrase-registrar-ver').value;

    if (password !== passwordVer) {
      alert('Las contraseñas no coinciden');
      document.getElementById('contrase-registrar').setAttribute('style', 'border: solid 2px red');
      document.getElementById('contrase-registrar-ver').setAttribute('style', 'border: solid 2px red');
      return;
    }
    if (nickname === '' || email === '' || password === '') {
      alert('Por favor, complete todos los campos');
      
      return;
    }
    const existe = usuarios.find(u => u.email === email);

    if (existe) {
      alert('El usuario ya existe');
      return;
    }

    usuarios.push({ nickname, email, password });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Usuario registrado correctamente');
    document.getElementById('nick-registrar').value = '';
    document.getElementById('email-registrar').value = '';
    document.getElementById('contrase-registrar').value = '';
    document.getElementById('contrase-registrar-ver').value = '';
    document.getElementById('contrase-registrar').setAttribute('style', 'border: solid 2px green');
    document.getElementById('contrase-registrar-ver').setAttribute('style', 'border: solid 2px green');
    document.getElementById('nick-registrar').setAttribute('style', 'border: solid 2px green');;
    document.getElementById('email-registrar').setAttribute('style', 'border: solid 2px green');;
    return;
  }

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
      document.getElementsByClassName('cuenta')[0].style.display = 'none';
      document.getElementById('bienvenida').innerText = `Bienvenido, ${usuarioActivo.nickname}`;
    }
  }, []);

  return (
    <Router>
      <div>
        <header id='barra-sup'>
          
          <span id='logo'>Yusmeing</span>
          <Link to="/"><span className='menu'>Inicio</span></Link>
          <Link to="/Contacto"><span className='menu'>Contacto</span></Link>
          <Link to="/Blog"><span className='menu'>Blog</span></Link>
          <Link to="/Nosotros"><span className='menu'>Nosotros</span></Link>
          <Link to="/Carrito"><span className='menu' id='carritoBTN' hidden>Carrito</span></Link>
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
        </header>

        <h1 id='bienvenida'>Bienvenido a Yusmeing</h1>

        <div className='cuenta'>
          <div className='ini'>
            <div id='tex'>
              <h1>Iniciar sesión</h1>
            </div>
            <h3 className='texto-cuenta'>Usuario</h3>
            <input type='text' id='nick-iniciar' placeholder='usuario' required />
            <br />
            <h3 className='texto-cuenta'>Contraseña</h3>
            <input type='password' id='contrase-iniciar' placeholder='* * * * *' required />
            <br />
            <button type="submit" onClick={verificarUsuario}>Ingresar</button>
          </div>

          <div className='ini'>
            <h1>Registrarse</h1>
            <input type="text" id="nick-registrar" placeholder="Nickname" />
            <br />
            <input type="email" id="email-registrar" placeholder="Email" />
            <br />
            <input type="password" id="contrase-registrar" placeholder="Contraseña" />
            <br />
            <input type="password" id="contrase-registrar-ver" placeholder="Repetir Contraseña" />
            <br />
            <button type="submit" onClick={registrarUsuario}>Registrar</button>
          </div>
        </div>

        // Rutas de la pag
        <Routes>
          <Route path="/" element={<Inicio productos={productos} agregarAlcarrito={agregarAlcarrito} />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Carrito" element={<Carrito carrito={carrito} setCarrito={setCarrito} />} />

        </Routes>

        <footer>2025 sitio web desarrollado por brx2b (Brian Aravena). Todos los derechos reservados.</footer>
      </div>
    </Router>
  );
}

export default App;
