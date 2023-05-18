import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import marvelLogo from "./assets/marvel-logo.jpg";
import logoUsuario from "./assets/logo-usuario.png";
import marvelSub from "./assets/marvel-sub.png";
import searchLogo from "./assets/search.png";

function App() {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    axios.get('https://jtoond3jgc7rt6ztmphlw26hp40gtnbg.lambda-url.us-east-1.on.aws/')
      .then(response => {
        setSeries(response.data.data.results);
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
          <h1 className='texto-arriba'>JOHAN</h1>
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
      
      <h1 className="titulo">Marvel Series</h1>
      <div className='contenedor-series'>
        {series.map((serie) => (
          <div className='series'>
            <div className='serie-contenedor-imagen'>
              <img className='serie-imagen' src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}></img>
            </div>
            <div className='serie-informacion'>
              <div className='serie-nombre'>
                <h2><strong>{serie.title}</strong></h2>
                <p><strong>Descripción: </strong>{serie.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;