const express = require('express');
const app = express()
const port = 5000

const gustosHelados = [
    { id: 1, sabor: "chocolate"},
    { id: 2, sabor: "vainilla"},
    { id: 3, sabor: "limón"}
];

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


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})