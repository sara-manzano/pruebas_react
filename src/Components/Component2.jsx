import React from "react";

const MyComponent2 = () => {
  const firstName = "Nombre";
  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, firstName),
    React.createElement('p', null, 'Introduce tu nombre'),
  );
};

export default MyComponent2;