"use strict";
(() => {
    class Person {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, nickName, age) {
            this.name = name;
            this.nickName = nickName;
            this.age = age;
        }
        bio() {
            return `${this.name}, ${this.nickName}, ${this.age}`;
        }
    }
    const person = new Person('Tony', 'Ironman', 45);
    console.log(person);
    console.log(person.bio());
    console.log(Person.getAvgAge());
})();
