const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send(`<h1>99 bottles <a href='/98'>take one down, pass it around</a><h1>`)
})

app.get('/:number_of_bottles', function (req, res) {
    let bottles = req.params.number_of_bottles
    if (bottles > 0) {
        res.send(`<h1>${bottles} <a href='/${bottles -1}'>take one down, pass it around</a><h1>`)
    }   else {
        res.send(`<h1><a href='/'>start over</a><h1>`)
    }
})

app.listen(3000)