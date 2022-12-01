const express = require('express')

const { Server: HttpServer } = require('http')
const { Server: Socket } = require('socket.io')

const ContenedorMemoria = require('../controllers/productControler.js')
const ContenedorArchivo = require('../controllers/ContenedorArchivo.js.js')

//--------------------------------------------
// instancio servidor, socket y api
const productos = [
    { id: 1, text: 'Computadora' },
    { id: 2, descripcion: 'Televisor' },
    { id: 3, descripcion: 'Pava electrica' }
]


//--------------------------------------------
// configuro el socket

io.on('connection', async socket => {
    //productos
    socket.emit('productos', productos)
    //mensajes
    console.log("un cliente se ha conectado");
});

//--------------------------------------------
// agrego middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//--------------------------------------------
// inicio el servidor

const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))