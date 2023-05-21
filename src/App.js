import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import marvelLogo from "./assets/marvel-logo.jpg";
import logoUsuario from "./assets/logo-usuario.png";
import marvelSub from "./assets/marvel-sub.png";
import searchLogo from "./assets/search.png";

function App() {
  const [stories, setstories] = useState([]);
  var cont = 1;
  useEffect(() => {
    axios.get('https://qxvow6mohts7fdzaut7by5jqpy0gtrdq.lambda-url.us-east-1.on.aws/')
      .then(response => {
        setstories(response.data.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className='contenedor-iconos'>
        <div id='elem'>
          <img className='logo-usu' src={logoUsuario} />
          <h1 className='texto-arriba'>FAMILIA</h1>
        </div>
        <div id='elem' className='elem2'>
          <img className='logo-marvel' src={marvelLogo} />
        </div>
        <div id='elem'>
          <img className='logo-marvel-sub' src={marvelSub} />
          <h1 className="texto-arriba">MARVEL UNLIMITED SUBSCRIBE</h1>
        </div>
        <div id='elem'>
          <img id='searchl' src={searchLogo} alt="Search Logo" className="img-fluid" />
        </div>
      </div>

      <nav className='contenedor-menu'>
        <ul className='menu'>
          <li className='menu-celdas'>
            <a className='menu-enlaces' href='/characters/index.html'>PERSONAJES</a>
          </li>
          <li className='menu-celdas'>
            <a className='menu-enlaces' href='/index.html'>COMICS</a>
          </li>
          <li className='menu-celdas'>
            <a className='menu-enlaces' href='/series/index.html'>SERIES</a>
          </li>
          <li className='menu-celdas'>
            <a className='menu-enlaces' href='/stories/index.html'>HISTORIAS</a>
          </li>
        </ul>
      </nav>

      <h1 className="titulo">Marvel Stories</h1>
      <div className="contenedor-tabla">
        <table className="tabla-historias">
          <thead>
            <tr>
              <th>Numero</th>
              <th>Titulo</th>
              <th>Descripcion</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {stories.map((story) => {
              const fechastory = story.modified;
              return (
                <tr key={story.id}>
                  <td>{cont++}</td>
                  <td>{story.originalIssue.name}</td>
                  <td claseName="Descripcion">{story.title}</td>
                  <td>{new Date(fechastory).toLocaleDateString('en-es', { year: "numeric", month: "short", day: "numeric" })}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;