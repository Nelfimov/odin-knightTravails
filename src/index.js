import { header } from '/src/header.js';
import { body } from '/src/body.js';
import { content } from '/src/content.js';
import { gameBoard } from '/src/gameBoard';

window.onload = () => {
  body.init();
  header.init();
  content.init();
  gameBoard.init();
};
