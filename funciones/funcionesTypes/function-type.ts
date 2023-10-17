// TS logra inferir los tipos luego de una asignación

(() => {

    const addNumber = ( a: number, b: number): number => a + b;
    const greet = ( name: string ): string => `Hello ${ name }`;
    const saveWorld = (): string => `El mundo esta salvado`;


    let myFunction;

    myFunction = 10;
    console.log(myFunction);

    myFunction = addNumber( 15, 5 );
    console.log(myFunction);

    myFunction = greet( 'Joguisa' );
    console.log(myFunction);

    myFunction = saveWorld();
    console.log(myFunction);
    

})();