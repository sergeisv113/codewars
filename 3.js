function squareSum(numbers){
    let result = 0;
    numbers.forEach(function(x) {
        result += Math.pow(x, 2);
    })
    return result
}
squareSum([0, 3, 4, 5]);
squareSum([1,2]);