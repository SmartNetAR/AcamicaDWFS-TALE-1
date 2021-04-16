const express = require('express');
const router = express.Router();


router.post('/login', (req, res) =>
{
    res.json({msg: "login"})
})

router.post('/register', (req, res) =>
{
    res.json({msg: "register"})
})

module.exports = router;

