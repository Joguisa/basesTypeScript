"use strict";
// Tarea: Darle tipado a los siguientes objetos y variables
// usando los tipos de TypeScript vistos
// Objetos
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
// Villanos debe de ser un arreglo de objetos personalizados
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
// Mystique debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
// let mystique : Mutante ;
let mystique;
mystique = charles;
console.log('M-C', mystique);
mystique = apocalipsis;
console.log('M-A', mystique);
