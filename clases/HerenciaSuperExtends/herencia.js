"use strict";
(() => {
    class Avenger {
        constructor(nombre, nombreReal) {
            this.nombre = nombre;
            this.nombreReal = nombreReal;
            console.log('Constructor Avenger llamado');
        }
        getFullName() {
            return `${this.nombre} ${this.nombreReal}`;
        }
    }
    class Xmen extends Avenger {
        constructor(nombre, nombreReal, poder) {
            super(nombre, nombreReal);
            this.poder = poder;
            console.log('Constructor Xmen llamado');
        }
        get fullName() {
            return `${this.nombre} - ${this.nombreReal}`;
        }
        set fullName(pelota) {
            if (pelota.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 caracteres');
            }
            this.nombre = pelota;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', 'Regeneración');
    console.log(wolverine);
    console.log(wolverine.fullName);
    console.log(wolverine.fullName = 'Dende');
    wolverine.getFullNameDesdeXmen();
})();
