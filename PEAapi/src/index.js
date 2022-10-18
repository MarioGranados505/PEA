import express from 'express'
import {pool} from './db.js'
import usuarios from  './routes/usuarios.routes.js'
import clases from  './routes/clases.routes.js'


const app = express()

app.use(express.json())

app.use('/api', usuarios)
app.use('/api', clases)


app.listen(3000)
console.log('server corriendo y escribiendo')
