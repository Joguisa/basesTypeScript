
/**
 * No se puede crear una instancia de una clase abstracta
 * Se puede crear una clase que herede de una clase abstracta
 * Se puede crear un método abstracto en una clase abstracta
 * Los métodos abstractos no contienen implementación
 * Los métodos abstractos deben ser implementados en la clase que hereda de la clase abstracta
 * Los métodos abstractos deben ser implementados con la misma firma
 * Los métodos abstractos deben ser implementados con el mismo modificador de acceso
 * Los métodos abstractos deben ser implementados con el mismo tipo de retorno
 * Los métodos abstractos deben ser implementados con el mismo tipo de parámetros
 * Los métodos abstractos deben ser implementados con el mismo número de parámetros
 * 
 */
(() => {

    abstract class Futbol {
        constructor(
            public name: string,
            public realName: string,
        ) { }
    }

    class Indor extends Futbol {}

    class Futbolsala extends Futbol{}

    const maradona = new Indor('Maradona', 'Diego Armando Maradona');
    const fenomeno = new Futbolsala('Ronaldo', 'Ronaldo Nazario de Lima');

    const printName = ( jugador: Futbol ) => {
        console.log(jugador.realName);
    }

    printName(maradona);
    printName(fenomeno);

    console.log(maradona);
    console.log(fenomeno);

})();