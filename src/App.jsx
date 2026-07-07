import './App.css'

const MiComponente = () => {
  const nombre = "Usuario";
  return (
    <div>
      <h2>Hola {nombre}</h2>
      <p>Bienvenido a la aplicación</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Pruebas React</h1>
      <MiComponente />
    </div>
  );
}

export default App;
