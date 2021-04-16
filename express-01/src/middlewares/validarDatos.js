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

module.exports = validarDatos;