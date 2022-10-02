import { body } from '/src/body.js';
import { gameBoard } from '/src/gameBoard';
import { knightMoves, Node } from '/src/knightMoves';

window.onload = () => {
  body.init();
  gameBoard.init();
  knightMoves.init();
};
