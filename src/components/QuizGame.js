import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';



class QuizGame extends React.Component {
state={
  squares:[],
  level:1,
  color:'',
  values:[]
};

  componentDidMount () {
    this.renderSquare();
  }


renderSquare = () => {

  const url = this.props.match.params.colour;

  let activeColour = this.props.variety.filter(item=>{
    return item.colour===url});

  const r = activeColour[0].values[0];
  const g = activeColour[0].values[1];
  const b = activeColour[0].values[2];


  const newValue = [r, g, b];

    let colours = [];
    for (let i = 0; i < 49; i++) {
     colours.push(`rgb(${newValue})`)
    }

    for (let i = 50; i < 55; i++) {
      colours.push(`rgb(${newValue[0]-75/this.state.level},${newValue[1]},${newValue[2]})`)
    }



    const shuffle = _.shuffle(colours);
    this.setState({
      squares: shuffle
    });
  console.log(this.state.squares);

  };


  render() {

    // const url = this.props.match.params.colour;
    //
    // let activeColour = this.props.variety.filter(item=>{
    //     return item.colour===url});
    //
    // const r = activeColour[0].values[0];
    // const g = activeColour[0].values[1];
    // const b = activeColour[0].values[2];


  const squares = this.state.squares.map((square, i)=>{
    return <div key={i} className="singleBlock" style={{backgroundColor: square}}></div>
      });

    return (
        <div className="allBlocks">
        {squares}
        </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{variety:state.variety}
};



export default connect(mapStateToProps)(QuizGame)