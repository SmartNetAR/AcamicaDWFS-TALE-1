const {add} = require("./index");

describe( "test de sumas", () =>{

    test( "debería dar cero", () => {
        const resultado = add(0,0);
        expect(resultado).toBe(0);
    })

    test( "debería dar 10", () => {
        const resultado = add(5,5);
        expect(resultado).toBe(10);
    })

    test( "debería dar 40000", () => {
        const resultado = add(20000,5);
        expect(resultado).toBe(40000);
    })


} )