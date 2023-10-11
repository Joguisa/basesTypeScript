"use strict";
(() => {
    // se usa para indicar que una función no retorna nada
    function callJona() {
        return;
    }
    //Función de flecha void, no retorna nada
    const callJona2 = () => {
    };
    const a = callJona();
    console.log(a);
})();
