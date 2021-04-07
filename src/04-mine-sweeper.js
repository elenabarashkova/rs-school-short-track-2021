/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const numMatrix = [];
  matrix.forEach((item) => {
    const x = [];
    numMatrix.push(x);
    item.forEach(() => {
      x.push(0);
    });
  });
  function matrixCoordinates(i, j) {
    const topLine = i - 1;
    const bottomLine = i + 1;
    const leftCol = j - 1;
    const rightCol = j + 1;
    if (topLine >= 0) {
      if (leftCol >= 0) {
        numMatrix[topLine][leftCol] += 1;
      }
      numMatrix[topLine][j] += 1;
      if (rightCol <= matrix[0].length) {
        numMatrix[topLine][rightCol] += 1;
      }
    }
    if (bottomLine <= matrix.length) {
      if (leftCol >= 0) {
        numMatrix[bottomLine][leftCol] += 1;
      }
      numMatrix[bottomLine][j] += 1;
      if (rightCol <= matrix[0].length) {
        numMatrix[bottomLine][rightCol] += 1;
      }
    }
    if (leftCol >= 0) {
      numMatrix[i][leftCol] += 1;
    }
    if (rightCol <= matrix[0].length) {
      numMatrix[i][rightCol] += 1;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        matrixCoordinates(i, j);
      } else {
        numMatrix[i][j] += 0;
      }
    }
  }
  return numMatrix;
}

module.exports = minesweeper;
