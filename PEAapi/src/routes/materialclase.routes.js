import { Router } from "express";
import {getMaterialClases, getMaterialClase, createMaterialClase, updateMaterialClase, deleteMaterialClase} from '../controllers/materialclase.controller.js'

const router = Router()

router.get('/materialclase', getMaterialClases)

router.get('/materialclase/:id', getMaterialClase)

router.post('/materialclase', createMaterialClase)

router.patch('/materialclase/:id', updateMaterialClase)

router.delete('/materialclase/:id', deleteMaterialClase)

export default router