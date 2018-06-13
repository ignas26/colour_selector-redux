import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './sass/main.scss';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './AppRoutes';
import coloursReducer from './reducers/coloursReducer';
import varietyReducer from './reducers/varietyReducer';
import accomplishedReducer from './reducers/accomplished';
require('typeface-architects-daughter');


const rootReducer=combineReducers(
    {colours:coloursReducer,
    variety:varietyReducer,
    accomplished:accomplishedReducer
    });

const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}>
    <AppRoutes/>
</Provider>,
    document.getElementById('root'));
registerServiceWorker();
