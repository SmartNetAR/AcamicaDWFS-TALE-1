const express = require('express');
const router = express.Router();
const validarDatos = require('../middlewares/validarDatos');

let gustosHelados = [
    { id: 4, sabor: "chocolate", precio: 20, cantidad: 2},
    { id: 7, sabor: "vainilla", precio: 12, cantidad: 5},
    { id: 8, sabor: "limón", precio: 19, cantidad: 0},
    { id: 9, sabor: "dulce de leche", precio: 19, cantidad: 0},
];
router.get('/', (req, res) =>
{
    const {sabor} = req.query;

    if (sabor) {
        const heladosFiltrados = gustosHelados.filter( helado => {
            return helado.sabor.includes(sabor);
        })
        return res.status(200).json( {data: heladosFiltrados, status: "success"} );

    }

    res.status(200).json( {data: gustosHelados, status: "success"} );
});

router.get('/:id([0-9]+)', (req, res) =>
{

    const helado = gustosHelados.find( (el) => el.id == req.params.id );

    if (!helado) {
        return res.status(400).json({msg: `No se encontró el helado con id ${req.params.id}` })
    }
    res.json({data: helado});
});

router.post('/', validarDatos, (req, res) =>
{
    const {sabor, precio} = req.body;

    const lastId = gustosHelados[gustosHelados.length -1].id;
    const helado = {
        id: lastId + 1,
        sabor,
        precio
    };

    gustosHelados.push(helado);
    res.json({data: helado});
});

router.put("/:id", validarDatos, (req, res) => {
    const {sabor, precio} = req.body;
    const id = parseInt(req.params.id);

    const nuevoArreglo = gustosHelados.map((helado) => {
        if (helado.id === id) {
            return ({ id, sabor, precio })
        }
        else
        {
            return helado
        }
    });

    gustosHelados = nuevoArreglo;

    res.status(201).json({msg: 'updated'});

} )

router.get('/reponer', (req, res) =>
{
    const heladosAReponer = gustosHelados.filter( helado => {
        return helado.cantidad === 0;
    } )

    res.status(200).json({data: heladosAReponer});

})


module.exports = router;