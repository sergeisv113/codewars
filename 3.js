function positiveSum(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            arr[i].push(a);
            return a.reduce((b, c) => b+c)
        }
    }
}

