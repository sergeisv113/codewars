function  find(nums) {
    let maxNum = Number.NEGATIVE_INFINITY;
    for (let num of nums) {
        if (num > maxNum) {
            maxNum = num
        }
    }
    return maxNum
}