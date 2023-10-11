(() => {

    // se usa para indicar que una función no retorna nada

    function callJona():void {
        return;
    }

    //Función de flecha void, no retorna nada
    const callJona2 = ():void => {

    }

    const a = callJona();
    console.log(a);
    

})()