import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './AppRoutes';
import 'normalize.css';
import './sass/main.scss';
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(<AppRoutes/>, document.getElementById('root'));
registerServiceWorker();
