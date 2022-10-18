import { Router } from "express";
import {getClases, createClase, updateClase, deleteClase, getClase} from '../controllers/clases.controller.js'

const router = Router()

router.get('/clases', getClases)

router.get('/clases/:id', getClase)

router.post('/clases', createClase)

router.patch('/clases/:id', updateClase)

router.delete('/clases/:id', deleteClase)

export default router