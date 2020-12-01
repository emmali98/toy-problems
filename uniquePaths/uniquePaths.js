/*
  Each time the robot moves down or to the right, we've created a new problem with slightly
  smaller dimensions, until we have a 1xn or mx1 grid, where there is only one path for the
  robot to take.

  Another approach: use memoization? Start from bottom of grid and move up and left?
*/

var uniquePaths = function(m, n) {
  if (m === 1 || n === 1) return 1;

  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
}
