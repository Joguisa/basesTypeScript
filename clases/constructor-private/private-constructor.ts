/**
 * Cada vez se usa menos
 * El constructor privado no permite crear instancias de la clase
 */
(() => {

    // Un constructor privado puede servir para controlar la 
    // manera en la cual las instancias son ejecutadas.

    class Genesis {

        static instance: Genesis;

        // Lo hacemos privado para controlar la manera en que será llamado
        private constructor( public name: string){

        }

        static callGenesis(): Genesis{
            if(!Genesis.instance){
                Genesis.instance = new Genesis('Genesis G70');
            }

            return Genesis.instance;
        }

        changeName(newName: string):void {
            this.name = newName;
        }
    }

    const genesis1 = Genesis.callGenesis();
    console.log(genesis1);

    genesis1.changeName('Genesis G80'); 
    
    

})()