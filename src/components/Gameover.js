import React from 'react';

const Gameover = (props) =>{
  return(
      <div className="gameover">
        <div className="message">
          <h1>Hate to inform you that you've just lost :(</h1>
          <div className="suggestions">
            <div onClick={()=>props.history.push('/quiz')} className="replay">Try your luck again</div>
            <div onClick={()=>props.history.push('/')} className="home">Return to home page</div>
            <div onClick={()=>props.history.push('statistics')} className="stats">Check out your stats</div>
          </div>
        </div>
      </div>
  );
};

export default Gameover