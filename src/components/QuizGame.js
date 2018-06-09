import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';


class QuizGame extends React.Component {
  state = {
    squares: [],
    level: 1,
    color: '',
    clicks: [],
    correct:[],
  };

  componentDidMount() {
    this.renderSquare();
  }

  clickHandler = (i) => {
    const clicks = [...this.state.clicks];
    clicks[i] = !clicks[i];
    this.setState({clicks});
  };



newLevel = () =>{

  const newLevel =this.state.level+1;
  this.setState({level: newLevel});
  this.setState({clicks: ''});
  this.setState({correct: ''});
  this.renderSquare();
  };

correctTries =()=> {
  console.log(this.state.clicks);

    const clicked = [...this.state.clicks].filter(click => {
      return click === true
    });
    console.log(clicked);
    this.setState({correct: clicked}, function(){
      if (this.state.correct.length === 5) return this.newLevel()
    });
};


  renderSquare = () => {

    const url = this.props.match.params.colour;

    let activeColour = this.props.variety.filter(item => {
      return item.colour === url
    });

    const r = activeColour[0].values[0];
    const g = activeColour[0].values[1];
    const b = activeColour[0].values[2];


    const newValue = [r, g, b];
    const clicks = [];

    let colours = [];
    for (let i = 0; i < 49; i++) {
      colours.push(`rgb(${newValue})`);
      clicks.push(false)
    }

    for (let i = 50; i < 55; i++) {
      colours.push(`rgb(${newValue[0] + 100 / this.state.level},${newValue[1] + 100 / this.state.level},${newValue[2] + 150 / this.state.level})`);
      clicks.push(true);
    }

    const shuffle = _.shuffle(colours);
    this.setState({
      squares: shuffle
    });
  };


  render() {

    const squares = this.state.squares.map((square, i) => {
      return <div
          key={i}
          onClick={() => this.clickHandler(i)}
          className={this.state.clicks[i]? "activeBlock" : "singleBlock"}
          style={{backgroundColor: square}}
      >
      </div>
    });


    return (
        <div>

        <h1>Jūsų dabartinis lygmuo: {this.state.level}</h1>
          <div className="allBlocks">
          {squares}
        </div>

          <div
          onClick={() => this.correctTries()}
          className="nl-button"
          style={{backgroundColor: this.props.match.params.colour}}
          >next level
        </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {variety: state.variety}
};


export default connect(mapStateToProps)(QuizGame)