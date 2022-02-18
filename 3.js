function isPalindrome(x) {
   if(x.toLowerCase() === x.split('').reverse().join('').toLowerCase()) {
      return true;
   } else {
      return  false;
   }
}