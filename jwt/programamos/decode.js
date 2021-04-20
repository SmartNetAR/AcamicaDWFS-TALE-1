
//npm install jsonwebtoken
var jwt = require('jsonwebtoken');


// var original = [{
//     id: 1,
//     nombre: "Dani"
// }];

var firma = "Hola Mundo";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDU2Nzg5MCwibm9tYnJlIjoiTGVvIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjE4OTU5OTMzfQ.CccCJmdDg2Sq8B_1lX4FfCU2aoWq8vioYFbY1WdSR3U';
try {
    var decoded = jwt.verify(token, firma);
    console.log(decoded);
} catch (error) {
    console.error("Error:",error.message)
}

