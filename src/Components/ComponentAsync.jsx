import React from 'react'

function ComponentAsync() {
  const [name, setName] = React.useState('Sara');

  React.useEffect(() => {
    console.log('Antes:', name);  // "Sara"
    setName('David');
  }, []);

  React.useEffect(() => {
    console.log('Después:', name); // "David"
  }, [name]);

  return (
    <div>
      <h2>Hola {name}</h2>
      <p>Bienvenido a la aplicación</p>
    </div>
  );
}

export default ComponentAsync;