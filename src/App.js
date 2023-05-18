import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import marvelLogo from "./assets/marvel-logo.jpg";
import logoUsuario from "./assets/logo-usuario.png";
import marvelSub from "./assets/marvel-sub.png";
import searchLogo from "./assets/search.png";
 
function App() {
  const [personajes, setPersonajes] = useState([]);
  useEffect(() => {
    axios.get('https://4vjrhj24kdmmcgbgtv7i2c5z4e0esdfe.lambda-url.us-east-1.on.aws/')
      .then(response => {
        setPersonajes(response.data.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
 
  return (
    <div className="container-fluid" id='primer-contenedor'>
      <div className='contenedor-iconos'>
        <div id='elem'>
          <img className='logo-usu' src={logoUsuario}/>
          <h1 className='texto-arriba'>ANDREW</h1>
        </div>
        <div id='elem' className='elem2'>
          <img className='logo-marvel' src={marvelLogo}/>
        </div>
        <div id='elem'>
          <img className='logo-marvel-sub' src={marvelSub}/>
          <h1 className="texto-arriba">MARVEL UNLIMITED SUBSCRIBE</h1>
        </div>
        <div id='elem'>
          <img id='searchl' src={searchLogo} alt="Search Logo" className="img-fluid" />
        </div>
      </div>

      

      <nav className='contenedor-menu'>
        <ul className='menu'>
          <li className='menu-celdas'>
            <a className='menu-enlaces' href='https://d3fv4a5rs1kzo7.cloudfront.net/characters/index.html'>PERSONAJES</a>
          </li>
          <li className='menu-celdas'>
            <a className='menu-enlaces' href='https://d3fv4a5rs1kzo7.cloudfront.net'>COMICS</a>
          </li>
          <li className='menu-celdas'>
            <a className='menu-enlaces' href='https://d3fv4a5rs1kzo7.cloudfront.net/series/index.html'>SERIES</a>
          </li>
          <li className='menu-celdas'>
            <a className='menu-enlaces' href='https://d3fv4a5rs1kzo7.cloudfront.net/stories/index.html'>HISTORIAS</a>
          </li>
        </ul>
      </nav>

      <h1 className="titulo">Marvel Characters</h1>

      <div className='contenedor-personajes'>
        {personajes.map(personaje => (
          <div className='personajes'>
            <div className='personaje-contenedor-imagen'>
              <img className='personaje-imagen' src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}></img>
            </div>
            <div className='personaje-informacion'>
              <div className='personaje-nombre'>
                <h2>{personaje.name}</h2>
                <p>{personaje.description}</p>
              </div>
              <div className='personaje-series'>
                <h3>Series del Personaje: </h3>
                <ul className='personaje-lista-series'>
                  {personaje.series.items.map(series => (
                    <li><a href={series.resourceURI}>{series.name}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );  
}
 
export default App;