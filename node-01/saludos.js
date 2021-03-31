function saludar( nombre ) {
    return `Hola ${nombre}`;
}

function despedirse( nombre ) {
    return `Chau ${nombre}`;
}

module.exports = {
    saludar: saludar,
    despedirse: despedirse,
    pi: 3.1416
}