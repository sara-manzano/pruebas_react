import React from 'react'
import './App.css'
import ComponentAsync from './Components/ComponentAsync'
import Component2 from './Components/Component2'
import Component from './Components/Component'


function App() {
  return (
    <div className="App">
      <h1>Pruebas React</h1>
      <Component />
      <Component2 />
      <ComponentAsync />
    </div>
  );
}

export default App;
