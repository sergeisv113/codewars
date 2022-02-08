function find_average(array) {
   let i = array.reduce((a, b) => (a + b)) / array.length;
    if (i == 0) {
        return 0;
    }
}
find_average([1,1,1])
