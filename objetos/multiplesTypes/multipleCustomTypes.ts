/**
 * Múltiples tipos personalizados
 */

(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }

    let myCustomVariable: (string | number | Hero) = 1;

    console.log( myCustomVariable );
    console.log( typeof myCustomVariable );

    myCustomVariable = {
        name: 'Robin',
        age: 15,
        powers: ['Sigilo']
    }
    console.log( myCustomVariable );
    console.log( typeof myCustomVariable );
    
    
    
})();