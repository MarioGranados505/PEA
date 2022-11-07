import app from './app.js'
import {PORT} from './config.js'
import express from 'express'
import {pool} from './db.js'
import usuarios from  './routes/usuarios.routes.js'
import clases from  './routes/clases.routes.js'
import materialclase from  './routes/materialclase.routes.js'
import clasesusuario from  './routes/clasesusuarios.routes.js'

app.listen(PORT)
console.log('server corriendo y escribiendo', PORT)