function sumStr(a,b) {
    let str = 0;
    str = +a + +b
    if (a == '' || b == '') {
        return 0;
    }
    return  str.toString();
}
sumStr('34', '5')