/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let num = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    for (let a = 0; a < matrix.length; a++) {
      if (matrix[a][i] !== 0) {
        num += matrix[a][i];
      } else {
        break;
      }
    }
  }
  return num;
}
module.exports = getMatrixElementsSum;
