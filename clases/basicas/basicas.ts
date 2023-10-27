(() => {

    class Avenger {
        constructor( 
            private name: string, 
            public team: string, 
            public realName: string,
            avgAge: number = 24,
        ) { }

        bio() {
            return `${ this.name }`
        }
    }



    const antman: Avenger = new Avenger('Antman', 'Cap', 'Scott Lang');
    console.log(antman);

})()