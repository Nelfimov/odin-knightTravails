import { css } from '@emotion/css';

const body = (() => {
  const body = document.body;
  const init = () => {
    const classBody = css`
      display: grid;
      margin: 0;
      min-height: 100vh;
      grid-template-columns: 1fr;
      grid-template-rows: 100px 1fr;
      grid-template-areas: 
        "header"
        "content";
    `;
    body.className = classBody;
  };

  return { init };
})()

export { body };