const mongoose = require('./conexion');

const Pelicula = mongoose.model('peliculas', {
    titulo: String,
    director: String,
    genero: String,
    lanzamiento: Date
})

Pelicula.findOne({titulo: 'Titanic'})
    .then((res) => {
        console.log('La película encontrada es:');
        console.log(res);
    })