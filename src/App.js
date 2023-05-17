import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import marvelLogo from "./assets/marvel-logo.jpg";
import logoUsuario from "./assets/logo-usuario.png";
import marvelSub from "./assets/marvel-sub.png";
import searchLogo from "./assets/search.png";

function App() {
  const [stories, setstories] = useState([]);
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
            <a className='menu-enlaces' href='https://marvelcharactersv2.s3.amazonaws.com/index.html'>PERSONAJES</a>
          </li>
          <li className='menu-celdas'>
            <a className='menu-enlaces' href='https://marvelcomicsv2.s3.amazonaws.com/index.html'>COMICS</a>
          </li>
          <li className='menu-celdas'>
            <a className='menu-enlaces' href='https://marvelseries1.s3.amazonaws.com/index.html'>SERIES</a>
          </li>
          <li className='menu-celdas'>
            <a className='menu-enlaces' href='https://marvelstories1.s3.amazonaws.com/index.html'>HISTORIAS</a>
          </li>
        </ul>
      </nav>

      <h1 className="titulo">Marvel Stories</h1>
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Categoria</th>
              <th>Serie</th>
              <th>Titulo Original</th>
            </tr>
          </thead>
          <tbody>
            {stories.map((story) => (
              <tr key={story.id}>
                <td>{story.title}</td>
                <td>{story.type}</td>
                <td>
                  {story.series.items.map((item) => (
                    <div key={item.resourceURI}>{item.name}</div>
                  ))}
                </td>
                <td>{story.originalIssue.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;