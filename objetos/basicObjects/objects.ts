// Objetos básicos

(() => {

    let flash: { name: string, age: number, powers: string[], getName?: () => string } = { 
        name: 'Barry Allen',
        age: 24,
        powers: ['Velocidad', 'Viajar en el tiempo'],
    }


    // flash = {
    //     name: 'Clark Kent',
    //     age: 50,
    //     powers: ['Velocidad', 'Viajar en el tiempo'],
    //     getName(): string {
    //         return this.name;
    //     }
    // }

    // console.log( flash.getName() );

    // Si se necesita crear otro objeto exactamente igual
    let batman: { name: string, age: number, powers: string[], getName?: () => string } = { 
        name: 'Bruce Wayne',
        age: 32,
        powers: ['Dinero', 'Inteligencia', 'Artes Marciales'],
    }

    console.log( batman );
    
    
})();