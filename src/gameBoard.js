import { css } from '@emotion/css';
import { field } from '/src/field';

const gameBoard = (() => {

  const init = () => {
    document.getElementById('content').appendChild(createMainDiv());
    field.init();
  };

  const createMainDiv = () => {
    const div = document.createElement('div');
    div.id = 'gameboard';
    const classDiv = css`
      background-color: white;
      display: flex;
      flex: 1 100%;
      height: max(350px, 40vw);
      max-width: max(350px, 40vw);
    `;
    div.className = classDiv;
    return div;
  }

  return { init };
})();

export { gameBoard };