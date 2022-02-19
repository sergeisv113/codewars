function hello(name) {
   if (name === '' || typeof name === undefined) {
      return 'Hello, World!';
   } else  if (name.substr(-1) === name.toUpperCase()) {
       return `Hello, ${name.reverse()}!`;
   } else {
      return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
   }
}