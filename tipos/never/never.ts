// Tipo de dato NEVER
// El never se usa para cuando una funcion nunca va a retornar un valor
// Cuando se usa never muy probablemente es porque va a retornar un error
(()=>{

    const error = (message: string):never => {

        throw new Error(message)

    }

    error('Error critico... linea 25')
})()