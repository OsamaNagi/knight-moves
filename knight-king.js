class Node {
  constructor(row, col, distance) {
    this.row = row;
    this.col = col;
    this.distance = distance;
  }
  getPositionString() {
    return `${this.row},${this.col}`;
  }
}

const dirctions = [
  [1, 2],
  [1, -2],
  [2, 1],
  [2, -1],
  [-1, 2],
  [-1, -2],
  [-2, 1],
  [-2, -1],
];

const getNeighbors = (row, col) => {
  const neighbors = [];

  for (const direction of dirctions) {
    const [rowChange, colChange] = direction;

    const newRow = row + rowChange;
    const newCol = col + colChange;

    neighbors.push([newRow, newCol]);
  }
};

const knightShortestPath = (targetRow, targetCol) => {
  const queue = [];
  const startNode = new Node(0, 0, 0);
  queue.push(startNode);

  const visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift();
    const { row, col, distance } = node;

    if (row === targetRow && col === targetCol) return distance;
    visited.add(node.getPositionString());

    for (const neighbor of getNeighbors(row, col)) {
      const [neighborRow, neighborCol] = neighbor;
      const neighborNode = new Node(neighborRow, neighborCol, distance + 1);

      if (visited.has(neighborNode.getPositionString())) continue;

      queue.push(neighborNode);
    }
  }
};
