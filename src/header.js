import { css } from '@emotion/css';

const header = (() => {
  const body = document.body;

  const init = () => {
    body.appendChild(createMainDiv());
  };

  const createMainDiv = () => {
    const div = document.createElement('div');
    Object.assign(div, {
      id: 'header',
      class: 'header',
    });
    const classHeader = css`
      display: grid;
      background-color: #a1b3cf;
      grid-area: header;
    `;
    div.className = classHeader;
    return div;
  }

  return { init };
})();

export { header };