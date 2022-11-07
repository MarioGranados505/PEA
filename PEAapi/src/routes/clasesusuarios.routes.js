import { Router } from "express";
import {getClasesusuarios, createClasesusario, updateClaseusuario, deleteClaseusuario, getClasesusuario} from '../controllers/clasesusuarios.controller.js'

const router = Router()

router.get('/clasesusuarios', getClasesusuarios)

router.get('/clasesusuarios/:id', getClasesusuario)

router.post('/clasesusuarios', createClasesusario)

router.patch('/clasesusuarios/:id', updateClaseusuario)

router.delete('/clasesusuarios/:id', deleteClaseusuario)

export default router