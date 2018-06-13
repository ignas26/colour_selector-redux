import React from 'react';
import {connect} from 'react-redux';

const Statistics = (props) =>{
  const results = props.accomplished.map((acc, i)=>{
    const height = 30+10*acc.result;
    return (
        <div
        key={i}
        style={{backgroundColor: acc.colour,height:`${height}px`}}
        className="bar">
      <p style={{lineHeight:`${height}px`}}>
        {acc.result===''? 'No result' : `Your level is ${acc.result}`}</p>
    </div>
    )
  });

  return(
      <div className="statistics">
        <h1>Your stats:</h1>
        <div className="bars">
          {results}
        </div>
      </div>
  );
};

const mapStateToProps= (state) =>{
  return {accomplished:state.accomplished};
};

export default connect(mapStateToProps)(Statistics);