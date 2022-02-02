let paperwork = (n, m) => {
   let  res = 0;
   res = n * m;
    if (n < 0 || m < 0) {
        return +'0';
    } else {
        return res;
    }
}
