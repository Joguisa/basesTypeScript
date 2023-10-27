"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName, avgAge = 24) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name}`;
        }
    }
    const antman = new Avenger('Antman', 'Cap', 'Scott Lang');
    console.log(antman);
})();
