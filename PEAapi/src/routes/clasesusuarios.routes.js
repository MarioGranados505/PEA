import { Router } from "express";
import {getClasesusuarios, createClasesusario, updateClaseusuario, deleteClaseusuario, getClasesusuario} from '../controllers/clasesusuarios.controller.js'

const router = Router()

router.get('/clases', getClasesusuarios)

router.get('/clases/:id', getClasesusuario)

router.post('/clases', createClasesusario)

router.patch('/clases/:id', updateClaseusuario)

router.delete('/clases/:id', deleteClaseusuario)

export default router