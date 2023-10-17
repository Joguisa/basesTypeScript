"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let FuerzaSuperHeroe;
    (function (FuerzaSuperHeroe) {
        FuerzaSuperHeroe[FuerzaSuperHeroe["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        FuerzaSuperHeroe[FuerzaSuperHeroe["fuerzaBatman"] = 1] = "fuerzaBatman";
        FuerzaSuperHeroe[FuerzaSuperHeroe["fuerzaFlash"] = 5] = "fuerzaFlash";
        FuerzaSuperHeroe[FuerzaSuperHeroe["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(FuerzaSuperHeroe || (FuerzaSuperHeroe = {}));
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log('largoDelPoder: ', largoDelPoder);
})();
//# sourceMappingURL=ejercicio.js.map