import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class Content extends React.Component{
  render(){
    const colours=this.props.colours.colours.map((colour,i)=>{
      return <Link
          to={`/array/${colour.colour}`}
          key={i}>
        <div
            className="colour"
            onClick={()=>this.props.makeCurrent(colour.colour)}
            style={{backgroundColor:colour.colour}}
            key={i}>
        </div>
      </Link>
    });
    return(
        <div>
        <h1 className="main-logo">colour selector</h1>
          <div className="content">
          {colours}
        </div>
        </div>
    );
  };
}

const mapStateToProps=(state)=>{
  return{colours:state.colours}
};

const mapDispatchToProps=(dispatch)=>{
  return{
    makeCurrent(colour){
      dispatch({type:'MAKE_CURRENT', payload:colour})
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Content);