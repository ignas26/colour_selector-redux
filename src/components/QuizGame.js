import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';



class QuizGame extends React.Component {
state={
  squares:[],
  level:''
};

  componentDidMount () {
    this.renderSquare();
  }


renderSquare = () => {

    let colours = [];
    for (let i = 0; i < 95; i++) {
      colours.push('rgb(255, 100, 100)')
    }

    for (let i = 95; i < 100; i++) {
      colours.push('rgb(255, 0, 200)')
    }

    const shuffle = _.shuffle(colours);
    this.setState({
      squares: shuffle
    })
  };




  render() {

    // const url = this.props.match.params.colours;
    //
    // let colour = this.props.colours.colours.filter(c=>c.name===url);
    // colour=colour[0];

  const squares = this.state.squares.map((square, i)=>{
    return <div key={i} className="singleBlock" style={{backgroundColor: square}}></div>
      });

    return (
        <div className="allBlocks">
        <div>
        {squares};
        </div>

        <div>
        {/*{colour}*/}
        </div>
        </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{colours:state.colours}
};



export default connect(mapStateToProps)(QuizGame);