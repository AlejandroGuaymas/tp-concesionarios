const express = require('express') //requiero el modulo

const app = express(); //tomo la ejecucion de express

app.listen(3030,()=>console.log("El servidor esta corriendo en el puerto 3030")); //levantamos el servidor

const rutaHome = require('./routes/home');
const rutaSucursales = require('./routes/sucursales');
const rutaMarcas = require('./routes/marcas');
const rutaAutos = require('./routes/autos');

app.use('/',rutaHome)
app.use('/sucursales',rutaSucursales)
app.use('/marcas',rutaMarcas)
app.use('/autos',rutaAutos)