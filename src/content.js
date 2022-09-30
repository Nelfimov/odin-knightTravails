import { css } from '@emotion/css';

const content = (() => {
  const body = document.body;

  const init = () => {
    body.appendChild(createMainDiv());
  }

  const createMainDiv = () => {
    const div = document.createElement('div');
    div.id = 'content';
    const classDiv = css`
      grid-area: content;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #c0c1c2;
    `;
    div.className = classDiv;
    return div;
  };

  return { init };
})();

export { content };