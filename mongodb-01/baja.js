const mongoose = require('./conexion')

const Pelicula = mongoose.model('peliculas', {
    titulo: String,
    director: String,
    genero: String,
    lanzamiento: Date
})

Pelicula.deleteOne({_id: '608210061cf17742b27ff13d'})
    .then( (error, resp) => {
        if (error)
        {
            console.log(error)
        }
        console.log(resp)
    } )