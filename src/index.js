import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './sass/main.scss';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './AppRoutes';
import coloursReducer from './reducers/coloursReducer';


const rootReducer=combineReducers({colours:coloursReducer});

const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}>
    <AppRoutes/>
</Provider>,
    document.getElementById('root'));
registerServiceWorker();
