import iconKnight from '/src/assets/knight.svg';

const Node = (x, y) => {
  return { x, y };
};

const knightMoves = (() => {
  const initialPlacement = Node(1, 1);

  const init = () => {
    render(initialPlacement);
  };

  const render = (node) => {
    const nextMove = document.getElementById(`${node.x}, ${node.y}`);

    let knight = document.getElementById('knight');
    if (knight) {
      if (knight.parentElement === nextMove) return;
      knight.parentElement.innerHTML = '';
    };
    knight = new Image();
    Object.assign(knight, {
      src: iconKnight,
      id: 'knight',
    });
    nextMove.appendChild(knight);
    return knight;
  };

  return { init, render };
})();

export { knightMoves, Node };
