"use strict";
/**
 * Tipos personalizados
 * "type" se usa para definir un tipo
 * en este caso se define un tipo "Hero" que es un objeto
 */
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Velocidad', 'Viajar en el tiempo'],
    };
    console.log(flash);
    // Si se necesita crear otro objeto exactamente igual
    let batman = {
        name: 'Bruce Wayne',
        age: 32,
        powers: ['Dinero', 'Inteligencia', 'Artes Marciales'],
        getName() {
            return this.name;
        }
    };
    console.log(batman);
})();
//# sourceMappingURL=customTypes.js.map