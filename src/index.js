
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = [];
  if (matrix == undefined) return result;

  matrix.forEach((e, index) => {
    if (index !== 0 && index % 2 !== 0) e.reverse();

    for (let i = 0; i < e.length; i++) {
      result.push(e[i]);
    }
  });

  return result;
}
