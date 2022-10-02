import { css } from '@emotion/css';
import { knightMoves, Node } from '/src/knightMoves';

const field = (() => {
  const init = () => {
    fillGameBoard();
  };

  const createMainDiv = (x, y) => {
    const div = document.createElement('div');
    div.id = `${x}, ${y}`;
    const classDiv = css`
      border: 0px solid grey;
      height: 12.5%;
      width: 12.5%;
      & :hover {
        border: 1px solid black;
      };
    `;
    div.className = classDiv;
    div.addEventListener('click', function () {
      const [x, y] = [...this.id.split(', ')];
      knightMoves.render(Node(x, y));
    });
    return div;
  };

  const fillGameBoard = () => {
    let i = 8;
    let j = 1;
    while (i > 0) {
      j = 1;
      while (j < 9) {
        document.getElementById('gameboard').appendChild(createMainDiv(j, i));
        ++j;
      };
      --i;
    };
  }

  return { init };
})();

export { field };