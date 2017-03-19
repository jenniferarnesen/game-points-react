import './css/reset.css';
import './css/main.css';
import './css/responsive.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game.jsx';

const MyComp = (props) => (
  <article>
    <h1>Hey Jen</h1>
    <p>This is a paragraph</p>
  </article>
)

ReactDOM.render(<Game />, document.getElementById('app'));
