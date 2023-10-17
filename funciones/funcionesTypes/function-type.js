"use strict";
// TS logra inferir los tipos luego de una asignación
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveWorld = () => `El mundo esta salvado`;
    let myFunction;
    myFunction = 10;
    console.log(myFunction);
    myFunction = addNumber(15, 5);
    console.log(myFunction);
    myFunction = greet('Joguisa');
    console.log(myFunction);
    myFunction = saveWorld();
    console.log(myFunction);
})();
//# sourceMappingURL=function-type.js.map