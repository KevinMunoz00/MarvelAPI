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
            <a className='menu-enlaces' href='#https://marvelcharacters1.s3.amazonaws.com/index.html'>PERSONAJES</a>
          </li>
          <li className='menu-celdas'>
            <a className='menu-enlaces' href='#'>COMICS</a>
          </li>
          <li className='menu-celdas'>
            <a className='menu-enlaces' href='#'>SERIES</a>
          </li>
          <li className='menu-celdas'>
            <a className='menu-enlaces' href='#'>HISTORIAS</a>
          </li>
        </ul>
      </nav>


      <h1 className="titulo">Marvel Comics</h1>

      <div className='contenedor-personajes'>
        {comics.map((comic) => (
          <div key={comic.id} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 d-inline-block mx-3 my-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
              <div className="card-body p-1">
                <h6 className="card-title fw-bold">{comic.title}</h6>
                <p className="card-text mb-1">
                  <strong>Titulo: </strong>
                  {comic.title}
                </p>
                <p className="card-text mb-1">
                  <strong>Descripcion: </strong>
                  {comic.description}
                </p>
                <p className="card-text mb-1">
                  <strong>Creadores: </strong>
                  {comic.creators.items.map((creator) => creator.name).join(", ")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;