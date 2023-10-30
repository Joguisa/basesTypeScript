(() => {

    class Avenger {
        constructor(
            public nombre: string, 
            public nombreReal: string
        ) {
            console.log('Constructor Avenger llamado');
        }

        protected getFullName(): string {
            return `${this.nombre} ${this.nombreReal}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            nombre: string, 
            nombreReal: string, 
            public poder?: string
        ) {
            super(nombre, nombreReal);
            console.log('Constructor Xmen llamado');
        }

        get fullName(): string {
            return `${this.nombre} - ${this.nombreReal}`;
        }

        set fullName( pelota: string ) {
            if (pelota.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 caracteres');
            }
            this.nombre = pelota;
        }

        getFullNameDesdeXmen() {
            console.log( super.getFullName() );
        }

    }

    const wolverine: Xmen = new Xmen('Wolverine', 'Logan', 'Regeneración');
    console.log(wolverine);
    console.log(wolverine.fullName);
    console.log(wolverine.fullName = 'Dende');
    
    wolverine.getFullNameDesdeXmen();
})();