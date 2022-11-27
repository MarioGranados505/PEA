import { Router } from "express";
import { getusuarioscursos, getUsuarioCursos, createUsuariocurso, deleteUsuariocurso } from '../controllers/usuariosencursos.controller.js'

const router = Router()

router.get('/usuarioscursos', getusuarioscursos)

router.get('/usuarioscursos/:id', getUsuarioCursos)

router.post('/usuarioscursos', createUsuariocurso)

router.delete('/usuarioscursos/:id', deleteUsuariocurso)

export default router