const mongoose = require('./conexion');

const Pelicula = mongoose.model('peliculas', {
    titulo: String,
    director: String,
    genero: String,
    lanzamiento: Date
})

Pelicula.find().then((resp => {
    console.log(resp)
}))

Pelicula.findOne({titulo: 'Titanic'})
    .then((res) => {
        console.log('La película encontrada es:');
        console.log(res);
    })