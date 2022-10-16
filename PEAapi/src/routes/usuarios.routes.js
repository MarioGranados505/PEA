import { Router } from "express";
import {getUsuarios, createUsuario, updateUsuario, deleteUsuarios} from '../controllers/usuarios.controller.js'

const router = Router()

router.get('/usuarios', getUsuarios)

router.post('/usuarios', createUsuario)

router.put('/usuarios', updateUsuario)

router.delete('/usuarios', deleteUsuarios)

export default router