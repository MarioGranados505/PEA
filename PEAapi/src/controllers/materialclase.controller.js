import { json } from "express"
import { pool } from "../db.js"

export const getMaterialClases = async (req, res) => {
    const [rows] = await pool.query('Select * FROM materialclase')
    res.json(rows)
}

export const getMaterialClase = async (req, res) => {
    const [rows] = await pool.query('Select * FROM materialclase WHERE IdMaterial = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })

    res.json(rows[0])
}

export const createMaterialClase = async(req, res) => {
    const {IdMaterial, IdClase, NombreArchivo} = req.body
    const [rows] = await pool.query('INSERT INTO materialclase (IdMaterial, IdClase, NombreArchivo) VALUES (?, ?, ?)',[IdMaterial, IdClase, NombreArchivo])
    res.send({ rows })
}

export const deleteMaterialClase = async (req, res) => {

    const [result] = await pool.query('DELETE FROM materialclase where IdMaterial = ?', [req.params.id])

    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Valor no entontrado'
    })

    res.send('Valor eliminado')
}

export const updateMaterialClase = async (req, res) => {
    const{ id } = req.params
    const{ IdClase, NombreArchivo } = req.body
    
    const [result] = await pool.query(
        'UPDATE materialclase SET IdClase = IFNULL(?, IdClase), NombreArchivo = IFNULL(?, NombreArchivo) Where IdMaterial = ?',[IdClase, NombreArchivo, id]
    )

    if(result.affectedRows === 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM materialclase WHERE IdMaterial = ?', [id])

    res.json(rows[0])
}