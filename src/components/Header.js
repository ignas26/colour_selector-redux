import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
  render(){
    return(
        <header>
          <NavLink className="homepage" exact activeClassName="active" to="/">Home</NavLink>
          <NavLink className="quizpage" exact activeClassName="active" to="/quiz">Quiz</NavLink>
            <NavLink className="loginpage" exact activeClassName="active" to="/login">Login</NavLink>
            <NavLink className="stats" exact activeClassName="active" to="/statistics">Stats</NavLink>
        </header>
    );
  };
}

export default Header;