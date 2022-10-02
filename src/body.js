import { css } from '@emotion/css';

const body = (() => {
  const body = document.body;
  const init = () => {
    const classBody = css`
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      height: 100vh;
      width: 100vw;
    `;
    body.className = classBody;
  };

  return { init };
})()

export { body };