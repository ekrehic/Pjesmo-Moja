import React from 'react';
import {formatCategory} from '../helpers.js';
import PropTypes from 'prop-types';

class QuestionHeader extends React.Component{

  getStyle = (color) => {
    return{ backgroundColor: color }
  }

  static propTypes = {
    category: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    highscore: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    newGame: PropTypes.func.isRequired
  }

  render(){
    return (
      <div style={this.getStyle(this.props.color)} className="question-header">
       <p className="current">{this.props.current}/{this.props.total}</p>
       <p className="score"> Score: {this.props.score} </p>
       <p className="highscore"> highscore: {this.props.highscore} </p>
       <h2 className="category">{formatCategory(this.props.category)}</h2>
       <button className="quit" onClick={this.props.newGame}>Quit</button>
      </div>
    );
  }
}

export default QuestionHeader;
