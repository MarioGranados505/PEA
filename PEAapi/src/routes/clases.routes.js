import { Router } from "express";
import {getClases} from '../controllers/clases.controller.js'

const router = Router()

router.get('/clases', getClases)
/*
router.get('/usuarios/:id', getUsuario)

router.post('/usuarios', createUsuario)

router.patch('/usuarios/:id', updateUsuario)

router.delete('/usuarios/:id', deleteUsuario)
*/
export default router