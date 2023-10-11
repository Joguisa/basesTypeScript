"use strict";
// Tipo de dato NEVER
// El never se usa para cuando una funcion nunca va a retornar un valor
// Cuando se usa never muy probablemente es porque va a retornar un error
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error('Error critico... linea 25');
})();
