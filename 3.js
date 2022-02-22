function tripleTrouble(one, two, three){
   let arr = [] ;
   for (let i = 0; i < one.length; i += 1) {
      arr.push(one[i], two[i], three[i]);
   }
   return arr.join('');
}
tripleTrouble("Sea","urn","pms")