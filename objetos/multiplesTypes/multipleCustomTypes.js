"use strict";
/**
 * Múltiples tipos personalizados
 */
(() => {
    let myCustomVariable = 1;
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Robin',
        age: 15,
        powers: ['Sigilo']
    };
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
})();
