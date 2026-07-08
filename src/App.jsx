import React from 'react'
import './App.css'
import ComponentAsync from './Components/ComponentAsync'
import MyComponent2 from './Components/Component2'
import MyComponent from './Components/Component'


function App() {
  return (
    <div className="App">
      <h1>Pruebas React</h1>
      <MyComponent />
      <MyComponent2 />
      <ComponentAsync />
    </div>
  );
}

export default App;
