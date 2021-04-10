const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 5000

app.use(morgan('tiny'));
app.use(express.json());

let gustosHelados = [
    { id: 4, sabor: "chocolate", precio: 20},
    { id: 7, sabor: "vainilla", precio: 12},
    { id: 8, sabor: "limón", precio: 19}
];

function validarDatos(req, res, next) {
    const {sabor, precio} = req.body;

    if (!sabor)
    {
        return res.status(422).json({ msg: "no se envió el atributo sabor" });
    }
    if (!precio)
    {
        return res.status(422).json({ msg: "no se envió el atributo precio" });
    }
    next();
}

// app.use((req, res, next) =>{
//     console.log(`${req.method} ${req.originalUrl}`);
//     next();
// });

app.get('/helados', (req, res) =>
{
    res.status(200).json( {data: gustosHelados, status: "success"} );
});

app.get('/helados/:id', (req, res) =>
{

    const helado = gustosHelados.find( (el) => el.id == req.params.id );

    if (!helado) {
        return res.status(400).end();
    }
    res.json({data: helado});
});

app.post('/helados', validarDatos, (req, res) =>
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

app.put("/helados/:id", validarDatos, (req, res) => {
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


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})