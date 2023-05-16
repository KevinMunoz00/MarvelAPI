import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import marvelLogo from "./assets/marvel-logo.jpg";
import logoUsuario from "./assets/logo-usuario.png";
import marvelSub from "./assets/marvel-sub.png";
import searchLogo from "./assets/search.png";

function App() {
  const [comics, setComic] = useState([]);
  useEffect(() => {
    axios.get('https://rhcv7znabiy35fiejbp6tjxoru0mtfmw.lambda-url.us-east-1.on.aws/')
      .then(response => {
        setComic(response.data.data.results);
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
          <h1 className='texto-arriba'>KEVIN</h1>
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
            <a className='menu-enlaces' href='https://marvelcharacters1.s3.amazonaws.com/index.html'>PERSONAJES</a>
          </li>
          <li className='menu-celdas'>
            <a className='menu-enlaces' href='https://marvelcomcis.s3.amazonaws.com/index.html'>COMICS</a>
          </li>
          <li className='menu-celdas'>
            <a className='menu-enlaces' href='https://marvelseries1.s3.amazonaws.com/index.html'>SERIES</a>
          </li>
          <li className='menu-celdas'>
            <a className='menu-enlaces' href='https://marvelstories1.s3.amazonaws.com/index.html'>HISTORIAS</a>
          </li>
        </ul>
      </nav>


      <h1 className="titulo">Marvel Comics</h1>

      <div className='contenedor-comics'>
        {comics.map((comic) => (
          <div className='comics'>
            <div className='comic-contenedor-imagen'>
              <img className='comic-imagen' src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}></img>
            </div>
            <div className='comic-informacion'>
              <div className='comic-nombre'>
                <h2><strong>{comic.title}</strong></h2>
                <p><strong>Descripción: </strong>{comic.description}</p>
              </div>
              <div className='comic-creadores'>
                <p><strong>Creadores: </strong>
                  {comic.creators.items.map((creator) =>
                    creator.name).join(", ")
                  }</p>
                <ul className='comic-lista-series'>

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