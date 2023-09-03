var uniquePaths = function (m, n) {
  let grid = Array.from(Array(m), () => new Array(n));
  for (let i = 0; i < grid[0].length; i++) grid[0][i] = 1;
  for (let i = 0; i < grid.length; i++) grid[i][0] = 1;
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[i].length; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }
  return grid[m - 1][n - 1];
};

console.log(uniquePaths(3, 2));
