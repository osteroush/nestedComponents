
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';//All Components are contained in, and rendered from, the Main Component.
import 'normalize.css/normalize.css';//imported 3rd party library, part of my boiler plate
import './styles/styles.scss';// import all styles sheets with this line.

ReactDOM.render(<Main />, document.getElementById('main'));
