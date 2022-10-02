import { css } from '@emotion/css';
import { field } from '/src/field';

const gameBoard = (() => {

  const init = () => {
    document.body.appendChild(createMainDiv());
    field.init();
  };

  const createMainDiv = () => {
    const div = document.createElement('div');
    div.id = 'gameboard';
    const classDiv = css`
      background-color: white;
      position: relative;
      border: 0.5px solid grey;
      box-shadow: 10px 10px 30px grey;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      flex: 1 1 100%;
      flex-wrap: wrap;
      height: max(370px, 40vw);
      max-width: max(370px, 40vw);
      & :nth-child(2), & :nth-child(4), & :nth-child(6), & :nth-child(8), & :nth-child(9),
      & :nth-child(11), & :nth-child(13), & :nth-child(15), & :nth-child(18), & :nth-child(20),
      & :nth-child(22), & :nth-child(24), & :nth-child(25), & :nth-child(27), & :nth-child(29),
      & :nth-child(31), & :nth-child(34), & :nth-child(36), & :nth-child(38), & :nth-child(40),
      & :nth-child(41), & :nth-child(43), & :nth-child(45), & :nth-child(47), & :nth-child(50),
      & :nth-child(52), & :nth-child(54), & :nth-child(56), & :nth-child(57), & :nth-child(59),
      & :nth-child(61), & :nth-child(63)
       {
        background-color: grey;
      }
    `;
    div.className = classDiv;
    return div;
  }

  return { init };
})();

export { gameBoard };