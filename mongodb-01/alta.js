const mongoose = require('./conexion');

const Pelicula = mongoose.model('peliculas', {
    titulo: String,
    director: String,
    genero: String,
    lanzamiento: Date
})

const rsPelicula = new Pelicula({
    titulo: 'Hombre Araña',
    director: 'Steven Spielberg',
    genero: 'Comics',
    lanzamiento: new Date()
})

rsPelicula.save()