"use strict";
//Hacer función cuyo primer valor sea obligatorio
// y todas las demás son opcionales
// además de poder enviar cualquier cantidad de paramétros extras
// Los restArguments
(() => {
    const fullName = (firstName, ...restArguments) => {
        return `${firstName} ${restArguments.join(' ')}`;
    };
    const superman = fullName('Jonatan', 'Josue', 'Guillen');
    console.log({ superman });
})();
//# sourceMappingURL=args-rest.js.map