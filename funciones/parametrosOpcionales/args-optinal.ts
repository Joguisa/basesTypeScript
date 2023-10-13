// Para hacer los parámetros opcionales solo le agregamos un '?' al parámetro
// y un parámetro requerido no puede estar después de uno opcional
(() => {
    const fullName = ( firstName: string, lastName?: string ): string => {
        return `${ firstName } ${ lastName || 'No LastName'}`;
    }

    const name = fullName( 'Tony');

    console.log({name});
    
})()