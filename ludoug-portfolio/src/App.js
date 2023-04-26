import React, { useEffect, useState } from 'react';
import logo from './logo.jpg';
import './App.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetchCat();
  }, []);

  function fetchCat() {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((res) => res.json())
      .then((result) => setData(result[0].url)
      );
  }

  if (data === '') return 'Loading...';
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} alt="logo" width="200" height="200" className='perfil'/>
          Olá sou o Luciano e estou construindo meu portfólio, em breve estará pronto!<br/>
          Até lá se divirta gerando fotos aleatórias de gatos com o botão abaixo
      </header>
      <br/>
      <body>
      <div>
      <div className='All'>
        <button className='myButton' type="button" onClick={fetchCat}>Meow 🐈</button>
      </div>
      <br/>
        <img src={data} alt="imagem gatinho" className='catImg'/>
    </div>
      </body>
    </div>
  );
}

export default App;
