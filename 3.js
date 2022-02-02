function well(x){
    const result = x.filter(i => i === 'good').length;
            if (result == 2 || result == 1) {
                return 'Publish!'
            } else if (result > 2) {
                return 'I smell a series!';
            } else {
                return 'Fail!';
            }
}
