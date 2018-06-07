import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';


class QuizGame extends React.Component {
  state = {
    squares: [],
    level: 1,
    color: '',
    clicks: []
  };

  componentDidMount() {
    this.renderSquare();
  }

  clickHandler = (i) => {
    const clicks = [...this.state.clicks];
    clicks[i] = !clicks[i];
    this.setState({clicks})
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
    console.log(clicks);
    console.log(colours);

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
        <div className="allBlocks">
          {squares}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {variety: state.variety}
};


export default connect(mapStateToProps)(QuizGame)