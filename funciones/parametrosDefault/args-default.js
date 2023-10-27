"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName !== null && lastName !== void 0 ? lastName : 'boolean'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName !== null && lastName !== void 0 ? lastName : 'boolean'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
