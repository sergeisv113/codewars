function sumMix( x) {
 let str =  x.join(' + ');
 return eval(str);
}
sumMix([9, 3, '7', '3'])