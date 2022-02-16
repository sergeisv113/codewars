function findDifference(a, b) {
   return Math.abs(a.reduce((x, y) => x * y) - b.reduce((x, y) => x * y))
}
findDifference([15, 20, 25], [10, 30, 25])