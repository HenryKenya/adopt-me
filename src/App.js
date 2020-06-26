import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => (
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese" />
    <Pet name="Cobra" animal="Dog" breed="German Shephard" />
  </div>
);

ReactDOM.render(React.createElement(App), document.getElementById('root'));
