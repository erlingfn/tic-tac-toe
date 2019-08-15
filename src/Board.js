import React from 'react';
import Square from './Square.js'; 
import './App.css';

function checkWinner(board) {
    const winnerComboes = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]];
    let won = false;
    winnerComboes.forEach((array) => {
        let firstLetter = board[array[0]];
        if((firstLetter === board[array[1]] && firstLetter === board[array[2]]) && firstLetter !== '' ){
            won = true;
        }
    });
    return won;
}

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: ['', '', '', '', '', '', '', '', ''],
            isNext: false,
            isWon: false

        }

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(number) {
        if(this.state.board[number - 1] !== '' || this.state.isWon) {
            return;
        }
        if(checkWinner(this.state.board)) {
            alert('You won!');
            this.setState({isWon: true});
            return;
        }
        this.setState(
            function(state) {
                let newBoard = state.board.slice();
                newBoard[number - 1] = (state.isNext ? 'O' : 'X');
                return({board: newBoard, isNext: !state.isNext});
            });
    }

    reset() {
        this.setState({
            board: ['', '', '', '', '', '', '', '', ''],
            isWon: false
        })
    }

    render() {

        return(
            <>
            <div>
                <div className="BoardRow">
                    <Square number={1} letter={this.state.board[0]} handleClick={this.handleClick}/>
                    <Square number={2} letter={this.state.board[1]} handleClick={this.handleClick}/>
                    <Square number={3} letter={this.state.board[2]} handleClick={this.handleClick}/>
                </div>
                <div className="BoardRow">
                    <Square number={4} letter={this.state.board[3]} handleClick={this.handleClick}/>
                    <Square number={5} letter={this.state.board[4]} handleClick={this.handleClick}/>
                    <Square number={6} letter={this.state.board[5]} handleClick={this.handleClick}/>
                </div>
                <div className="BoardRow">
                    <Square number={7} letter={this.state.board[6]} handleClick={this.handleClick}/>
                    <Square number={8} letter={this.state.board[7]} handleClick={this.handleClick}/>
                    <Square number={9} letter={this.state.board[8]} handleClick={this.handleClick}/>
                </div>
            </div>
            <button onClick={() => this.reset()}>Reset</button>
        </>
        )
    }
}
