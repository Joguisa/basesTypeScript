(() => {

    class Person {

        static getAvgAge() {
            return this.name;
        }

        constructor( 
            private name: string, 
            private nickName: string,
            private age: number,
        ){}

        public bio() {
            return `${ this.name }, ${ this.nickName }, ${ this.age }`;
        }
    }

    const person: Person = new Person('Tony', 'Ironman', 45);
    console.log(person);
    console.log(person.bio());
    console.log(Person.getAvgAge());
    


})();