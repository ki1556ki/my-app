import React, { Component } from 'react';
import Square from './square';

export default class Board extends Component {
    renderSuare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }
    
    renderRow(no) {
        return (
            <div className="board-row">
                {this.renderSuare(no * 3)}
                {this.renderSuare(no * 3 + 1)}
                {this.renderSuare(no * 3 + 2)}
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.renderRow(0)}
                {this.renderRow(1)}
                {this.renderRow(2)}
            </div>
        );
    }
}