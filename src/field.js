import { css } from '@emotion/css';

const field = (() => {
  const init = () => {
    fillGameBoard();
  };

  const createMainDiv = (index) => {
    const div = document.createElement('div');
    div.id = index;
    const styleGameBoard = getComputedStyle(document.getElementById('gameboard'));
    const width = parseInt(styleGameBoard.width);
    const classDiv = css`
      flex: 1 100%;
      border: 1px solid grey;
      height: ${width};
      width: ${width};
      flex-flow: row wrap;
    `;
    div.className = classDiv;
    return div;
  };

  const fillGameBoard = () => {
    let i = 0;
    while (i < 64) {
      document.getElementById('gameboard').appendChild(createMainDiv(i));
      ++i;
    };
  }

  return { init };
})();

export { field };