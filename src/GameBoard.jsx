import React, { useState } from "react";

import "./GameBoard.css";

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    const node = new LinkedListNode(value);
    this.head = node;
    this.tail = node;
  }
}

const GAME_BOARD_SIZE = 10;
const SNAKE_HEAD_INITIAL_VALUE = 44 //TODO: randomize the initial value of the snakes head

const GameBoard = () => {
  const [gameboard, setGameBoard] = useState(createGameBoard(GAME_BOARD_SIZE));
  const [snakeCells, setSnakeCells] = useState(new Set([SNAKE_HEAD_INITIAL_VALUE]));
  const [snaake, setSnake] = useState(new SinglyLinkedList(SNAKE_HEAD_INITIAL_VALUE));

  return (
    <div className="gameboard">
      {gameboard.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cellValue, cellIndex) => (
            <div
              key={cellIndex}
              className={`cell ${
                snakeCells.has(cellValue) ? "snake-cell" : ""
              }`}
            >{cellValue}</div> //{cellValue} is the unique identifer of each cell
          ))}
        </div>
      ))}
    </div>
  );
};

const createGameBoard = (GAME_BOARD_SIZE) => {
  let counter = 1;
  const gameboard = [];
  for (let row = 0; row < GAME_BOARD_SIZE; row++) {
    const currentRow = [];
    for (let col = 0; col < GAME_BOARD_SIZE; col++) {
      currentRow.push(counter++);
    }
    gameboard.push(currentRow);
  }
  return gameboard;
};

export default GameBoard;
