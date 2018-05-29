import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Array from './components/Array';
import Quiz from './components/Quiz';
import QuizGame from './components/QuizGame';

class AppRoutes extends React.Component{
  render(){
    return(
        <BrowserRouter>
          <div>
            <Header/>
            <Switch>
              <Route path='/' component={Content} exact/>
              <Route path='/array' component={Array}/>
              <Route exact path='/quiz' component={Quiz}/>
              <Route exact path='/quiz/game/:colour' component={QuizGame}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  };
}

export default AppRoutes;