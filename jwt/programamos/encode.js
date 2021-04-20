//npm install jsonwebtoken
var jwt = require('jsonwebtoken');


var firma = "Hola Mundo";

var token = jwt.sign({
    id:1234567890,
    nombre: "Brigite"
}, firma);

console.log(token)
