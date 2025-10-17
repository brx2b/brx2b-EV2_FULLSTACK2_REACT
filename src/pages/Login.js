import React from "react";
import App from "../App";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function Login(){
    const usuarios = [{ nickname: 'admin', email: '', password: 'admin' }];
    const navigate = useNavigate();
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
        document.getElementById('iniciar-s').setAttribute('hidden', 'true');
      alert(`Bienvenido, ${usuarioActivo.nickname}`);
      
      navigate("/");
      
    } else {
      alert('Usuario o contraseña incorrectos');
      
    }
  }
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
    return(
        <>
            
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

        </>
    )
}