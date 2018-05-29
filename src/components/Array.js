import React from 'react';
import {connect} from 'react-redux';


class Array extends React.Component{
  render(){
    const colours=this.props.colours.colours.map((item, i)=>{
      if(item.colour===this.props.colours.currentColour) {
        return <div key={i}
                    style={{backgroundColor: item.colour}}
                    className="currentColour">
          <div className='name' style={{color: item.colour}}>{item.name}</div>
          <p>{item.about}</p>
        </div>
      }else{
        return <div
            onClick={()=>this.props.changeCurrent(item.colour)}
            style={{backgroundColor:item.colour}}
            key={i}
            className="remainingColours">
        </div>
      }
    });

    return(
        <div className="array">
          {colours}
        </div>
    );
  };
}

const mapStateToProps=(state)=>{
  return{colours:state.colours}
};

const mapDispatchToProps=(dispatch)=>{
  return{
    changeCurrent(colour){
      dispatch({type: 'CHANGE_CURRENT', payload:colour})
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Array);

