function howMuchILoveYou(nbPetals) {
   if (nbPetals == 0) {
       return 'I love you';
   } else  if (nbPetals == 1) {
       return 'a little';
   } else  if (nbPetals == 2) {
       return 'a lot';
   } else  if (nbPetals == 3) {
       return 'passionately';
   } else if (nbPetals == 4) {
       return  'madly';
   } else {
       return 'not at all';
   }
}
howMuchILoveYou(7)