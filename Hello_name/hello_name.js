function hello(name) {
    if(name) {
       if(typeof name === 'string') {
         var name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
         }
       return "Hello, " + name + "!";
     }else{
       return "Hello, World!";
     }
   }

   console.log(hello('NiCk'));