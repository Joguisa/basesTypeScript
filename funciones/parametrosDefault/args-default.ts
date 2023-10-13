
(() => {
    const fullName = ( firstName: string, lastName?: string, upper = false): string => {
        if (upper) {
            return `${ firstName } ${ lastName ?? 'boolean'}`.toUpperCase();
        } else {
            return `${ firstName } ${ lastName ?? 'boolean'}`;
        }
    }

    const name = fullName( 'Tony', 'Stark', true );

    console.log({name});
    
})()