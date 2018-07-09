import React from 'react';
import error from '../assets/error.jpg';

const page404 = (props) => {
  return (
      <div className="page404">
        <img src={error} alt=""/>
        <div
            className="return"
            onClick={() => props.history.push('/')}
        >Home Page >>>
        </div>
      </div>
  );
};

export default page404;