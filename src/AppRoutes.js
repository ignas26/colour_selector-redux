import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import Header from './components/Header';

class AppRoutes extends React.Component{
  render(){
    return(
        <BrowserRouter>
          <div>
            <Header/>
            <Switch>
            </Switch>
          </div>
        </BrowserRouter>
    );
  };
}

export default AppRoutes;