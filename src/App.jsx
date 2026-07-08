import React from 'react'
import './App.css'

const MiComponente = () => {
  const firstName = "USUARIO";
  return (
    <div>
      <h2>Hola</h2>
      <p>Bienvenido a la aplicación</p>
    </div>
  );
};

const MiComponente2 = () => {
  const firstName = "Nombre";
  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, firstName),
    React.createElement('p', null, 'Introduce tu nombre'),
  );
};

function App() {
  return (
    <div className="App">
      <h1>Pruebas React</h1>
      <MiComponente />
      <MiComponente2 />
    </div>
  );
}

export default App;
