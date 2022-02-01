function digitize(n) {
   let arr = Array.from(String(n), Number).reverse();
   return arr;
};
digitize(348597);